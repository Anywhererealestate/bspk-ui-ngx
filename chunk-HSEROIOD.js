import{a as h}from"./chunk-NNBW4BIW.js";import"./chunk-VVEWQAHM.js";import"./chunk-SHFI2UCR.js";import"./chunk-4UWRZSBU.js";import"./chunk-HFPZGCZI.js";import"./chunk-BHFJQBGW.js";import"./chunk-CGCXPBVB.js";import"./chunk-PB7SAKJX.js";import"./chunk-5RYNVKAX.js";import"./chunk-35L7DRY7.js";import"./chunk-GTQRBUOE.js";import"./chunk-UPYYWTU3.js";import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as c}from"./chunk-PEIK53MF.js";import"./chunk-GWCBBZPT.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as y}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as u}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as p,bb as i,cb as n,db as e,eb as a,kb as m,ya as t}from"./chunk-3WAFZL3C.js";var x=class d{componentInputs=[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the component",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").`,type:"(value: string) => void",required:!1}];description=`A field wrapper for the UIInputPhone component.

This component takes properties from the Field and InputPhone components.`;exampleComponent=null;constructor(){import("./chunk-AAD3NBWR.js").then(s=>this.exampleComponent=s.UIInputPhoneFieldExample)}static \u0275fac=function(l){return new(l||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:27,vars:10,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","name","example","size","medium",3,"disabled","invalid","readOnly","required"],["source",`<ui-input-phone-field
  label="example"
   [disabled]="false"
   [invalid]="false"
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
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"h2",1),r(2," InputPhoneField "),e(),n(3,"span",2),a(4,"ui-tag",3),e()(),a(5,"app-markup",4),n(6,"h3"),r(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),a(10,"ui-input-phone-field",7),e(),a(11,"app-syntax",8),e(),n(12,"h3"),r(13,"Inputs"),e(),a(14,"app-type-props",9),n(15,"h3"),r(16,"Outputs"),e(),a(17,"app-type-props",9),n(18,"h3"),r(19,"Examples"),e(),m(20,10),n(21,"h3"),r(22,"Stylesheet"),e(),n(23,"p"),r(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(25,"ui-card",5),a(26,"app-syntax",11),e()),l&2&&(t(5),i("source",o.description),t(5),i("disabled",!1)("invalid",!1)("readOnly",!1)("required",!1),t(),i("pretty",!0),t(3),i("props",o.componentInputs),t(3),i("props",o.componentOutputs),t(3),i("ngComponentOutlet",o.exampleComponent),t(6),i("pretty",!0))},dependencies:[g,v,f,y,h,c,b,u],encapsulation:2})};export{x as InputPhoneFieldPage};
