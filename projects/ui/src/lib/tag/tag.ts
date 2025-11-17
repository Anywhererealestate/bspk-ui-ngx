import { Component, Input, ViewEncapsulation } from '@angular/core';

export type ColorVariant =
    | 'primary'
    | 'secondary'
    | 'grey'
    | 'white'
    | 'blue'
    | 'green'
    | 'lime'
    | 'magenta'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'teal'
    | 'yellow';

@Component({
    selector: 'ui-tag',
    standalone: true,
    imports: [],
    templateUrl: './tag.html',
    styleUrls: ['./tag.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Tag {
    /** The label of the tag. */
    @Input() label!: string;

    /** The size of the tag. */
    @Input() size: 'small' | 'x-small' = 'small';

    /** The color of the tag. */
    @Input() color: ColorVariant = 'white';

    /** The display variant of the tag. */
    @Input() variant: 'corner-wrap' | 'flat' | 'pill' = 'flat';
}
