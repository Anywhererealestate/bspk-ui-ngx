/**
 * This script contains functionality that needs to run before running the meta script.
 *
 * It is responsible for generating the compodoc documentation in JSON format and merging all settings.ts files into a
 * single file for easier importing in the meta script.
 *
 * $ npx tsx .scripts/meta-pre.ts --write
 */

import { execSync } from 'child_process';
import fs from 'fs';
import { CompodocDocumentation, Interface, InterfaceProp } from './types';
import { ComponentMetaInput } from '../../projects/shared/src/types';
import { stripCompodocMarkup } from './utils';

/** Functionality that needs to run before running meta script */
export function preMeta(force = false) {
    execSync(`rm -rf projects/demo/src/generated && mkdir -p projects/demo/src/generated/components`, {
        stdio: 'inherit',
    });

    if (force || !fs.existsSync('.tmp/documentation.json')) {
        execSync('npx @compodoc/compodoc -p tsconfig.doc.json -e json -d ./.tmp --silent', { stdio: 'inherit' });
    }

    const compodocData: CompodocDocumentation = JSON.parse(fs.readFileSync('.tmp/documentation.json', 'utf-8'));

    const COMPONENT_SELECTORS: Record<string, string> = [...compodocData.components, ...compodocData.directives]
        .filter((comp) => !!comp.selector)
        .reduce(
            (acc: Record<string, string>, comp) => {
                acc[comp.selector!.replace(/.*\[/g, '').replace(/\].*/g, '')] = comp.name;
                return acc;
            },
            {} as Record<string, string>,
        );

    const TYPEALIASES: Record<string, string[]> = compodocData.miscellaneous.typealiases.reduce(
        (acc, alias) => {
            // ignore certian type aliases
            if (!['BspkIcon'].includes(alias.name))
                acc[alias.name] = alias.rawtype.split('|').map((t) => t.trim().replace(/"/g, '')) || [];
            return acc;
        },
        {} as Record<string, string[]>,
    );

    const INTERFACES = createInterfaceDictionary(compodocData.interfaces, TYPEALIASES);

    fs.writeFileSync(
        '.tmp/compodoc.json',
        JSON.stringify(
            {
                COMPONENT_SELECTORS,
                TYPEALIASES,
                INTERFACES,
            },
            null,
            4,
        ),
    );

    console.log('\x1b[32m✅ Metadata pre-processing complete.\x1b[0m');
}

// if --write is provided, generate the routes once
if (process.argv.includes('--write')) {
    preMeta(process.argv.includes('f'));
}

// creates a dictionary of interfaces and props for easy lookup,
// merges all extended interfaces, and resolves the root prop for any prop that references another prop (e.g. "TableProps['columns']" will resolve to the actual "columns" prop in the TableProps interface)
function createInterfaceDictionary<T extends Interface>(
    interfaces: T[],
    TYPEALIASES: Record<string, string[]> = {},
): Record<string, Record<string, InterfaceProp>> {
    const dict: Record<string, Record<string, InterfaceProp>> = {};

    // first we create a dictionary of interfaces and their props for easy lookup
    interfaces.forEach((i) => {
        const props: Record<string, InterfaceProp> = {};
        if (i.properties) {
            i.properties.forEach((prop) => {
                props[prop.name] = { ...prop };
            });
        }
        dict[i.name] = props;
    });

    const mergeExtendedInterfaces = (
        interfaceName: string,
        visited = new Set<string>(),
    ): Record<string, InterfaceProp> => {
        if (visited.has(interfaceName)) {
            console.warn(`Circular reference detected for interface ${interfaceName}`);
            return {};
        }
        visited.add(interfaceName);

        const i = interfaces.find((intf) => intf.name === interfaceName);
        if (!i) {
            console.warn(`Unable to find interface ${interfaceName} for merging`);
            return {};
        }

        let mergedProps: Record<string, InterfaceProp> = { ...dict[interfaceName] };

        if (i.extends) {
            i.extends.forEach((extendName) => {
                const extendedProps = mergeExtendedInterfaces(extendName, visited);
                mergedProps = { ...mergedProps, ...extendedProps };
            });
        }

        return mergedProps;
    };

    // merge extended interfaces
    interfaces.forEach((i) => {
        dict[i.name] = mergeExtendedInterfaces(i.name);
    });

    const findRootPropType = (prop: InterfaceProp) => {
        let nextProp: InterfaceProp = prop;

        if (Array.isArray(prop.type) || ['string', 'number', 'boolean', 'null', 'undefined'].includes(prop.type))
            return prop;

        // replace the " | undefined" from the end of the type string
        prop.type = prop.type.replace(/ \| undefined$/, '');

        if (prop.type.includes('Exclude')) {
            // handle this later, until then skip other conditionals
        } else if (prop.type.includes(' | ')) {
            const types = prop.type.split(' | ').map((t) => t.trim().replace(/"/g, ''));
            nextProp.type = types;
        } else if (dict[prop.type]?.[prop.name]) {
            nextProp = { ...prop, ...findRootPropType(dict[prop.type][prop.name]) };
        } else if (prop.type.endsWith('[]')) {
            const itemType = prop.type.slice(0, -2);
            if (TYPEALIASES[itemType]) {
                nextProp.type = TYPEALIASES[itemType];
            }
        } else if (TYPEALIASES[prop.type]) {
            nextProp.type = TYPEALIASES[prop.type];
        } else if (prop.type.includes('[') && prop.type.includes(']')) {
            const match = prop.type.match(/([a-zA-Z0-9_]+)(?:<[^>]+>)?\[['"]([^'"]+)['"]\]/);
            const [, refInterfaceName, refPropName] = match || [];
            if (dict[refInterfaceName]?.[refPropName]) {
                nextProp = { ...prop, ...findRootPropType(dict[refInterfaceName][refPropName]) };
            }
        }

        return nextProp;
    };

    // resolve root prop for any prop that references another prop
    // (e.g. "TableProps['columns']" will resolve to the actual "columns" prop in the TableProps interface)
    // if the prop type references another prop, we replace it with the referenced prop's type and description (if the original prop doesn't have a description)
    Object.entries(dict).forEach(([interfaceName, props]) => {
        Object.entries(props).forEach(([propName, prop]) => {
            dict[interfaceName][propName] = findRootPropType(prop);
        });
    });

    return dict;
}
