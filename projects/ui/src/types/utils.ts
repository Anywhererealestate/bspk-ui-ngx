import { InputSignal, Signal } from '@angular/core';

export type AsInputSignal<T> = { [K in keyof T]: InputSignal<T[K] | undefined> };

export type AsSignal<T> = { [K in keyof T]: Signal<T[K] | undefined> };

export type AlertVariant = 'error' | 'informational' | 'success' | 'warning';
