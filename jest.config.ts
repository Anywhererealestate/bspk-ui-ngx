import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';
const { createEsmPreset } = presets;

export default {
  ...createEsmPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
} satisfies Config;
