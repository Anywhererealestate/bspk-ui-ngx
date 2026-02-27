/**
 * This script generates example TypeScript files for each Angular component based on the metadata provided in
 * .tmp/meta.json. It creates a simple example template that includes all inputs and outputs of the component, allowing
 * developers to quickly see how to use the component with various props. The generated example files are saved in the
 * respective component directories under projects/ui/src/lib/{component}/example.ts.
 *
 * Note: This script assumes that the component metadata includes a 'selector' field. If not, it will generate a
 * selector based on the component name. The script also generates sample values for different prop types to provide a
 * more realistic example.\
 * Usage: Run this script after generating the meta.json file to create example files for all components. You can
 * customize the generated template and sample values as needed.
 *
 * $ npx tsx .scripts/tasks/generate-examples.ts [ComponentName] example: $ npx tsx .scripts/tasks/generate-examples.ts
 * Avatar
 *
 * This will generate an example.ts file for the Avatar component
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const ngxMetaPath = '.tmp/meta.json';
const componentBaseDir = 'projects/ui/src/lib';

// Set this to the exact component name you want to generate an example for:
const targetComponentName = process.argv[2] || '';

if (!fs.existsSync(ngxMetaPath)) {
    throw new Error(`Component meta file not found at ${ngxMetaPath}. Please run your meta script first.`);
}

const ngxMeta = JSON.parse(fs.readFileSync(ngxMetaPath, 'utf-8'));

function toKebabCase(str: string) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
}

function getSampleValue(type: string, name: string) {
    if (type.includes('boolean')) return 'true';
    if (type.includes('number')) return '42';
    if (type.includes('string[]')) return "['one', 'two']";
    if (type.includes('string')) return `example-${name}`;
    if (type.includes('object') || type.includes('Record')) return '{}';
    if (type.includes('any[]')) return '[]';
    if (type.includes('Function') || type.includes('=>')) return "() => alert('clicked')";
    if (type.includes('EventEmitter')) return "() => alert('event!')";
    return "''";
}

// Find the component by exact name
const component = (ngxMeta.components || []).find((c: any) => c.name === targetComponentName);

if (!component) {
    console.error(`Component "${targetComponentName}" not found in meta file.`);
    process.exit(1);
}

const className = component.className;
const selector = (component.selector || `ui-${component.slug || component.name}`)
    .replace(/([A-Z])/g, (m) => '-' + m.toLowerCase())
    .replace(/^-/, '');
const dir = path.join(componentBaseDir, component.slug || component.name);
const exampleFile = path.join(dir, 'example.ts');

// Skip if directory doesn't exist
// if (!fs.existsSync(dir)) return;

// Skip if directory doesn't exist or example.ts already exists
if (!fs.existsSync(dir) || fs.existsSync(exampleFile)) {
    console.log(`Skipping: ${dir} (already exists or directory missing)`);
    process.exit(0);
}

const inputs = component.inputs || [];
const outputs = component.outputs || [];

// Build prop bindings
// const inputBindings = inputs.map((input: any) => {
//     const prop = input.name;
//     const value = getSampleValue(input.type, input.name);
//     if (input.type.includes('boolean') || input.type.includes('number')) {
//         return `[${prop}]=${value}`;
//     }
//     if (input.type.includes('string[]') || input.type.includes('any[]')) {
//         return `[${prop}]=${value}`;
//     }
//     return `${prop}=${value}`;
// });

// Build default input bindings with string values for simplicity
const defaultInputBindings = inputs.map((input: any) => {
    const prop = input.name;
    const value = getSampleValue(input.type, prop);
    if (input.required === true && input.type.includes('string')) {
        return `${prop}=${value}`;
    }
    if (input.required === true) {
        return `[${prop}]=${value}`;
    }
    return ``;
});

const outputBindings = outputs.map((output: any) => {
    const prop = output.name;
    if (prop === 'onClick') {
        // Use handleClick for onClick
        return `(${prop})="handleClick('${component.className}')"`;
    }
    return `(${prop})="on${prop.charAt(0).toUpperCase() + prop.slice(1)}($event)"`;
});

// Build the example template
const defaultTemplate = `
<${selector}
    ${[...defaultInputBindings, ...outputBindings].join('\n    ')}
>
    Example Content
</${selector}>
`.trim();

const inputExamples = inputs
    .map((input: any) => {
        const prop = input.name;
        // If type is an array of values, generate an example for each value
        if (Array.isArray(input.type)) {
            return input.type
                .map((val: any) => {
                    // Build all default input bindings, but override this input with its value
                    const bindings = inputs
                        .map((i: any) => {
                            if (i.name === prop) {
                                // Use the current value from the array
                                if (typeof val === 'string') {
                                    return `${i.name}="${val}"`;
                                }
                                if (typeof val === 'boolean' || typeof val === 'number') {
                                    return `[${i.name}]=${val}`;
                                }
                                return `[${i.name}]=${JSON.stringify(val)}`;
                            }
                            // For other props, use required default or skip
                            if (i.required === true && typeof i.type === 'string' && i.type.includes('string')) {
                                return `${i.name}=${getSampleValue(i.type, i.name)}`;
                            }
                            if (i.required === true) {
                                return `[${i.name}]=${getSampleValue(i.type, i.name)}`;
                            }
                            return '';
                        })
                        .filter(Boolean);

                    return `
<h4>${prop}: ${val}</h4>
<${selector}
    ${[...bindings, ...outputBindings].join('\n    ')}
>
    Example Content
</${selector}>
`.trim();
                })
                .join('\n\n');
        }

        // Otherwise, generate a single example as before
        const value = getSampleValue(input.type, prop);
        const bindings = inputs
            .map((i: any) => {
                if (i.name === prop) {
                    if (
                        typeof i.type === 'string' &&
                        (i.type.includes('boolean') ||
                            i.type.includes('number') ||
                            i.type.includes('string[]') ||
                            i.type.includes('any[]'))
                    ) {
                        return `[${i.name}]=${getSampleValue(i.type, i.name)}`;
                    }
                    return `${i.name}=${getSampleValue(i.type, i.name)}`;
                }
                // For other props, use required default or skip
                if (i.required === true && typeof i.type === 'string' && i.type.includes('string')) {
                    return `${i.name}=${getSampleValue(i.type, i.name)}`;
                }
                if (i.required === true) {
                    return `[${i.name}]=${getSampleValue(i.type, i.name)}`;
                }
                return '';
            })
            .filter(Boolean);

        return `
<h4>${prop}</h4>
<${selector}
    ${[...bindings, ...outputBindings].join('\n    ')}
>
    Example Content
</${selector}>
`.trim();
    })
    .join('\n\n');

// Check if any output is named 'onChange'
const hasOnChange = outputs.some((item: any) => item.name === 'onClick');

let importBlock = `import { Component } from '@angular/core';\nimport { ${component.className} } from '../${component.slug || component.name}';`;
if (hasOnChange) {
    importBlock += `\nimport { sendSnackbar } from '../../utils/send-snackbar';`;
}

const exampleTs = `${importBlock}

@Component({
    selector: '${selector}-example',
    standalone: true,
    imports: [${component.className}],
    template: \`
    <h4>Default</h4>
${defaultTemplate}

${inputExamples}

    \`
})
export class ${className}Example {
    ${
        hasOnChange
            ? `
    protected handleClick(name: string): void {
        sendSnackbar(\`\${name} clicked!\`);
    }
    `
            : ''
    }
    ${outputs
        .filter((output: any) => output.name !== 'onClick')
        .map(
            (output: any) =>
                `on${output.name.charAt(0).toUpperCase() + output.name.slice(1)}(event: any) { console.log('${output.name} event:', event); }`,
        )
        .join('\n    ')}
}
`;

fs.writeFileSync(exampleFile, exampleTs, 'utf-8');
console.log(`Generated: ${exampleFile}`);

// try {
//     execSync(`npx eslint --fix "${exampleFile}"`, { stdio: 'inherit' });
//     console.log(`Linted: ${exampleFile}`);
// } catch (e) {
//     console.warn(`Lint failed for ${exampleFile}`);
// }
try {
    execSync(`npx prettier --write "${exampleFile}"`, { stdio: 'inherit' });
    console.log(`Formatted: ${exampleFile}`);
} catch (e) {
    console.warn(`Prettier failed for ${exampleFile}`);
}
