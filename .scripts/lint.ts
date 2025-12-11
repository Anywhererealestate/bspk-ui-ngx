/**
 * Ensures all component classes and selectors follow naming conventions.
 *
 * Ensures that the public API file is up to date.
 *
 * $ npx tsx .scripts/lint.ts
 */
import * as fs from 'fs';
import * as path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const libDir = path.join(__dirname, '../projects/ui/src/lib');

const files = fs.readdirSync(libDir, { withFileTypes: true });

const classNameComponentPattern = /^UI[A-Z][a-zA-Z0-9]+$/;
const classNameDirectivePattern = /^UI[A-Z][a-zA-Z0-9]+Directive$/;
const componentSelectorPattern = /^ui-[a-z0-9-]+$/;
const directiveSelectorPattern = /^\[(?!ui)[a-z0-9-]+\]$/;

const errors: string[] = [];

files.forEach((dirent) => {
    if (dirent.isDirectory()) {
        if (dirent.name === 'icons') return;

        const componentDir = path.join(libDir, dirent.name);
        const componentFilePath = path.join(componentDir, dirent.name + '.ts');
        const directiveFilePath = path.join(componentDir, dirent.name + '.directive.ts');

        const filesToCheck: {
            filePath: string;
            type: 'component' | 'directive';
        }[] = [];

        if (fs.existsSync(componentFilePath)) filesToCheck.push({ filePath: componentFilePath, type: 'component' });

        if (fs.existsSync(directiveFilePath)) filesToCheck.push({ filePath: directiveFilePath, type: 'directive' });

        filesToCheck.forEach(({ filePath, type }) => {
            let content = fs.readFileSync(filePath, 'utf-8');

            const classMatch = content.match(/export class (\w+)[<|\s]/);
            const selectorMatch = content.match(/selector:\s*'([^']+)'/);

            if (classMatch) {
                const className = classMatch[1];

                if (type === 'component' && !classNameComponentPattern.test(className)) {
                    errors.push(
                        `Class name "${className}" in file "${filePath}" does not follow the convention "UI[ComponentName]".`,
                    );
                }

                if (type === 'directive' && !classNameDirectivePattern.test(className)) {
                    errors.push(
                        `Class name "${className}" in file "${filePath}" does not follow the convention "UI[DirectiveName]Directive".`,
                    );
                }
            } else {
                errors.push(`No class found in file "${filePath}".`);
            }

            if (selectorMatch) {
                const selector = selectorMatch[1];

                if (type === 'directive' && !directiveSelectorPattern.test(selector)) {
                    errors.push(
                        `Selector "${selector}" in file "${filePath}" does not follow the convention [directive-name]. Should be "${dirent.name}".`,
                    );
                }

                if (type === 'component' && !componentSelectorPattern.test(selector)) {
                    errors.push(
                        `Selector "${selector}" in file "${filePath}" does not follow the convention "ui-[component-name]".`,
                    );
                }
            } else {
                errors.push(`No selector found in file "${filePath}".`);
            }
        });
    }
});

console.log('\x1b[32mAll components and directives follow naming conventions 🎉✅\x1b[0m\n');

// ensure public api is up to date

// compare existing public api content to generated content
import { getPublicApiFileContent } from './update-public-api.js';

const { publicApiPath, publicApiContent } = getPublicApiFileContent();

const existingPublicApiContent = fs.readFileSync(publicApiPath, 'utf-8');

if (existingPublicApiContent !== publicApiContent) {
    errors.push('Public API is out of date. Please run:');
    errors.push('\n   npx tsx .scripts/update-public-api.ts --write\n');
} else {
    console.log('\x1b[32mPublic API is up to date 🎉✅\x1b[0m\n');
}

if (errors.length > 0) {
    console.error('❌ Lint Error:\n', errors.join('\n'));
    process.exit(1);
}
