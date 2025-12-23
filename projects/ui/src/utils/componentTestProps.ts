import { inputBinding, signal } from '@angular/core';
import { TestComponentOptions } from '@angular/core/testing';

/**
 * This helps create test props for components in a type-safe way.
 *
 * @example
 *     componentTestProps<UITag>({
 *         label: 'Test Tag',
 *         color: 'blue',
 *     });
 */
export function componentTestProps<T>(
    props: Partial<Record<keyof T, unknown>>,
    additionalTestComponentOptions?: Partial<TestComponentOptions>,
): TestComponentOptions {
    return {
        bindings: Object.entries(props).map(([key, value]) => inputBinding(key, signal(value))),
        ...additionalTestComponentOptions,
    };
}
