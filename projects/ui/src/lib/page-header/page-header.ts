import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export interface PageHeaderProps {
    title: string;
    /** Actions slot (use [actions] projection). */
    actions?: unknown;
    /** Breadcrumb slot (use [breadcrumb] projection). */
    breadcrumb?: unknown;
    /** Avatar slot (use [avatar] projection). */
    avatar?: unknown;
    /** Subheader slot (use [subHeader] projection). */
    subHeader?: unknown;
}

/**
 * A page header with optional breadcrumb, title, avatar, actions, and subheader via content projection.
 *
 * ```html
 * <ui-page-header [title]="'Page Title'">
 *     <span breadcrumb>Home / Section</span>
 *     <ui-avatar avatar [image]="userImg()" name="User"></ui-avatar>
 *     <div actions><ui-button label="Action"></ui-button></div>
 *     <p subHeader>Subtitle or description</p>
 * </ui-page-header>
 * ```
 *
 * @name PageHeader
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-page-header',
    imports: [CommonModule],
    template: `
        <span data-bspk="page-header">
            @if (hasBreadcrumb) {
                <div data-breadcrumb>
                    <ng-content select="[breadcrumb]"></ng-content>
                </div>
            }

            <div data-header [attr.data-has-avatar]="hasAvatar ? '' : null">
                <div data-title>
                    <ng-content select="[avatar]"></ng-content>
                    <h1>{{ title() }}</h1>
                </div>

                @if (hasActions) {
                    <div data-page-actions>
                        <ng-content select="[actions]"></ng-content>
                    </div>
                }
            </div>

            @if (hasSubHeader) {
                <div data-subheader>
                    <ng-content select="[subHeader]"></ng-content>
                </div>
            }
        </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIPageHeader implements AsSignal<PageHeaderProps> {
    readonly title = input.required<string>();
    readonly actions = input<unknown>();
    readonly breadcrumb = input<unknown>();
    readonly avatar = input<unknown>();
    readonly subHeader = input<unknown>();

    readonly hasBreadcrumb = true;
    readonly hasAvatar = true;
    readonly hasActions = true;
    readonly hasSubHeader = true;
}
