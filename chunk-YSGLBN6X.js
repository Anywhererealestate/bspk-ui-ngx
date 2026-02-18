import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as g}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as b}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as d,bb as a,cb as e,db as n,eb as i,kb as c,ya as r}from"./chunk-3WAFZL3C.js";var v=class l{componentInputs=[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",required:!1,default:"false"},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the checkbox.",type:"string",required:!0}];componentOutputs=[{name:"checkedChange",description:`Emits when the value changes. 

Marks the checkbox as checked.`,type:"(value: boolean) => void",required:!1},{name:"valueChange",description:`Emits when the value changes. 

The value of the checkbox.`,type:"(value: string) => void",required:!0}];description="A control that allows users to choose one or more items from a list or turn a feature on or off. This is the base element and if used directly you must wrap it with a label. More often used in CheckboxOption or CheckboxGroup.";exampleComponent=null;constructor(){import("./chunk-QV7KON7J.js").then(p=>this.exampleComponent=p.UICheckboxExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='checkbox'] {
    display: block;
    position: relative;
    width: var(--spacing-sizing-06);
    aspect-ratio: 1/1;
    padding: 2px;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    span {
        --stroke: var(--stroke-neutral-base);
        --inner: none;
        --background: none;
        --color: var(--foreground-brand-on-primary);

        display: flex;
        width: 20px;
        aspect-ratio: 1/1;
        cursor: pointer;
        border-radius: 2px;
        border: 2px solid var(--stroke);
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background: var(--background);

        svg[data-checked] {
            width: 14px;
        }

        svg[data-indeterminate] {
            width: 12px;
        }

        color: var(--color);
    }

    input[type='checkbox']:not(:checked, :indeterminate, [disabled], [readOnly]) {
        &:hover + span {
            background-color: var(--interactions-neutral-hover-opacity);
        }

        &:active + span {
            background-color: var(--interactions-neutral-press-opacity);
        }
    }

    input[type='checkbox']:checked + span,
    input[type='checkbox']:indeterminate + span {
        --stroke: var(--stroke-brand-primary);
        --background: var(--surface-brand-primary);
    }

    input[type='checkbox'][disabled],
    input[type='checkbox'][readOnly] {
        cursor: not-allowed;

        & + span {
            --stroke: var(--stroke-neutral-interactions-disabled-light);
        }

        &:is(:checked, :indeterminate) + span {
            --stroke: transparent;
            --background: var(--interactions-disabled-opacity);
            --color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    input[type='checkbox'][aria-invalid]:not([disabled], [readOnly]) {
        &:checked + span,
        &:indeterminate + span {
            --background: var(--status-error);
        }

        & + span {
            --stroke: var(--status-error);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Checkbox "),n(),e(3,"span",2),i(4,"ui-tag",3),n()(),i(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),i(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),i(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),c(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),i(20,"app-syntax",8),n()),o&2&&(r(5),a("source",s.description),r(3),a("props",s.componentInputs),r(3),a("props",s.componentOutputs),r(3),a("ngComponentOutlet",s.exampleComponent),r(6),a("pretty",!0))},dependencies:[b,g,h,f,u,y,m],encapsulation:2})};export{v as CheckboxPage};
