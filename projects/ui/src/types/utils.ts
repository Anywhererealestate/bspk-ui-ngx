import { InputSignal, Signal } from '@angular/core';

export type AsInputSignal<T> = { [K in keyof T]: InputSignal<T[K] | undefined> };

export type AsSignals<T> = { [K in keyof T]: Signal<T[K] | undefined> };
