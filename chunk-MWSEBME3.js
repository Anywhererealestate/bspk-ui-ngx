import{a as g}from"./chunk-S4CFSD56.js";import"./chunk-SHFI2UCR.js";import"./chunk-4UWRZSBU.js";import"./chunk-HFPZGCZI.js";import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as f}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as y}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as c}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as h}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as u}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as d,bb as i,cb as t,db as e,eb as a,kb as m,ya as n}from"./chunk-3WAFZL3C.js";var x=class p{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],required:!1,default:"off"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},{name:"type",description:"The type of the input.",type:["number","password","tel","text"],required:!1,default:"text"},{name:"value",description:"The value of the input field.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the input field.`,type:"(value: string) => void",required:!1}];description=`A field wrapper for the Input component.

This component takes properties from the Field and Input components.`;exampleComponent=null;constructor(){import("./chunk-EF7772FV.js").then(o=>this.exampleComponent=o.UIInputFieldExample)}static \u0275fac=function(l){return new(l||p)};static \u0275cmp=d({type:p,selectors:[["app-component-page"]],decls:27,vars:11,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","autoComplete","off","name","example","size","medium","type","text",3,"disabled","invalid","readOnly","required","showClearButton"],["source",`<ui-input-field
  label="example"
   autoComplete="off"
   [disabled]="false"
   [invalid]="false"
   name="example"
   [readOnly]="false"
   [required]="false"
   [showClearButton]="true"
   size="medium"
   type="text"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(l,s){l&1&&(t(0,"div",0)(1,"h2",1),r(2," InputField "),e(),t(3,"span",2),a(4,"ui-tag",3),e()(),a(5,"app-markup",4),t(6,"h3"),r(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),a(10,"ui-input-field",7),e(),a(11,"app-syntax",8),e(),t(12,"h3"),r(13,"Inputs"),e(),a(14,"app-type-props",9),t(15,"h3"),r(16,"Outputs"),e(),a(17,"app-type-props",9),t(18,"h3"),r(19,"Examples"),e(),m(20,10),t(21,"h3"),r(22,"Stylesheet"),e(),t(23,"p"),r(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(25,"ui-card",5),a(26,"app-syntax",11),e()),l&2&&(n(5),i("source",s.description),n(5),i("disabled",!1)("invalid",!1)("readOnly",!1)("required",!1)("showClearButton",!0),n(),i("pretty",!0),n(3),i("props",s.componentInputs),n(3),i("props",s.componentOutputs),n(3),i("ngComponentOutlet",s.exampleComponent),n(6),i("pretty",!0))},dependencies:[h,v,c,y,g,f,b,u],encapsulation:2})};export{x as InputFieldPage};
