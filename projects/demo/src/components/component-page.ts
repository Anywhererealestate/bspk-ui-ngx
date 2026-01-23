import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UITag } from '@ui/tag';
import { META } from '../meta';
import { ComponentDemo } from '../types';
import { COMPONENT_PHASE_COLORS } from '../utils';

@Component({
    selector: 'app-component-page',
    standalone: true,
    imports: [RouterOutlet, UITag],
    template: ` @if (!component()) {
            <h2>Component Not Found</h2>
        } @else {
            <h2 style="display: flex; align-items: center; gap: 1rem;">
                {{ component()!.name }}
                <span style="margin-left: auto;"><ui-tag [color]="phaseColor()" [label]="component()!.phase" /></span>
            </h2>

            @for (line of description(); track $index) {
                <p>{{ line }}</p>
            }
            <router-outlet name="example"></router-outlet>
        }`,
})
export class ComponentPage {
    component = signal<ComponentDemo | undefined>(undefined);

    description = computed(() => this.component()?.description.split('\n\n') || []);

    phaseColor = computed(() => {
        const phase = this.component()?.phase;
        return phase ? COMPONENT_PHASE_COLORS[phase] : 'grey';
    });

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe((data: any) => {
            META.components.find((comp) => {
                if (comp.name === data.component) {
                    this.component.set(comp as ComponentDemo);
                }
            });
        });
    }
}
// title = this.route.snapshot.data['title'] || '';
