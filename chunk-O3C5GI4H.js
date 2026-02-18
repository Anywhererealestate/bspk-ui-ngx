import{a as w}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as b}from"./chunk-PEIK53MF.js";import{a as x}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as T}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as y}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as g}from"./chunk-N6IMOQO3.js";import{$a as c,Cb as i,Db as f,Ma as d,Za as u,ab as m,bb as s,cb as e,db as t,eb as o,kb as h,ya as n}from"./chunk-3WAFZL3C.js";function I(r,l){if(r&1&&(e(0,"h4"),i(1),t(),o(2,"app-type-props",5)),r&2){let a=l.$implicit;n(),f(a.name),n(),s("props",a.props)}}var q=class r{componentInputs=[{name:"component",description:`The component identifier.

Usually`,type:"string",required:!0},{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}];componentOutputs=[{name:"componentChange",description:`Emits when the value changes. 

The component identifier.

Usually`,type:"(value: string) => void",required:!0},{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}];associatedTypes=[{name:"TabListBaseProps",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],default:"medium",required:!1},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}]},{name:"TabOption",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"badge",description:"The badge count to display on the tab",type:"number",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}]},{name:"UITabListProps",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"component",description:`The component identifier.

Usually`,type:"string",required:!0}]}];description=`Navigation tool that organizes content across different screens and views.

See TabGroup or SegmentedControl for examples.`;exampleComponent=null;constructor(){import("./chunk-GWOYHNC2.js").then(l=>this.exampleComponent=l.UITabListExample)}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=d({type:r,selectors:[["app-component-page"]],decls:25,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","magenta","label","Utility"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`ul[data-bspk-utility='tab-list'] {
    --item-flex-grow: 0;

    display: flex;
    flex-direction: row;
    list-style: none;
    height: var(--height);
    font: var(--font);
    width: fit-content; /* default to hug content */

    &[data-width='fill'] {
        align-items: stretch;
        width: 100%;

        --item-flex-grow: 1;
    }

    --icon-size: var(--spacing-sizing-05);
    --font: var(--labels-base);
    --height: var(--spacing-sizing-10);

    &[data-size='small'] {
        --font: var(--labels-small);
        --height: var(--spacing-sizing-08);
        --icon-size: var(--spacing-sizing-04);
    }

    &[data-size='large'] {
        --font: var(--labels-large);
        --height: var(--spacing-sizing-12);
        --icon-size: var(--spacing-sizing-06);
    }

    &:has(:focus-visible) {
        outline: 2px solid var(--stroke-neutral-focus);
        outline-offset: -1px;
        position: relative;
        z-index: var(--z-index-focus);
    }

    li {
        list-style: none;
        cursor: pointer;
        font: var(--font);
        white-space: nowrap;
        outline: none;
        user-select: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-02);
        min-width: 0; /* Prevent overflow from long content */

        &[aria-disabled] {
            cursor: not-allowed;
        }

        span {
            pointer-events: none;
        }

        [data-label][style] {
            justify-content: left;
            max-width: 200px;
        }

        svg {
            width: var(--icon-size);
        }
    }

    &:not([data-bspk]):focus-within {
        li:not([aria-disabled]) {
            &[data-active] {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            &[aria-selected='true'] {
                background-color: var(--surface-brand-primary-highlight);
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(a,p){a&1&&(e(0,"div",0)(1,"h2",1),i(2," TabList "),t(),e(3,"span",2),o(4,"ui-tag",3),t()(),o(5,"app-markup",4),e(6,"h3"),i(7,"Inputs"),t(),o(8,"app-type-props",5),e(9,"h3"),i(10,"Outputs"),t(),o(11,"app-type-props",5),e(12,"h3"),i(13,"Associated Types"),t(),c(14,I,3,2,null,null,u),e(16,"h3"),i(17,"Examples"),t(),h(18,6),e(19,"h3"),i(20,"Stylesheet"),t(),e(21,"p"),i(22," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(23,"ui-card",7),o(24,"app-syntax",8),t()),a&2&&(n(5),s("source",p.description),n(3),s("props",p.componentInputs),n(3),s("props",p.componentOutputs),n(3),m(p.associatedTypes),n(4),s("ngComponentOutlet",p.exampleComponent),n(6),s("pretty",!0))},dependencies:[v,x,y,T,b,w,g],encapsulation:2})};export{q as TabListPage};
