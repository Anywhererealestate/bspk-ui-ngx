import{a as f}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as b}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as u}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as n,Ma as c,bb as a,cb as e,db as t,eb as r,kb as d,ya as i}from"./chunk-3WAFZL3C.js";var y=class l{componentInputs=[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the control as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"value",description:"The value of the switch.",type:"string",required:!0}];componentOutputs=[{name:"checkedChange",description:`Emits when the value changes. 

Marks the control as checked.`,type:"(value: boolean) => void",required:!1}];description="A control element that allows users to toggle between two states, typically representing on/off. This is the base element and if used directly you must wrap it with a label.";exampleComponent=null;constructor(){import("./chunk-WP4I27MA.js").then(p=>this.exampleComponent=p.UISwitchExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=c({type:l,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='switch'] {
    --track-width: var(--spacing-sizing-09);
    --toggle-width: var(--spacing-sizing-04);
    --track-bg: var(--surface-neutral-t4-high);
    --toggle-bg: var(--foreground-neutral-on-color);

    display: block;
    margin: 2px;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
    }

    width: var(--track-width);
    height: var(--spacing-sizing-05);
    border-radius: var(--spacing-sizing-05);
    background-color: var(--track-bg);
    position: relative;
    z-index: 1;

    span {
        display: block;
        width: var(--toggle-width);
        height: var(--toggle-width);
        border-radius: var(--radius-full);
        background-color: var(--toggle-bg);
        transition: left 0.2s;
        box-shadow: var(--drop-shadow-raise);
        left: 2px;
        top: 2px;
        position: absolute;
    }

    &:has(input[type='checkbox']:checked) {
        --track-bg: var(--foreground-brand-primary);

        span {
            left: calc(var(--track-width) - var(--toggle-width) - 2px);
        }
    }

    &:has(input[type='checkbox']:disabled) {
        input[type='checkbox'] {
            pointer-events: none;
        }

        --track-bg: var(--interactions-disabled-opacity);
        --toggle-bg: var(--foreground-neutral-disabled-on-surface);

        &:has(input[type='checkbox']:checked) span {
            --toggle-bg: var(--foreground-neutral-disabled-on-color-surface);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),n(2," Switch "),t(),e(3,"span",2),r(4,"ui-tag",3),t()(),r(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),r(8,"app-type-props",5),e(9,"h3"),n(10,"Outputs"),t(),r(11,"app-type-props",5),e(12,"h3"),n(13,"Examples"),t(),d(14,6),e(15,"h3"),n(16,"Stylesheet"),t(),e(17,"p"),n(18," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(19,"ui-card",7),r(20,"app-syntax",8),t()),o&2&&(i(5),a("source",s.description),i(3),a("props",s.componentInputs),i(3),a("props",s.componentOutputs),i(3),a("ngComponentOutlet",s.exampleComponent),i(6),a("pretty",!0))},dependencies:[g,v,u,b,h,f,m],encapsulation:2})};export{y as SwitchPage};
