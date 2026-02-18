import{a as g}from"./chunk-IYOPT2HA.js";import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as c}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as v}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as u}from"./chunk-N6IMOQO3.js";import{Cb as i,Ma as p,bb as t,cb as n,db as e,eb as r,kb as m,ya as a}from"./chunk-3WAFZL3C.js";var x=class d{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",required:!1,default:"10"},{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",required:!1,default:"3"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the textarea field.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the textarea field.`,type:"(value: string) => void",required:!1}];description=`A component that allows users to input large amounts of text that could span multiple lines.

This component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within maximum and minimum rows. A character counter when a maxLength is set to show the number of characters remaining below the limit.

For a more complete example with field usage, see the TextareaField component.`;exampleComponent=null;constructor(){import("./chunk-563GI26A.js").then(l=>this.exampleComponent=l.UITextareaExample)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:27,vars:12,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["name","example","size","medium",3,"disabled","invalid","maxRows","minRows","readOnly","required"],["source",`<ui-textarea
  [disabled]="false"
   [invalid]="false"
   [maxRows]="10"
   [minRows]="3"
   name="example"
   [readOnly]="false"
   [required]="false"
   size="medium"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='textarea'] {
    /*! 
    --min-rows: is set via inline style 
    --max-rows: is set via inline style
    */

    display: grid;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    overflow: hidden;
    color: var(--foreground-neutral-on-surface);
    background-color: var(--surface-neutral-t1-base);

    --border-color: var(--stroke-neutral-base);

    /* &[data-size='medium'] */
    --font: var(--body-base);
    --line-height: 20px;
    --padding: var(--spacing-sizing-03);

    &[data-size='small'] {
        --font: var(--body-small);
        --line-height: 20px;
        --padding: var(--spacing-sizing-02);
    }

    &[data-size='large'] {
        --font: var(--body-large);
        --line-height: 24px;
        --padding: var(--spacing-sizing-03);
    }

    &:has(textarea:focus-within) {
        --border-color: var(--stroke-neutral-focus);
    }

    &:has(textarea[aria-invalid]) {
        --border-color: var(--status-error);
    }

    [data-replicated-value] {
        white-space: pre-wrap;
        visibility: hidden;
        overflow-y: hidden;
    }

    textarea,
    [data-replicated-value] {
        width: 100%;
        font: var(--font);
        padding: var(--padding);
        border: none;
        background: transparent;
        grid-area: 1 / 1 / 2 / 2;
        min-height: calc((var(--line-height) * var(--min-rows)) + (var(--padding) * 2));
        max-height: calc((var(--line-height) * var(--max-rows)) + (var(--padding) * 2));
        max-width: 100%;
    }

    textarea {
        text-wrap: break-word;

        &::placeholder {
            color: var(--foreground-neutral-on-surface-variant-03);
        }

        resize: none;
        color: inherit;
        background-color: inherit;
        outline: none;
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

    &:focus-within {
        --border-color: var(--stroke-neutral-focus);

        outline: 1px solid var(--stroke-neutral-focus);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(n(0,"div",0)(1,"h2",1),i(2," Textarea "),e(),n(3,"span",2),r(4,"ui-tag",3),e()(),r(5,"app-markup",4),n(6,"h3"),i(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),r(10,"ui-textarea",7),e(),r(11,"app-syntax",8),e(),n(12,"h3"),i(13,"Inputs"),e(),r(14,"app-type-props",9),n(15,"h3"),i(16,"Outputs"),e(),r(17,"app-type-props",9),n(18,"h3"),i(19,"Examples"),e(),m(20,10),n(21,"h3"),i(22,"Stylesheet"),e(),n(23,"p"),i(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(25,"ui-card",5),r(26,"app-syntax",11),e()),o&2&&(a(5),t("source",s.description),a(5),t("disabled",!1)("invalid",!1)("maxRows",10)("minRows",3)("readOnly",!1)("required",!1),a(),t("pretty",!0),a(3),t("props",s.componentInputs),a(3),t("props",s.componentOutputs),a(3),t("ngComponentOutlet",s.exampleComponent),a(6),t("pretty",!0))},dependencies:[f,y,h,v,g,c,b,u],encapsulation:2})};export{x as TextareaPage};
