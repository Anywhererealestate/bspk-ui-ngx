import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as m}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as p,bb as a,cb as e,db as n,eb as r,kb as u,ya as i}from"./chunk-3WAFZL3C.js";var y=class d{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],required:!1,default:"off"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},{name:"type",description:"The type of the input.",type:["number","password","tel","text"],required:!1,default:"text"},{name:"value",description:"The value of the input field.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the input field.`,type:"(value: string) => void",required:!1}];description="An input that allows users to enter text, numbers or symbols in a singular line. This is a utility element and is not intended to be used directly but rather through the Input, and other components.";exampleComponent=null;constructor(){import("./chunk-EO53WAPL.js").then(l=>this.exampleComponent=l.UIInputExample)}static \u0275fac=function(s){return new(s||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='input'] {
    --border-color: var(--stroke-neutral-base);

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: var(--surface-neutral-t1-base);
    border: solid 1px var(--border-color);
    height: var(--field-height);
    border-radius: var(--radius-sm);
    padding: 0 var(--field-padding);
    gap: var(--spacing-sizing-01);
    width: 100%;

    &[data-show-clear-button]:focus-within {
        padding-right: 0;
    }

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--field-height);
        font: var(--field-font);
        color: var(--foreground-neutral-on-surface);
        min-width: 0;
    }

    &:hover:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-hover-opacity), var(--interactions-hover-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &:active:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-press-opacity), var(--interactions-press-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-readonly] {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-disabled],
    &:has([data-main-input][disabled]) {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        & > * {
            color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    &[data-invalid] {
        --border-color: var(--status-error);
    }

    &:not(:focus-within) {
        [data-clear-button] {
            display: none;
        }
    }

    &:focus-within {
        --border-color: var(--stroke-neutral-focus);

        outline: 1px solid var(--stroke-neutral-focus);
    }

    &[data-size='small'] {
        --field-padding: var(--spacing-sizing-02);
        --field-height: var(--spacing-sizing-08);
        --field-font: var(--body-small);
        --field-icon-width: var(--spacing-sizing-04);
        --field-clear-width: var(--spacing-sizing-05);
    }

    &[data-size='medium'] {
        --field-padding: var(--spacing-sizing-03);
        --field-height: var(--spacing-sizing-10);
        --field-font: var(--body-base);
        --field-icon-width: var(--spacing-sizing-05);
        --field-clear-width: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --field-padding: var(--spacing-sizing-03);
        --field-height: var(--spacing-sizing-12);
        --field-font: var(--body-large);
        --field-icon-width: var(--spacing-sizing-06);
        --field-clear-width: var(--spacing-sizing-06);
    }

    [data-leading],
    [data-trailing] {
        position: relative;

        svg {
            width: var(--field-icon-width);
        }
    }

    label {
        font: var(--labels-small);
        color: var(--foreground-neutral-on-surface-variant-01);
    }

    [data-main-input] {
        flex: 1;
        background-color: transparent !important;
        border: none;
        outline: none;
        padding: 0;
        pointer-events: all;
        text-overflow: ellipsis;

        &[type='number']::-webkit-inner-spin-button,
        &[type='number']::-webkit-outer-spin-button {
            display: none;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"h2",1),t(2," Input "),n(),e(3,"span",2),r(4,"ui-tag",3),n()(),r(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),r(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),r(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),u(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),r(20,"app-syntax",8),n()),s&2&&(i(5),a("source",o.description),i(3),a("props",o.componentInputs),i(3),a("props",o.componentOutputs),i(3),a("ngComponentOutlet",o.exampleComponent),i(6),a("pretty",!0))},dependencies:[g,v,f,h,m,b,c],encapsulation:2})};export{y as InputPage};
