import { Component, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-list-item',
  imports: [CommonModule],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})

export class ListItem {
/**
  /**
   * The leading element to display in the ListItem.
   *
   * Leading elements should only be one of the following [Icon](/icons), Img, Avatar.
   *
   * @exampleType select
   * @options Icon, Img, Avatar
   */
  @Input() leading?: TemplateRef<any> | string;
  /** Props to pass to the leading element wrapper span. */
  /**
   * The label to display in the ListItem.
   *
   * @required
   */
  @Input() label: string = '';
  /** The subtext to display in the ListItem. */
  @Input() subText?: string;
  /**
   * The trailing element to display in the ListItem.
   *
   * Trailing elements should only be one of the following [Icon](/icons), Checkbox, ListItemButton, Radio,
   * Switch, Tag, Txt.
   *
   * @exampleType select
   * @options Checkbox, Icon, ListItemButton, Radio, Switch, Tag, Txt
   */
  @Input() trailing?: TemplateRef<any> | string;
  /**
   * The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) of the list item.
   *
   * If the href is provided, the ListItem will render as an anchor element (`<a>`).
   */
  @Input() href?: string;
  /**
   * The ARIA role of the list item.
   *
   * The role will be set to 'button' automatically if the ListItem has an onClick prop and is not a button,
   * label, or anchor element.
   *
   * If including other focusable elements (e.g. buttons, links) in the leading or trailing slots, the role should
   * be set explicitly to something other than 'button'.
   */
  @Input() role?: string;
  /** Callback function that is called when the ListItem is clicked. */
  @Output() onClick?: (event: Event) => void;
  /**
   * The unique ID of the list item.
   *
   * If not provided, a unique ID will be generated. This is useful for accessibility and testing purposes.
   */
  @Input() id?: string;
  /**
   * Indicates the current "selected" state of the list item when used in a selectable context, such as within a
   * ListItemMenu.
   */
  @Input() 'aria-selected'?: boolean;
    /**
   * Indicates if the ListItem is disabled.
   */
  @Input() 'aria-disabled'?: boolean;
      /**
   * Indicates if the ListItem is readonly.
   */
  @Input() 'aria-readonly'?: boolean;
  /**
   * Determines how the ListItem uses horizontal space.
   *
   * If set to 'fill', options expand to fill the container's width.
   *
   * If set to 'hug', options only take up as much space as the content requires.
   *
   * @default fill
   */
  @Input() width?: 'fill' | 'hug';

  isDisabled?: boolean;
  isReadOnly?: boolean;

  constructor() {
    this.isDisabled = this['aria-disabled'] === true || undefined;
    this.isReadOnly = this['aria-readonly'] === true || undefined;
  }

  isTemplateRef(value: any): value is TemplateRef<any> {
      return value instanceof TemplateRef;
  }

  handleClick(): void {
    if (this.onClick && !this.isReadOnly && !this.isDisabled) {
      this.onClick(new Event('click'));
    }
  }
}
