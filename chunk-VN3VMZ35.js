import{a as f}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as p}from"./chunk-PEIK53MF.js";import{a as h}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as u}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as m}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as c}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import"./chunk-N6IMOQO3.js";import{Cb as i,Ma as d,bb as a,cb as e,db as t,eb as n,ya as r}from"./chunk-3WAFZL3C.js";var y=class o{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"Placeholder for the select",type:"string",required:!1,default:"Select one"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the select control.",type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the select control.`,type:"(value: string) => void",required:!1}];description=`A field wrapper for the UISelect component.

This component takes properties from the Field and Select components.`;exampleComponent=null;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["app-component-page"]],decls:18,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],[3,"props"],["variant","outlined"],["source",`[data-bspk-utility='field'] {
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(l,s){l&1&&(e(0,"div",0)(1,"h2",1),i(2," SelectField "),t(),e(3,"span",2),n(4,"ui-tag",3),t()(),n(5,"app-markup",4),e(6,"h3"),i(7,"Inputs"),t(),n(8,"app-type-props",5),e(9,"h3"),i(10,"Outputs"),t(),n(11,"app-type-props",5),e(12,"h3"),i(13,"Stylesheet"),t(),e(14,"p"),i(15," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(16,"ui-card",6),n(17,"app-syntax",7),t()),l&2&&(r(5),a("source",s.description),r(3),a("props",s.componentInputs),r(3),a("props",s.componentOutputs),r(6),a("pretty",!0))},dependencies:[c,h,m,u,p,f],encapsulation:2})};export{y as SelectFieldPage};
