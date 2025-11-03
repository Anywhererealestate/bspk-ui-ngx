import { Component, Input, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPerson } from '../icons/person';
import { TooltipDirective } from '../tooltip';

export type SizeVariant =
    | 'large'
    | 'medium'
    | 'small'
    | 'x-large'
    | 'x-small'
    | 'xx-large'
    | 'xxx-large'
    | 'xxxx-large'
    | 'xxxxx-large';

@Component({
    selector: 'ui-avatar',
    standalone: true,
    imports: [CommonModule, IconPerson, TooltipDirective],
    templateUrl: './avatar.html',
    styleUrls: ['./avatar.scss', '../styles/base.scss', '../styles/colors.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Avatar {
    @Input() name!: string;
    @Input() size: SizeVariant = 'small';
    @Input() color: string = 'grey';
    @Input() initials?: string;
    @Input() showIcon: boolean = true;
    @Input() image?: string;
    @Input() hideTooltip: boolean = false;
    @Input() disabled: boolean = false;
    @Output() avatarClick = new EventEmitter<void>();

    get computedInitials(): string | undefined {
        if (this.initials) return this.initials.slice(0, 2).toUpperCase();
        if (this.name) {
            const parts = this.name.split(' ').filter(Boolean);
            return parts
                .map((w) => w[0])
                .slice(0, 2)
                .join('')
                .toUpperCase();
        }
        return undefined;
    }

    onClick(event: Event) {
        if (!this.disabled) {
            this.avatarClick.emit();
        }
    }
}
