import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UITag } from '@ui/tag';
import { TableColumn, UITable } from '../../../ui/src';
import { META } from '../meta';
import { ComponentDemo } from '../types';
import { COMPONENT_PHASE_COLORS } from '../utils';

@Component({
    selector: 'app-component-page',
    standalone: true,
    imports: [RouterOutlet, UITag, UITable],
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

            <div style="display: flex; justify-content: space-between; margin-top: var(--spacing-sizing-06);">
                <h2 title="Props">AccordionProps</h2>
            </div>
            <ui-table
                data-props="true"
                size="medium"
                [columns]="{propColumns}" />
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

    propColumns: TableColumn[] = [
                {
                    key: 'name',
                    label: 'Name',
                    width: 'auto',
                    valign: 'top',
formatter
                },
                {
                    key: 'description-type',
                    label: 'Description / Type',
                    width: '1fr',
                    valign: 'top',
                    formatter: (row) => (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-02)' }}>
                            {row['description-type']}
                        </div>
                    ),
                },
                {
                    key: 'default',
                    label: 'Default',
                    width: 'auto',
                    valign: 'top',
                },
                !!onChange && {
                    key: 'controls',
                    label: 'Controls',
                    width: '200px',
                    valign: 'top',
                },
            ];
}
// title = this.route.snapshot.data['title'] || '';
