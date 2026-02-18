import{a as g}from"./chunk-HQTBZQQU.js";import"./chunk-IYOPT2HA.js";import"./chunk-SHFI2UCR.js";import"./chunk-4UWRZSBU.js";import"./chunk-HFPZGCZI.js";import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as f}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as y}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as c}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as h}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as u}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as p,bb as a,cb as t,db as e,eb as i,kb as m,ya as n}from"./chunk-3WAFZL3C.js";var x=class d{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",required:!1,default:"10"},{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",required:!1,default:"3"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the textarea field.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the textarea field.`,type:"(value: string) => void",required:!1}];description=`A field wrapper for the UITextarea component.

This component takes properties from the Field and Textarea components.`;exampleComponent=null;constructor(){import("./chunk-IYZEFPIU.js").then(o=>this.exampleComponent=o.UITextareaFieldExample)}static \u0275fac=function(l){return new(l||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:27,vars:12,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","name","example","size","medium",3,"disabled","invalid","maxRows","minRows","readOnly","required"],["source",`<ui-textarea-field
  label="example"
   [disabled]="false"
   [invalid]="false"
   [maxRows]="10"
   [minRows]="3"
   name="example"
   [readOnly]="false"
   [required]="false"
   size="medium"
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(l,s){l&1&&(t(0,"div",0)(1,"h2",1),r(2," TextareaField "),e(),t(3,"span",2),i(4,"ui-tag",3),e()(),i(5,"app-markup",4),t(6,"h3"),r(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),i(10,"ui-textarea-field",7),e(),i(11,"app-syntax",8),e(),t(12,"h3"),r(13,"Inputs"),e(),i(14,"app-type-props",9),t(15,"h3"),r(16,"Outputs"),e(),i(17,"app-type-props",9),t(18,"h3"),r(19,"Examples"),e(),m(20,10),t(21,"h3"),r(22,"Stylesheet"),e(),t(23,"p"),r(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(25,"ui-card",5),i(26,"app-syntax",11),e()),l&2&&(n(5),a("source",s.description),n(5),a("disabled",!1)("invalid",!1)("maxRows",10)("minRows",3)("readOnly",!1)("required",!1),n(),a("pretty",!0),n(3),a("props",s.componentInputs),n(3),a("props",s.componentOutputs),n(3),a("ngComponentOutlet",s.exampleComponent),n(6),a("pretty",!0))},dependencies:[h,v,c,y,g,f,b,u],encapsulation:2})};export{x as TextareaFieldPage};
