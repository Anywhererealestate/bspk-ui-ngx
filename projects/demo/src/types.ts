import { Route } from '@angular/router';
import { ComponentPhase } from '@shared/types';

export type NavRoute = Route & {
    hide?: boolean;
    title: string;
    //children?: NavRoute[];
    //section?: boolean;
};

export interface ComponentDemo {
    name: string;
    description: string;
    phase: ComponentPhase;
    descriptionExample?: string;
    example: string;
    slug: string;
}
