import{a as b}from"./chunk-266MJZYW.js";import"./chunk-DV726YVF.js";import{a as M,b as q,c as N,d as x}from"./chunk-SHFI2UCR.js";import"./chunk-4UWRZSBU.js";import"./chunk-6IOSCMCY.js";import"./chunk-HFPZGCZI.js";import{a as S}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as T}from"./chunk-PEIK53MF.js";import{a as U}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as D}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as w}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as F}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import{b as I}from"./chunk-RZAM6B6G.js";import"./chunk-N6IMOQO3.js";import{Ab as v,Cb as s,Ma as m,Qa as g,Yb as u,ac as p,bb as r,cb as i,db as n,eb as l,la as c,mb as y,nb as h,ya as a}from"./chunk-3WAFZL3C.js";var f=class d extends b{errorMessage=p(void 0);label=p.required();helperText=p(void 0);labelTrailing=p(void 0);style=p(void 0);labelledById=u(()=>q(this.controlId()));describedById=u(()=>this.ariaDescribedBy()||this.helperText()&&x(this.controlId())||void 0);errorMessageId=u(()=>this.ariaErrorMessage()||this.errorMessage()&&N(this.controlId())||void 0);controlId=u(()=>this.id()||I("UIInputNumberField-"));static \u0275fac=(()=>{let o;return function(e){return(o||(o=c(d)))(e||d)}})();static \u0275cmp=m({type:d,selectors:[["ui-input-number-field"]],hostAttrs:["data-bspk","input-number-field"],hostVars:1,hostBindings:function(t,e){t&2&&y("id",e.controlId()+"-field")},inputs:{errorMessage:[1,"errorMessage"],label:[1,"label"],helperText:[1,"helperText"],labelTrailing:[1,"labelTrailing"],style:[1,"style"]},features:[g],decls:2,vars:20,consts:[[3,"errorMessage","label","helperText","labelTrailing","controlId","required"],[3,"valueChange","ariaLabelledBy","ariaDescribedBy","ariaErrorMessage","ariaLabel","disabled","id","invalid","name","readOnly","value","required","size"]],template:function(t,e){t&1&&(i(0,"ui-field",0)(1,"ui-input-number",1),h("valueChange",function(B){return e.value.set(B)}),n()()),t&2&&(v(e.style()),r("errorMessage",e.errorMessage())("label",e.label())("helperText",e.helperText())("labelTrailing",e.labelTrailing())("controlId",e.controlId())("required",e.required()),a(),r("ariaLabelledBy",e.labelledById())("ariaDescribedBy",e.describedById())("ariaErrorMessage",e.errorMessageId())("ariaLabel",e.ariaLabel())("disabled",e.disabled())("id",e.controlId())("invalid",e.invalid())("name",e.name())("readOnly",e.readOnly())("value",e.value())("required",e.required())("size",e.size()))},dependencies:[M,b],styles:[`[data-bspk-utility=field]{width:100%;display:flex;flex-direction:column;gap:var(--spacing-sizing-01);border:none;max-width:100%;min-inline-size:unset}[data-bspk-utility=field] [data-field-label]{display:flex;flex-direction:row;align-items:center;gap:var(--spacing-sizing-01)}[data-bspk-utility=field] [data-field-label] span{font:var(--labels-small);color:var(--foreground-neutral-on-surface)}[data-bspk-utility=field] [data-field-label] span[data-required]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-01)}[data-bspk-utility=field] [data-field-label] span[data-trailing]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-02);margin-left:auto}[data-bspk-utility=field] [data-field-description]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-01);margin:0;padding:0}[data-bspk-utility=field] fieldset,[data-bspk-utility=field] legend{display:contents}
`],encapsulation:2})};var z=class d{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],required:!1,default:"center"},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",required:!1,default:"0"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",required:!1,default:"1"},{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"(value: string) => void",required:!1}];description=`A field wrapper for the UIInputNumber component.

This component takes properties from the Field and InputNumber components.`;exampleComponent=null;static \u0275fac=function(t){return new(t||d)};static \u0275cmp=m({type:d,selectors:[["app-component-page"]],decls:24,vars:11,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","align","center","name","example","size","medium",3,"disabled","invalid","min","readOnly","required","step"],["source",`<ui-input-number-field
  label="example"
   align="center"
   [disabled]="false"
   [invalid]="false"
   [min]="0"
   name="example"
   [readOnly]="false"
   [required]="false"
   size="medium"
   [step]="1"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],["source",`[data-bspk-utility='field'] {
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"h2",1),s(2," InputNumberField "),n(),i(3,"span",2),l(4,"ui-tag",3),n()(),l(5,"app-markup",4),i(6,"h3"),s(7,"Basic Usage"),n(),i(8,"ui-card",5)(9,"div",6),l(10,"ui-input-number-field",7),n(),l(11,"app-syntax",8),n(),i(12,"h3"),s(13,"Inputs"),n(),l(14,"app-type-props",9),i(15,"h3"),s(16,"Outputs"),n(),l(17,"app-type-props",9),i(18,"h3"),s(19,"Stylesheet"),n(),i(20,"p"),s(21," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),i(22,"ui-card",5),l(23,"app-syntax",10),n()),t&2&&(a(5),r("source",e.description),a(5),r("disabled",!1)("invalid",!1)("min",0)("readOnly",!1)("required",!1)("step",1),a(),r("pretty",!0),a(3),r("props",e.componentInputs),a(3),r("props",e.componentOutputs),a(6),r("pretty",!0))},dependencies:[F,U,w,D,f,T,S],encapsulation:2})};export{z as InputNumberFieldPage};
