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

    // creates a dictionary of interfaces and props for easy lookup, merges all extended interfaces
    const INTERFACES = (() => {
        const findRootProp = (maybeProp: InterfaceProp): InterfaceProp => {
            let prop = maybeProp;

            const maybeInterface = compodocData.interfaces.find((i) => i.name === maybeProp.type);
            const maybeProperty = maybeInterface?.properties.find((p) => p.name === maybeProp.name);

            return maybeProperty ? findRootProp(maybeProperty) : prop;
        };

        const resolveExtends = (_interface: Interface) => {
            if (!_interface.extends.length) return;

            // Resolve all extends first
            _interface.extends = _interface.extends.map(
                (interfaceName) => compodocData.interfaces.find((i) => i.name === interfaceName)!,
            ) as unknown as string[];
        };

        compodocData.interfaces.forEach((def) => {
            resolveExtends(def);
        });

        compodocData.interfaces.forEach((def) => {
            def.extends.filter(Boolean).forEach((extendedInterface: unknown) => {
                const nextInterface =
                    typeof extendedInterface === 'string'
                        ? compodocData.interfaces.find((i) => i.name === extendedInterface)
                        : (extendedInterface as Interface);

                if (!nextInterface) {
                    console.warn(`Unable to find extended interface ${extendedInterface} for interface ${def.name}`);
                    return;
                }

                // Merge properties from extended interface into current interface, ensuring no duplicates
                const extendedProps = nextInterface.properties.filter(
                    (prop) => !def.properties.some((p) => p.name === prop.name),
                );

                (def.properties as unknown as InterfaceProp[]).push(...extendedProps);
            });
        });

        const interfaceDictionary: Record<string, Record<string, ComponentMetaInput>> = {};

        // Build dictionary
        compodocData.interfaces.forEach((def) => {
            interfaceDictionary[def.name] = {};

            def.properties.forEach((property) => {
                let actualProperty = findRootProp(property);

                const propMeta = compodocToMetaProp(actualProperty, def.name, TYPEALIASES);
                if (propMeta) interfaceDictionary[def.name][property.name] = propMeta;
                else console.warn(`Unable to generate metadata for property ${property.name} in interface ${def.name}`);
            });
        });

        return interfaceDictionary;
    })();

    fs.writeFileSync(
        '.tmp/compodoc.json',
        JSON.stringify(
            {
                COMPONENT_SELECTORS,
                INTERFACES,
                TYPEALIASES,
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

/** Generates metadata props for a given interface name. */
function compodocToMetaProp(
    prop: InterfaceProp,
    interfaceName: string,
    TYPEALIASES: Record<string, string[]>,
): ComponentMetaInput | null {
    // TODO: handle TYPESCRIPT TYPES like Exclude<"a" | "b" | "c", "b">, Omit<"a" | "b" | "c", "b">, and Record<string, any>, FabContainer, FabIconType

    if (!prop) return prop;

    const defaultValue = stripCompodocMarkup(
        'jsdoctags' in prop
            ? prop.jsdoctags?.find((tag) => tag.tagName?.escapedText === 'default')?.comment
            : undefined,
    );

    const description = (() => {
        const desc = 'rawdescription' in prop ? prop.rawdescription : undefined;

        // remove ```.*``` blocks from description
        return desc?.replace(/```[\s\S]*?```/g, '').trim();
    })();

    const type = (() => {
        // split, remove surrounding quotes, and trim each type if it's a union type

        let parsedType: string | string[] = prop.type.trim();

        if (
            // types that include '|' but are not union types (e.g. generics like Omit<"a" | "b" | "c", "b">) should be left as-is
            prop.type.includes('|') &&
            // exclude generics
            !['Omit<', 'Exclude<', 'Record<'].some((generic) => prop.type.startsWith(generic))
        ) {
            parsedType = parsedType.split('|').map((t) => t.replace(/['"]/g, '').trim());
        }

        // check if primitive type
        else if (['string', 'number', 'boolean', 'null', 'undefined'].includes(prop.type)) {
            parsedType = prop.type;
        } else {
            // check if type is a type alias
            parsedType = TYPEALIASES[prop.type] || parsedType;
        }

        return parsedType.length === 1 ? parsedType[0] : parsedType;
    })();

    return {
        name: prop.name,
        description,
        type,
        default: defaultValue,
        required: !prop.optional,
    };
}
