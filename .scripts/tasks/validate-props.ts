/**
 * Compare Angular (from generated meta) and React exported prop names for each component.
 *
 * $ npx tsx .scripts/tasks/validate-props.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const metaPath = '.tmp/meta.json';
const reactMetaPath = '../bspk-ui/.tmp/data.json';

if (!fs.existsSync(metaPath)) {
    throw new Error(`Component meta file not found at ${metaPath}. Please run your meta script first.`);
}
if (!fs.existsSync(reactMetaPath)) {
    throw new Error(
        `React meta data not found at ${reactMetaPath}. Please ensure the path is correct and the file is generated.`,
    );
}

function mapNgxToReactName(ngxName: string): string {
    const base = ngxName.startsWith('ui-') ? ngxName.slice(3) : ngxName;
    return base
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

const angularMeta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
const reactMeta = JSON.parse(fs.readFileSync(reactMetaPath, 'utf-8'));
const typesMeta = reactMeta.typesMeta || [];

const errorComponents: string[] = [];
const successComponents: string[] = [];
const missingComponents: string[] = [];

const propNameMap: Record<string, string> = {
    ariaLabel: 'aria-label',
    ariaDescribedBy: 'aria-describedby',
    ariaErrorMessage: 'aria-errormessage',
    ariaSelected: 'aria-selected',
    valueChange: 'onChange',
};

(angularMeta.components || []).forEach((component: any) => {
    const ngxName = component.slug || component.name;
    const reactName = mapNgxToReactName(ngxName);

    // Get Angular prop names from meta JSON
    const ngxInputs = (component.inputs || []).map((input: any) => input.name);
    const ngxOutputs = (component.outputs || []).map((output: any) => output.name);
    const ngxProps = [...ngxInputs, ...ngxOutputs];

    // For comparison, normalize Angular prop names using the mapping (e.g. ariaLabel -> aria-label)
    const normalizedNgxProps = ngxProps.map((p) => propNameMap[p] || p);

    // Log all Angular props for this component (original names)
    console.log(`\x1b[34mNGX "ui-${ngxName}" props:\x1b[0m`, ngxProps);

    // Find React props from typesMeta
    const reactPropsTypeName = reactName + 'Props';
    const typeMeta =
        typesMeta.find((t: any) => t.name === reactPropsTypeName) ||
        typesMeta.find((t: any) => t.name === 'Props' && t.file.toLowerCase().includes(reactName.toLowerCase()));

    const reactProps =
        typeMeta && Array.isArray(typeMeta.properties) ? typeMeta.properties.map((p: any) => p.name) : [];

    // Log all React props for this component
    console.log(`\x1b[35mReact "${reactName}" props:\x1b[0m`, reactProps);

    if (ngxProps.length === 0 && reactProps.length === 0) {
        console.log(
            `\x1b[33m  No exported props found in either Angular or React for "${ngxName}" / "${reactName}"\x1b[0m`,
        );
        return;
    }
    if (ngxProps.length === 0) {
        console.log(`\x1b[33m  No exported props found in Angular for "${ngxName}"\x1b[0m`);
    }
    if (reactProps.length === 0) {
        console.log(`\x1b[33m  No exported props found in React for "${reactName}"\x1b[0m`);
    }

    // Compare sets
    const ngxSet = new Set(normalizedNgxProps);
    const reactSet = new Set(reactProps);

    const onlyInNgx = ngxProps.filter((p) => !reactSet.has(propNameMap[p] || p));
    const onlyInReact = reactProps.filter((p) => !normalizedNgxProps.includes(p));

    if (onlyInNgx.length || onlyInReact.length) {
        errorComponents.push(
            `Props mismatch (NGX: ui-${ngxName}) / (React: ${reactName}):\n` +
                (onlyInNgx.length ? `\x1b[34m    NGX only: ${onlyInNgx.join(', ')}\n` : '') +
                (onlyInReact.length ? `\x1b[35m    React only: ${onlyInReact.join(', ')}\n` : ''),
        );
    } else if (ngxProps.length > 0) {
        successComponents.push(`\x1b[32mui-${ngxName} to ${reactName}\x1b[0m`);
        console.log(
            `\x1b[38;5;208m  All props match between React component "${reactName}" and Angular component "ui-${ngxName}".\x1b[0m`,
        );
    }
});

if (successComponents.length === 0 && errorComponents.length === 0 && missingComponents.length === 0) {
    console.log('\x1b[33mNo matching components or props files found to compare.\x1b[0m');
}

if (successComponents.length > 0) {
    console.log(`\x1b[32m\n\nValidated Props match for components:\x1b[0m`);
    successComponents.forEach((comp) => console.log(` - ${comp}`));
}

if (errorComponents.length > 0) {
    console.error('\n\nThe following components have prop mismatches between Angular and React:');
    errorComponents.forEach((comp) => console.error(`\x1b[37m  - ${comp}`));
}

if (missingComponents.length > 0) {
    console.error('\n\nThe following components are missing in React or missing a props file:');
    missingComponents.forEach((comp) => console.error(` - ${comp}`));
}

if (errorComponents.length > 0 || missingComponents.length > 0) {
    process.exit(1);
}
