import{a as g}from"./chunk-266MJZYW.js";import"./chunk-DV726YVF.js";import"./chunk-6IOSCMCY.js";import{a as v}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as c}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as b}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as i,Ma as p,bb as a,cb as n,db as e,eb as r,kb as u,ya as t}from"./chunk-3WAFZL3C.js";var x=class d{componentInputs=[{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],required:!1,default:"center"},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",required:!1,default:"0"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",required:!1,default:"1"},{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"(value: string) => void",required:!1}];description=`A input element that allows users to either input a numerical value or singularly increase or decrease the values by pressing the (+) or (-) buttons.

The value of the input is a number. The value is clamped to the min and max values if they are provided.

For a more complete example with field usage, see the InputNumberField component.`;exampleComponent=null;constructor(){import("./chunk-SIZ4KG62.js").then(s=>this.exampleComponent=s.UIInputNumberExample)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:27,vars:12,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["align","center","name","example","size","medium",3,"disabled","invalid","min","readOnly","required","step"],["source",`<ui-input-number
  align="center"
   [disabled]="false"
   [invalid]="false"
   [min]="0"
   name="example"
   [readOnly]="false"
   [required]="false"
   size="medium"
   [step]="1"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='input-number'] {
    /* medium is the default size */
    --font: var(--body-base);
    --height: var(--spacing-sizing-10);
    --svg-width: var(--spacing-sizing-05);
    --color: var(--foreground-neutral-on-surface);

    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    font: var(--font);
    height: var(--height);
    border: 1px solid var(--stroke-neutral-base);
    border-radius: var(--radius-sm);
    background: var(--surface-neutral-t1-base);

    &:focus-within {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
    }

    [data-divider] {
        width: 1px;
        background: var(--stroke-neutral-base);
        margin: 3px 0;

        /* account for border - 3(margin)  * 2 + 2(border) */
        height: calc(var(--height) - 8px);
    }

    button {
        width: var(--height);
        height: calc(var(--height) - 2px);
        background: none;
        border: none;
        cursor: pointer;
        font: var(--font);
        flex-shrink: 0;

        svg {
            width: var(--svg-width);
        }

        &:focus {
            outline: none;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color);

        &:disabled {
            cursor: not-allowed;
            color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    input {
        color: var(--color);
        min-width: 0;
        display: block;
        font: var(--font);
        text-align: center;
        padding: 0 var(--spacing-sizing-03);
        background: transparent;
        border: none;
        flex-grow: 1;

        &:focus {
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
        }

        &[type='number'] {
            appearance: textfield;
        }
    }

    &:not([data-disabled], [data-readonly]) {
        input,
        button:not(:disabled) {
            &:hover {
                background-color: var(--interactions-hover-opacity);
            }

            &:active {
                background-color: var(--interactions-press-opacity);
            }
        }

        &[data-invalid] {
            border-color: var(--status-error);
            outline-color: var(--status-error);
        }
    }

    &[data-disabled],
    &[data-readonly] {
        --color: var(--foreground-neutral-disabled-on-surface);

        border-color: var(--stroke-neutral-disabled-light);
        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        [data-divider] {
            border-color: var(--stroke-neutral-disabled-light);
        }
    }

    &[data-readonly] {
        input {
            color: var(--foreground-neutral-on-surface) !important;
        }
    }

    &[data-size='small'] {
        --font: var(--body-small);
        --height: var(--spacing-sizing-08);
    }

    &[data-size='large'] {
        --font: var(--body-large);
        --height: var(--spacing-sizing-12);
        --svg-width: var(--spacing-sizing-06);
    }

    &[data-centered] {
        button:first-of-type {
            order: -1;
        }

        [data-divider] {
            display: none;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"h2",1),i(2," InputNumber "),e(),n(3,"span",2),r(4,"ui-tag",3),e()(),r(5,"app-markup",4),n(6,"h3"),i(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),r(10,"ui-input-number",7),e(),r(11,"app-syntax",8),e(),n(12,"h3"),i(13,"Inputs"),e(),r(14,"app-type-props",9),n(15,"h3"),i(16,"Outputs"),e(),r(17,"app-type-props",9),n(18,"h3"),i(19,"Examples"),e(),u(20,10),n(21,"h3"),i(22,"Stylesheet"),e(),n(23,"p"),i(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(25,"ui-card",5),r(26,"app-syntax",11),e()),o&2&&(t(5),a("source",l.description),t(5),a("disabled",!1)("invalid",!1)("min",0)("readOnly",!1)("required",!1)("step",1),t(),a("pretty",!0),t(3),a("props",l.componentInputs),t(3),a("props",l.componentOutputs),t(3),a("ngComponentOutlet",l.exampleComponent),t(6),a("pretty",!0))},dependencies:[f,y,h,b,g,c,v,m],encapsulation:2})};export{x as InputNumberPage};
