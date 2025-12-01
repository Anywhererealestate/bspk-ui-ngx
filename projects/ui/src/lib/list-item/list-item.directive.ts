import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[list-item]',
  standalone: true,
})
export class UiListItemDirective {
  @Input('uiListItem') label?: string;
  @Input() href?: string;
  @Input() actionable?: boolean;
  @Input() active?: boolean;
  @Input() isDisabled?: boolean;
  @Input() isReadOnly?: boolean;
  @Input() owner?: string;
  @Input() width?: 'fill' | 'hug';
  @Input() tabIndex?: number;
  @Input() role?: string;

  @Output() uiListItemClick = new EventEmitter<Event>();

  @HostBinding('attr.data-action') get dataAction() {
    return this.actionable ? 'actionable' : null;
  }
  @HostBinding('attr.data-active') get dataActive() {
    return this.active ? 'active' : null;
  }
  @HostBinding('attr.data-bspk') dataBspk = 'list-item';
  @HostBinding('attr.data-bspk-owner') get dataOwner() {
    return this.owner || null;
  }
  @HostBinding('attr.data-disabled') get dataDisabled() {
    return this.isDisabled ? 'true' : null;
  }
  @HostBinding('attr.data-readonly') get dataReadonly() {
    return this.isReadOnly ? 'true' : null;
  }
  @HostBinding('attr.data-width') get dataWidth() {
    return this.width === 'hug' ? 'hug' : null;
  }
  @HostBinding('attr.href') get hostHref() {
    return this.href || null;
  }
  @HostBinding('attr.role') get hostRole() {
    return this.role || null;
  }
  @HostBinding('attr.tabindex') get hostTabIndex() {
    if (this.tabIndex !== undefined && this.tabIndex !== null) return this.tabIndex;
    return this.actionable ? 0 : null;
  }

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    if (this.isReadOnly || this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    this.uiListItemClick.emit(event);
  }
}