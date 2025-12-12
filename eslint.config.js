// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

const configExtends = [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    angular.configs.tsRecommended,
];

export default defineConfig([
    { ignores: ['**/node_modules/**', '**/dist/**', '**/out/**', '**/.angular/**', '**/icons/**'] },
    {
        files: ['projects/ui/**/*.ts'],
        extends: configExtends,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: '',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'ui',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['projects/**/*.ts'],
        extends: configExtends,
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/no-output-on-prefix': 'off',
            '@angular-eslint/prefer-inject': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@angular-eslint/no-output-native': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
    {
        files: ['**/*.html'],
        extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
        rules: {},
    },
]);
