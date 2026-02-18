import{a as v}from"./chunk-VVEWQAHM.js";import"./chunk-BHFJQBGW.js";import"./chunk-CGCXPBVB.js";import"./chunk-PB7SAKJX.js";import"./chunk-5RYNVKAX.js";import"./chunk-35L7DRY7.js";import"./chunk-GTQRBUOE.js";import"./chunk-UPYYWTU3.js";import{a as x}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as y}from"./chunk-PEIK53MF.js";import"./chunk-GWCBBZPT.js";import{a as T}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as q}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as b}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as I}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f}from"./chunk-N6IMOQO3.js";import{$a as m,Cb as i,Db as g,Ma as d,Za as u,ab as c,bb as a,cb as n,db as e,eb as r,kb as h,ya as t}from"./chunk-3WAFZL3C.js";function C(s,l){if(s&1&&(n(0,"h4"),i(1),e(),r(2,"app-type-props",9)),s&2){let o=l.$implicit;t(),g(o.name),t(),a("props",o.props)}}var w=class s{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the component",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").`,type:"(value: string) => void",required:!1}];associatedTypes=[{name:"CountryCodeItem",file:"projects/ui/src/lib/input-phone/input-phone.ts",props:[{name:"id",type:"string",required:!0},{name:"countryCallingCode",type:"string",required:!0},{name:"flagIconName",type:"BspkIcon",required:!0},{name:"label",type:"string",required:!0},{name:"value",type:"unknown",required:!0}]},{name:"CountryCodeOption",file:"projects/ui/src/lib/input-phone/input-phone.ts",props:[{name:"countryCallingCode",type:"string",required:!0},{name:"flagIconName",type:"BspkIcon",required:!0},{name:"label",type:"string",required:!0},{name:"value",type:"unknown",required:!0}]}];description=`An input that allows users to enter text phone numbers and select country codes for the phone number.

This is the base element and if used must contain the field label contextually.

For a more complete example with field usage, see the InputPhoneField component.`;exampleComponent=null;constructor(){import("./chunk-JCDQOVQV.js").then(l=>this.exampleComponent=l.UIInputPhoneExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=d({type:s,selectors:[["app-component-page"]],decls:31,vars:10,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["name","example","size","medium",3,"disabled","invalid","readOnly","required"],["source",`<ui-input-phone
  [disabled]="false"
   [invalid]="false"
   name="example"
   [readOnly]="false"
   [required]="false"
   size="medium"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='input-phone'] {
    position: relative;
    width: 100%;
}

[data-bspk-owner='input-phone'][data-bspk='input'] {
    padding-left: 0;

    &:focus-within {
        outline: none;
    }

    input:focus-visible {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
        border-radius: var(--radius-sm);
    }

    [data-bspk='divider'] {
        margin: 0 var(--spacing-sizing-02) 0 0;
    }

    [data-leading] {
        position: relative;

        [data-bspk='button'] {
            gap: var(--spacing-sizing-02);
            padding: 0 var(--spacing-sizing-03);
            min-height: 100%;
            margin-right: var(--spacing-sizing-02);
            position: relative;
            z-index: 2;

            &::after {
                content: '';
                position: absolute;
                top: var(--spacing-sizing-01);
                bottom: var(--spacing-sizing-01);
                right: 0;
                width: 1px;
                background-color: var(--stroke-neutral-base);
                pointer-events: none;
            }
        }
    }

    &[data-size='small'] {
        [data-leading] {
            [data-bspk='button'] {
                padding-left: var(--spacing-sizing-02);
            }
        }
    }
}
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,p){o&1&&(n(0,"div",0)(1,"h2",1),i(2," InputPhone "),e(),n(3,"span",2),r(4,"ui-tag",3),e()(),r(5,"app-markup",4),n(6,"h3"),i(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),r(10,"ui-input-phone",7),e(),r(11,"app-syntax",8),e(),n(12,"h3"),i(13,"Inputs"),e(),r(14,"app-type-props",9),n(15,"h3"),i(16,"Outputs"),e(),r(17,"app-type-props",9),n(18,"h3"),i(19,"Associated Types"),e(),m(20,C,3,2,null,null,u),n(22,"h3"),i(23,"Examples"),e(),h(24,10),n(25,"h3"),i(26,"Stylesheet"),e(),n(27,"p"),i(28," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(29,"ui-card",5),r(30,"app-syntax",11),e()),o&2&&(t(5),a("source",p.description),t(5),a("disabled",!1)("invalid",!1)("readOnly",!1)("required",!1),t(),a("pretty",!0),t(3),a("props",p.componentInputs),t(3),a("props",p.componentOutputs),t(3),c(p.associatedTypes),t(4),a("ngComponentOutlet",p.exampleComponent),t(6),a("pretty",!0))},dependencies:[I,T,b,q,v,y,x,f],encapsulation:2})};export{w as InputPhonePage};
