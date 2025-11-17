import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { Tooltip } from '../tooltip';

@Component({
  selector: 'ui-truncated',
  imports: [TooltipDirective],
  templateUrl: './truncated.html',
  encapsulation: ViewEncapsulation.None,
})
export class Truncated {}
