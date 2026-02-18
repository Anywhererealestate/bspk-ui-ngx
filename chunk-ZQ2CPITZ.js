import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as g}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as n,Ma as p,bb as a,cb as e,db as t,eb as r,kb as m,ya as i}from"./chunk-3WAFZL3C.js";var v=class d{componentInputs=[{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",required:!1,default:"false"},{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},{name:"as",description:"The element type to render as.",type:["a","button","div","label"],required:!1,default:"div"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"href",description:"The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) of the list item.\n\nIf the href is provided, the ListItem will render as an anchor element (`<a>`).",type:"string",required:!1},{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"label",description:"The label to display in the ListItem.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"fill"}];componentOutputs=[{name:"onClick",description:"Emits when the ListItem is activated by click or keyboard interaction.",type:"EventEmitter"}];description=`A hybrid interactive component that is used frequently to organize content and offers a wide range of control and navigation in most experiences.

With its flexible and simple structure, the list item element is core and can meet the needs of many uses cases.

The ListItem has three main elements: leading element, label, and trailing element.

Leading elements should be one of the following Icon, Img, Avatar.

Trailing elements should be one of the following Icon, Checkbox, Button, Radio, Switch, Tag, Txt.`;exampleComponent=null;constructor(){import("./chunk-QEYLXPMU.js").then(l=>this.exampleComponent=l.UIListItemExample)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='list-item'] {
    display: flex;
    user-select: none;
    color: var(--foreground-neutral-on-surface);
    background-color: var(--surface-neutral-t1-base);
    height: 100%;
    overflow: hidden;
    min-height: var(--list-item-height);
    flex-direction: row;
    gap: var(--spacing-sizing-03);
    padding: var(--spacing-sizing-02);
    justify-items: stretch;

    /* prevent inherited styles from affecting layout when the as prop is leveraged */
    border: unset;
    border-radius: var(--radius-sm);
    margin: unset;
    text-decoration: unset;
    width: 100%;

    &[data-width='hug'] {
        width: auto;
        max-width: 100%;
    }

    [data-pseudo='focus'] &,
    &:focus-visible,
    &:has(*:focus-visible) {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;

        [data-inner] {
            border-color: transparent;
        }
    }

    &:not([data-disabled], [data-readonly]) {
        &[data-action],
        &:is(label) {
            &[data-active],
            [data-pseudo='hover'] &,
            &:hover {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] &,
        /* pressed state */
        &:active {
                background-color: var(--interactions-neutral-press-opacity);
            }
        }
    }

    [data-leading],
    [data-item-label],
    [data-trailing] {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1 1 0;
        min-width: 0;

        svg {
            width: 24px;
            max-width: unset;
        }
    }

    [data-leading],
    [data-trailing] {
        width: fit-content;
        flex: 0 0 auto;

        &:empty {
            display: none;
        }
    }

    [data-item-label] {
        text-align: left;

        [data-text] {
            width: 100%;
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);
        }

        [data-sub-text] {
            width: 100%;
            font: var(--body-small);
            color: var(--foreground-neutral-on-surface-variant-01);
        }
    }

    [data-trailing]:has(input) {
        pointer-events: none;
    }

    img {
        height: 36px;
        width: 36px;
        max-width: unset;
    }

    &:is(label) {
        [data-inner] {
            border-bottom: 0;
            gap: var(--spacing-sizing-02);
        }
    }

    &[aria-selected='true'] {
        background-color: var(--surface-brand-primary-highlight);
    }

    &[data-disabled],
    &[data-readonly] {
        [data-text],
        [data-sub-text] {
            color: var(--foreground-neutral-disabled-on-surface);
            cursor: not-allowed;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),n(2," ListItem "),t(),e(3,"span",2),r(4,"ui-tag",3),t()(),r(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),r(8,"app-type-props",5),e(9,"h3"),n(10,"Outputs"),t(),r(11,"app-type-props",5),e(12,"h3"),n(13,"Examples"),t(),m(14,6),e(15,"h3"),n(16,"Stylesheet"),t(),e(17,"p"),n(18," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(19,"ui-card",7),r(20,"app-syntax",8),t()),o&2&&(i(5),a("source",s.description),i(3),a("props",s.componentInputs),i(3),a("props",s.componentOutputs),i(3),a("ngComponentOutlet",s.exampleComponent),i(6),a("pretty",!0))},dependencies:[f,y,h,g,u,b,c],encapsulation:2})};export{v as ListItemPage};
