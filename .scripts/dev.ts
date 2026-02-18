import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('\x1b[33mStarting dev environment with live metadata and route generation...\x1b[0m');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const uiSrcPath = path.join(__dirname, '../projects/ui/src');

console.log('\x1b[33mWatching for changes to regenerate component metadata...\x1b[0m');

const generateMetaScriptPath = path.join(__dirname, 'meta.ts');

let lastEvent = {
    filename: '',
    eventType: '',
};
let writeTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);

const getComponentSlugs = () =>
    fs.readdirSync(uiSrcPath).filter((file) => fs.statSync(path.join(uiSrcPath, file)).isDirectory());

let previousComponents: string[] = getComponentSlugs();

[uiSrcPath, generateMetaScriptPath].forEach((proj) => {
    fs.watch(proj, { recursive: true }, (eventType, filename) => {
        if (!filename) return;

        const nextComponents: string[] = getComponentSlugs();

        const hasComponentChanges = previousComponents.join(',') !== nextComponents.join(',');

        if (
            !hasComponentChanges &&
            (filename === 'meta.ts' ||
                filename === 'generated.ts' ||
                filename.includes('/generated/') ||
                (lastEvent.filename === filename && lastEvent.eventType === eventType))
            // no component changes
        )
            return;

        clearTimeout(writeTimeout);

        writeTimeout = setTimeout(() => {
            execSync(`npm run meta f`, { stdio: 'inherit' });

            lastEvent = { filename, eventType };

            if (hasComponentChanges) {
                const newComponents = nextComponents.filter((ex) => !previousComponents.includes(ex));
                const removedComponents = previousComponents.filter((ex) => !nextComponents.includes(ex));

                console.log('\x1b[1m\x1b[44m\x1b[36m');
                console.log('╔═══════════════════════════════════════════════════════════');
                console.log(`║  🔔 DETECTED FILE COMPONENT CHANGES: ${filename}`);
                console.log(`║  NEW: ${newComponents.join(', ')}`);
                console.log(`║  REMOVED: ${removedComponents.join(', ')}`);
                console.log('╚═══════════════════════════════════════════════════════════');
                console.log('\x1b[0m');
            }

            previousComponents = nextComponents;
        }, 10);
    });
});
