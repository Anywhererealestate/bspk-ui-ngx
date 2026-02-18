import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as g}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as y}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as d,bb as a,cb as e,db as n,eb as r,kb as m,ya as i}from"./chunk-3WAFZL3C.js";var v=class l{componentInputs=[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the radio as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the radio input.",type:"string",required:!0}];componentOutputs=[{name:"checkedChange",description:`Emits when the value changes. 

Marks the radio as checked.`,type:"(value: boolean) => void",required:!1}];description="A round control that allows user to choose one option from a set. This is the base element and if used directly you must wrap it with a label. This will more often be used in the RadioOption or RadioGroup component.";exampleComponent=null;constructor(){import("./chunk-DBLMCSEV.js").then(p=>this.exampleComponent=p.UIRadioExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","magenta","label","Utility"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='radio'] {
    display: block;
    position: relative;
    width: var(--spacing-sizing-06);
    aspect-ratio: 1/1;
    padding: 2px;

    input[type='radio'] {
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
        --inner: var(--foreground-brand-primary);
        --background: none;

        position: relative;
        z-index: 1;
        display: flex;
        width: var(--spacing-sizing-05);
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 2px solid var(--stroke);
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: var(--background);

        &::before {
            content: '';
            display: block;
            width: 100%;
            scale: 0.7;
            aspect-ratio: 1/1;
            background: var(--inner);
            border-radius: var(--radius-full);
            opacity: 0;
        }
    }

    input[type='radio']:not(:disabled) {
        &:hover + span {
            --background: var(--interactions-neutral-hover-opacity);
        }

        &:active + span {
            --background: var(--interactions-neutral-press-opacity);
        }

        &[data-invalid] + span {
            --stroke: var(--status-error);
            --inner: var(--status-error);
        }
    }

    input[type='radio']:checked + span {
        --stroke: var(--stroke-brand-primary);

        &::before {
            opacity: 1;
        }
    }

    input[type='radio']:disabled {
        pointer-events: none;

        & + span {
            --stroke: var(--stroke-neutral-interactions-disabled-light);
            --inner: var(--foreground-neutral-disabled-on-surface);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Radio "),n(),e(3,"span",2),r(4,"ui-tag",3),n()(),r(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),r(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),r(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),m(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),r(20,"app-syntax",8),n()),o&2&&(i(5),a("source",s.description),i(3),a("props",s.componentInputs),i(3),a("props",s.componentOutputs),i(3),a("ngComponentOutlet",s.exampleComponent),i(6),a("pretty",!0))},dependencies:[f,g,h,y,u,b,c],encapsulation:2})};export{v as RadioPage};
