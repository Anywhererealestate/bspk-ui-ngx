import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIRating } from '../rating';

@Component({
    selector: 'ui-rating-example',
    standalone: true,
    imports: [UIRating],
    template: `
        <h4>Default</h4>
        <ui-rating (valueChange)="onValueChange($event)"> Example Content </ui-rating>

        <h4>size: large</h4>
        <ui-rating size="large" (valueChange)="onValueChange($event)"> Example Content </ui-rating>

        <h4>size: medium</h4>
        <ui-rating size="medium" (valueChange)="onValueChange($event)"> Example Content </ui-rating>

        <h4>size: small</h4>
        <ui-rating size="small" (valueChange)="onValueChange($event)"> Example Content </ui-rating>

        <h4>value: 4.5</h4>
        <ui-rating [value]="4.5" (valueChange)="onValueChange($event)"> Example Content </ui-rating>
    `,
})
export class UIRatingExample {
    onValueChange(event: any) {
        sendSnackbar(`valueChange event: ${JSON.stringify(event)}`);
    }
}
