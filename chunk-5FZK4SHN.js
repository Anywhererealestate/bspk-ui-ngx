import{a as g}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as c}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as b}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as n,Ma as d,bb as a,cb as e,db as t,eb as o,kb as u,ya as i}from"./chunk-3WAFZL3C.js";var y=class p{componentInputs=[{name:"showTrail",description:`When width is 'hug' this determines if the trailing underline should be showing. When width is 'fill' this
property isn't applicable.`,type:"boolean",required:!1,default:"false"},{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}];description="Navigation tool that organizes content across different screens and views.";exampleComponent=null;constructor(){import("./chunk-XY3ORUJA.js").then(l=>this.exampleComponent=l.UITabGroupExample)}static \u0275fac=function(r){return new(r||p)};static \u0275cmp=d({type:p,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`ul[data-bspk='tab-group'] {
    border-bottom: none;
    max-width: 100%;

    li {
        border: 0;
        color: var(--foreground-neutral-on-surface-variant-02);
        background: none;
        border-bottom: 1px solid var(--stroke-neutral-low);
        position: relative;
        padding: 0 var(--spacing-sizing-04);

        &:not([aria-disabled]) {
            &:active {
                background: var(--interactions-neutral-press-opacity);
            }
        }

        &[aria-disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
        }

        &[aria-selected='true'] {
            color: var(--foreground-brand-primary);

            &::after {
                content: '';
                display: block;
                width: calc(100% - var(--spacing-sizing-04) * 2);
                height: 2px;
                background-color: var(--stroke-brand-primary);
                bottom: -1px;
                position: absolute;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
            }

            svg {
                color: var(--surface-brand-primary);
            }
        }
    }

    &[data-show-trail][data-width='hug'] {
        width: 100%;
        border-bottom: 1px solid var(--stroke-neutral-low);

        li {
            border-bottom: none;
        }
    }

    &:focus-within {
        li:not([aria-disabled])[data-active] {
            background: var(--interactions-neutral-hover-opacity);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(r,s){r&1&&(e(0,"div",0)(1,"h2",1),n(2," TabGroup "),t(),e(3,"span",2),o(4,"ui-tag",3),t()(),o(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),o(8,"app-type-props",5),e(9,"h3"),n(10,"Outputs"),t(),o(11,"app-type-props",5),e(12,"h3"),n(13,"Examples"),t(),u(14,6),e(15,"h3"),n(16,"Stylesheet"),t(),e(17,"p"),n(18," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(19,"ui-card",7),o(20,"app-syntax",8),t()),r&2&&(i(5),a("source",s.description),i(3),a("props",s.componentInputs),i(3),a("props",s.componentOutputs),i(3),a("ngComponentOutlet",s.exampleComponent),i(6),a("pretty",!0))},dependencies:[f,v,h,b,c,g,m],encapsulation:2})};export{y as TabGroupPage};
