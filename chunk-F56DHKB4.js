import{a as S}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as v}from"./chunk-PEIK53MF.js";import{a as T}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as b}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as y}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f}from"./chunk-N6IMOQO3.js";import{$a as m,Cb as a,Db as h,Ma as p,Za as c,ab as u,bb as r,cb as e,db as t,eb as s,kb as g,ya as n}from"./chunk-3WAFZL3C.js";function q(l,o){if(l&1&&(e(0,"h4"),a(1),t(),s(2,"app-type-props",5)),l&2){let i=o.$implicit;n(),h(i.name),n(),r("props",i.props)}}var w=class l{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"Placeholder for the select",type:"string",required:!1,default:"Select one"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the select control.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the select control.`,type:"(value: string) => void",required:!1}];associatedTypes=[{name:"SelectOption",file:"projects/ui/src/lib/select/select.ts",props:[{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"label",type:"string",required:!0},{name:"value",type:"string",required:!0}]}];description=`A field element that allows users to select one option from a list of available choices.

For a more complete example with field usage, see the SelectField component.`;exampleComponent=null;constructor(){import("./chunk-4YOCJRLD.js").then(o=>this.exampleComponent=o.UISelectExample)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=p({type:l,selectors:[["app-component-page"]],decls:25,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","green","label","Stable"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='select'] {
    /* default -- size medium not disabled or readonly */

    --select-background: var(--surface-neutral-t1-base);
    --select-border-color: var(--stroke-neutral-base);
    --select-text-color: var(--foreground-neutral-on-surface);
    --select-height: var(--spacing-sizing-10);
    --select-font: var(--body-base);
    --select-clear-height: var(--spacing-sizing-05);
    --select-padding: var(--spacing-sizing-03);
    --select-icon-width: var(--spacing-sizing-05);

    overflow: hidden;
    position: relative;
    width: 100%;
    outline: unset;
    min-height: var(--select-height);
    max-height: var(--select-height);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sizing-02);
    flex-grow: 0;
    flex-shrink: 0;
    text-align: left;
    font: var(--select-font);
    border: 1px solid var(--select-border-color);
    border-radius: var(--radius-sm);
    background: var(--select-background);
    padding: 0 var(--select-padding);
    cursor: pointer;

    [data-input] {
        position: absolute;
        opacity: 0;
        inset: 0;
        cursor: pointer;
    }

    [data-bspk='list-item'] {
        background: transparent;
    }

    [data-bspk='list-item'] [data-item-label] [data-text] {
        font: var(--select-font);
        color: var(--select-text-color);
    }

    &[data-size='small'] {
        --select-height: var(--spacing-sizing-08);
        --select-font: var(--body-small);
        --select-clear-height: var(--spacing-sizing-05);
        --select-padding: var(--spacing-sizing-02);
        --select-icon-width: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --select-height: var(--spacing-sizing-12);
        --select-font: var(--body-large);
        --select-clear-height: var(--spacing-sizing-06);
        --select-icon-width: var(--spacing-sizing-06);
    }

    &[aria-disabled],
    &[aria-readonly]:not([data-empty]) {
        --select-text-color: var(--foreground-neutral-disabled-on-surface);
        --select-border-color: var(--stroke-neutral-disabled-light);
        --select-background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        cursor: not-allowed;

        &[aria-readonly]:not([data-empty]) {
            --select-text-color: var(--foreground-neutral-on-surface);
        }
    }

    &:not([aria-disabled], [aria-readonly]) {
        &:focus-within {
            --select-border-color: var(--stroke-neutral-focus);

            border-width: 1px;
            outline: 1px solid var(--stroke-neutral-focus);
        }

        &:hover {
            --select-background:
                linear-gradient(var(--interactions-neutral-hover-opacity), var(--interactions-neutral-hover-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }

        &:active {
            --select-background:
                linear-gradient(var(--interactions-neutral-press-opacity), var(--interactions-neutral-press-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }
    }

    &[data-invalid] {
        --select-border-color: var(--status-error);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"h2",1),a(2," Select "),t(),e(3,"span",2),s(4,"ui-tag",3),t()(),s(5,"app-markup",4),e(6,"h3"),a(7,"Inputs"),t(),s(8,"app-type-props",5),e(9,"h3"),a(10,"Outputs"),t(),s(11,"app-type-props",5),e(12,"h3"),a(13,"Associated Types"),t(),m(14,q,3,2,null,null,c),e(16,"h3"),a(17,"Examples"),t(),g(18,6),e(19,"h3"),a(20,"Stylesheet"),t(),e(21,"p"),a(22," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(23,"ui-card",7),s(24,"app-syntax",8),t()),i&2&&(n(5),r("source",d.description),n(3),r("props",d.componentInputs),n(3),r("props",d.componentOutputs),n(3),u(d.associatedTypes),n(4),r("ngComponentOutlet",d.exampleComponent),n(6),r("pretty",!0))},dependencies:[y,T,b,x,v,S,f],encapsulation:2})};export{w as SelectPage};
