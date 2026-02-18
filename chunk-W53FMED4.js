import{a as T}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as C}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as b}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as y}from"./chunk-N6IMOQO3.js";import{$a as c,Cb as i,Db as g,Ma as d,Za as m,ab as u,bb as a,cb as e,db as t,eb as l,kb as f,ya as n}from"./chunk-3WAFZL3C.js";function S(o,s){if(o&1&&(e(0,"h4"),i(1),t(),l(2,"app-type-props",5)),o&2){let r=s.$implicit;n(),g(r.name),n(),a("props",r.props)}}var I=class o{componentInputs=[{name:"controlId",description:`The id attribute of the form control rendered in children (e.g., Input, Select, Textarea). Used to associate the
label (htmlFor) with the control for accessibility. Must exactly match the control's id.`,type:"string",required:!0},{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}];componentOutputs=[];associatedTypes=[{name:"ControlFieldProps",file:"projects/ui/src/lib/field/field.ts",props:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}]}];description=`Wrapper component for form controls.

Children should be one of the following: DatePicker, Input, InputNumber, InputPhone, Password, Select, Textarea, RadioGroup, CheckboxGroup, or TimePicker.`;exampleComponent=null;constructor(){import("./chunk-PEGDDFP4.js").then(s=>this.exampleComponent=s.UIFieldExample)}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=d({type:o,selectors:[["app-component-page"]],decls:22,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","magenta","label","Utility"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk-utility='field'] {
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(r,p){r&1&&(e(0,"div",0)(1,"h2",1),i(2," Field "),t(),e(3,"span",2),l(4,"ui-tag",3),t()(),l(5,"app-markup",4),e(6,"h3"),i(7,"Inputs"),t(),l(8,"app-type-props",5),e(9,"h3"),i(10,"Associated Types"),t(),c(11,S,3,2,null,null,m),e(13,"h3"),i(14,"Examples"),t(),f(15,6),e(16,"h3"),i(17,"Stylesheet"),t(),e(18,"p"),i(19," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(20,"ui-card",7),l(21,"app-syntax",8),t()),r&2&&(n(5),a("source",p.description),n(3),a("props",p.componentInputs),n(3),u(p.associatedTypes),n(4),a("ngComponentOutlet",p.exampleComponent),n(6),a("pretty",!0))},dependencies:[v,C,b,x,h,T,y],encapsulation:2})};export{I as FieldPage};
