import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';
import { pathsToModuleNameMapper } from 'ts-jest';

const { createEsmPreset } = presets;

export default {
    ...createEsmPreset(),
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        tslib: 'tslib/tslib.es6.js',
        '^rxjs': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
        ...pathsToModuleNameMapper(
            {
                '@ui/*': ['projects/ui/src/lib/*', 'projects/ui/src/*'],
                '@demo/*': ['projects/demo/src/lib/*', 'projects/demo/src/*'],
                '@shared/*': ['projects/shared/src/*'],
            },
            { prefix: '<rootDir>/' },
        ),
    },
} satisfies Config;
