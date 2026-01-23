/**
 * Generates metadata for component demos by parsing documentation JSON.
 *
 * $ npx tsx .scripts/generate-meta.ts --write
 */

import { execSync } from 'child_process';
import { pretty, toPascalCase } from './utils';
import fs from 'fs';
import path from 'path';
import { ComponentDemo } from '../projects/demo/src/types';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const documentationPath = path.join(__dirname, '../meta/documentation.json');

export const generatedMetaPath = 'projects/demo/src/meta.ts';

export function generateMeta(): { version: string; components: ComponentDemo[] } {
    const metadata = JSON.parse(fs.readFileSync(documentationPath, 'utf-8'));

    // fund compoennts that end with 'ComponentNameExample' and their base component 'ComponentName'

    const exampleComponents = metadata.components.filter(
        (comp: any) => comp.name.endsWith('Example') && comp.name.startsWith('UI'),
    );

    const baseComponents = metadata.components.filter((comp: any) =>
        exampleComponents.some((exComp: any) => exComp.name === `${comp.name}Example`),
    );

    const components = baseComponents.map((comp: any) => {
        const exampleComp = exampleComponents.find((exComp: any) => exComp.name === `${comp.name}Example`);

        const slug = comp.name
            .replace(/^UI/, '')
            .replace(/([a-z])([A-Z])/g, (_: any, a: any, b: string) => `${a}-${b}`)
            .toLowerCase();

        const name = toPascalCase(comp.name.replace(/^UI/, ''));

        const example = comp.rawdescription.match(/```html([\s\S]*?)```;/)?.[1]?.trim() || '';

        // remove code from rawdescription
        const description = comp.rawdescription.split('```html')[0].trim();

        const phase = comp.sourceCode.match(/@phase\s+(\w+)/)?.[1] || 'Dev';

        return {
            name,
            slug,
            descriptionExample: comp.description,
            description,
            phase,
            example,
        };
    });

    // get version from package.json

    const version: string = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')).version || '';

    return { components, version };
}

// ewserw

// if --write is provided, generate the routes once
if (process.argv.includes('--write')) {
    const meta = generateMeta();

    fs.writeFileSync(generatedMetaPath, 'export const META = ' + JSON.stringify(meta, null, 4));
}
