import{a as y}from"./chunk-CNCD4XIB.js";import"./chunk-B5MA567L.js";import"./chunk-5RYNVKAX.js";import"./chunk-GTQRBUOE.js";import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as g}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as h}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as p,bb as a,cb as t,db as e,eb as i,kb as m,ya as n}from"./chunk-3WAFZL3C.js";var x=class d{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",required:!1,default:"true"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",required:!1,default:"mm/dd/yyyy"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:"(value: Date | string | undefined) => void",required:!1}];description="An input that allows a customer to manually type in a specific date or triggers a the Calendar component to select a date.";exampleComponent=null;constructor(){import("./chunk-37PJARCP.js").then(s=>this.exampleComponent=s.UIDatePickerExample)}static \u0275fac=function(l){return new(l||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:27,vars:11,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["name","example","placeholder","mm/dd/yyyy","size","medium",3,"closeCalendarOnChange","disabled","invalid","readOnly","required"],["source",`<ui-date-picker
  [closeCalendarOnChange]="true"
   [disabled]="false"
   [invalid]="false"
   name="example"
   placeholder="mm/dd/yyyy"
   [readOnly]="false"
   [required]="false"
   size="medium"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='date-picker'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    [data-bspk='input'] {
        padding-right: 0;
    }

    [data-bspk='calendar-popup'] {
        border-radius: var(--radius-lg);
        box-shadow: var(--drop-shadow-float);
        z-index: var(--z-index-dropdown);
        width: fit-content;
    }

    [data-bspk='inline-alert'] {
        margin-top: var(--spacing-sizing-01);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"h2",1),r(2," DatePicker "),e(),t(3,"span",2),i(4,"ui-tag",3),e()(),i(5,"app-markup",4),t(6,"h3"),r(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),i(10,"ui-date-picker",7),e(),i(11,"app-syntax",8),e(),t(12,"h3"),r(13,"Inputs"),e(),i(14,"app-type-props",9),t(15,"h3"),r(16,"Outputs"),e(),i(17,"app-type-props",9),t(18,"h3"),r(19,"Examples"),e(),m(20,10),t(21,"h3"),r(22,"Stylesheet"),e(),t(23,"p"),r(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(25,"ui-card",5),i(26,"app-syntax",11),e()),l&2&&(n(5),a("source",o.description),n(5),a("closeCalendarOnChange",!0)("disabled",!1)("invalid",!1)("readOnly",!1)("required",!1),n(),a("pretty",!0),n(3),a("props",o.componentInputs),n(3),a("props",o.componentOutputs),n(3),a("ngComponentOutlet",o.exampleComponent),n(6),a("pretty",!0))},dependencies:[h,v,f,g,y,u,b,c],encapsulation:2})};export{x as DatePickerPage};
