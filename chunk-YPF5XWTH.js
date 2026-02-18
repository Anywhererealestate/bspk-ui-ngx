import{a as I,b as T,c as M,d as P}from"./chunk-SHFI2UCR.js";import"./chunk-4UWRZSBU.js";import{a as f}from"./chunk-CNCD4XIB.js";import"./chunk-B5MA567L.js";import"./chunk-HFPZGCZI.js";import"./chunk-5RYNVKAX.js";import"./chunk-GTQRBUOE.js";import{a as C}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as D}from"./chunk-PEIK53MF.js";import{a as S}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as q}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as F}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import{b as k}from"./chunk-RZAM6B6G.js";import"./chunk-N6IMOQO3.js";import{Ab as v,Cb as d,Ma as u,Qa as y,Yb as m,ac as p,bb as n,cb as i,db as a,eb as l,la as g,mb as b,nb as h,ya as t}from"./chunk-3WAFZL3C.js";var c=class s extends f{errorMessage=p(void 0);label=p.required();helperText=p(void 0);labelTrailing=p(void 0);style=p(void 0);labelledById=m(()=>T(this.controlId()));describedById=m(()=>this.ariaDescribedBy()||this.helperText()&&P(this.controlId())||void 0);errorMessageId=m(()=>this.ariaErrorMessage()||this.errorMessage()&&M(this.controlId())||void 0);controlId=m(()=>this.id()||k("UIDatePickerField-"));static \u0275fac=(()=>{let o;return function(e){return(o||(o=g(s)))(e||s)}})();static \u0275cmp=u({type:s,selectors:[["ui-date-picker-field"]],hostAttrs:["data-bspk","date-picker-field"],hostVars:1,hostBindings:function(r,e){r&2&&b("id",e.controlId()+"-field")},inputs:{errorMessage:[1,"errorMessage"],label:[1,"label"],helperText:[1,"helperText"],labelTrailing:[1,"labelTrailing"],style:[1,"style"]},features:[y],decls:2,vars:20,consts:[[3,"errorMessage","label","helperText","labelTrailing","controlId","required"],[3,"valueChange","ariaLabelledBy","ariaDescribedBy","ariaErrorMessage","ariaLabel","disabled","id","invalid","name","readOnly","value","required","size"]],template:function(r,e){r&1&&(i(0,"ui-field",0)(1,"ui-date-picker",1),h("valueChange",function(B){return e.value.set(B)}),a()()),r&2&&(v(e.style()),n("errorMessage",e.errorMessage())("label",e.label())("helperText",e.helperText())("labelTrailing",e.labelTrailing())("controlId",e.controlId())("required",e.required()),t(),n("ariaLabelledBy",e.labelledById())("ariaDescribedBy",e.describedById())("ariaErrorMessage",e.errorMessageId())("ariaLabel",e.ariaLabel())("disabled",e.disabled())("id",e.controlId())("invalid",e.invalid())("name",e.name())("readOnly",e.readOnly())("value",e.value())("required",e.required())("size",e.size()))},dependencies:[I,f],styles:[`[data-bspk-utility=field]{width:100%;display:flex;flex-direction:column;gap:var(--spacing-sizing-01);border:none;max-width:100%;min-inline-size:unset}[data-bspk-utility=field] [data-field-label]{display:flex;flex-direction:row;align-items:center;gap:var(--spacing-sizing-01)}[data-bspk-utility=field] [data-field-label] span{font:var(--labels-small);color:var(--foreground-neutral-on-surface)}[data-bspk-utility=field] [data-field-label] span[data-required]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-01)}[data-bspk-utility=field] [data-field-label] span[data-trailing]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-02);margin-left:auto}[data-bspk-utility=field] [data-field-description]{font:var(--body-small);color:var(--foreground-neutral-on-surface-variant-01);margin:0;padding:0}[data-bspk-utility=field] fieldset,[data-bspk-utility=field] legend{display:contents}
`],encapsulation:2})};var w=class s{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",required:!1,default:"true"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",required:!1,default:"mm/dd/yyyy"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:"(value: Date | string | undefined) => void",required:!1}];description=`A field wrapper for the UIDatePicker component.

This component takes properties from the Field and DatePicker components.`;exampleComponent=null;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=u({type:s,selectors:[["app-component-page"]],decls:24,vars:10,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","name","example","placeholder","mm/dd/yyyy","size","medium",3,"closeCalendarOnChange","disabled","invalid","readOnly","required"],["source",`<ui-date-picker-field
  label="example"
   [closeCalendarOnChange]="true"
   [disabled]="false"
   [invalid]="false"
   name="example"
   placeholder="mm/dd/yyyy"
   [readOnly]="false"
   [required]="false"
   size="medium"
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(r,e){r&1&&(i(0,"div",0)(1,"h2",1),d(2," DatePickerField "),a(),i(3,"span",2),l(4,"ui-tag",3),a()(),l(5,"app-markup",4),i(6,"h3"),d(7,"Basic Usage"),a(),i(8,"ui-card",5)(9,"div",6),l(10,"ui-date-picker-field",7),a(),l(11,"app-syntax",8),a(),i(12,"h3"),d(13,"Inputs"),a(),l(14,"app-type-props",9),i(15,"h3"),d(16,"Outputs"),a(),l(17,"app-type-props",9),i(18,"h3"),d(19,"Stylesheet"),a(),i(20,"p"),d(21," This is the CSS for the component. The css variables used within are available in the styles package. "),a(),i(22,"ui-card",5),l(23,"app-syntax",10),a()),r&2&&(t(5),n("source",e.description),t(5),n("closeCalendarOnChange",!0)("disabled",!1)("invalid",!1)("readOnly",!1)("required",!1),t(),n("pretty",!0),t(3),n("props",e.componentInputs),t(3),n("props",e.componentOutputs),t(6),n("pretty",!0))},dependencies:[F,S,q,x,c,D,C],encapsulation:2})};export{w as DatePickerFieldPage};
