import{a as w}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as v}from"./chunk-PEIK53MF.js";import{a as x}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as C}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as y}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as b}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f}from"./chunk-N6IMOQO3.js";import{$a as u,Cb as a,Db as g,Ma as p,Za as c,ab as m,bb as r,cb as e,db as t,eb as o,kb as h,ya as n}from"./chunk-3WAFZL3C.js";function S(s,l){if(s&1&&(e(0,"h4"),a(1),t(),o(2,"app-type-props",5)),s&2){let i=l.$implicit;n(),g(i.name),n(),r("props",i.props)}}var T=class s{componentInputs=[{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}];associatedTypes=[{name:"SegmentedControlOption",file:"projects/ui/src/lib/segmented-control/segmented-control.ts",props:[{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}]}];description="Navigation tool that organizes content across different screens and views.";exampleComponent=null;constructor(){import("./chunk-LK3OLFMU.js").then(l=>this.exampleComponent=l.UISegmentedControlExample)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=p({type:s,selectors:[["app-component-page"]],decls:25,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`ul[data-bspk='segmented-control'] {
    background: var(--surface-neutral-t3-low);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sizing-01);

    &[data-width='fill'] {
        margin: 0 var(--spacing-sizing-04);
    }

    --padding: var(--spacing-sizing-04);

    &[data-size='small'] {
        --padding: var(--spacing-sizing-03);
    }

    &[data-size='large'] {
        --padding: var(--spacing-sizing-05);
    }

    %active {
        background: var(--interactions-neutral-hover-opacity);

        &[aria-selected='true'] {
            background:
                linear-gradient(var(--interactions-neutral-hover-opacity), var(--interactions-neutral-hover-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }
    }

    li {
        color: var(--foreground-neutral-on-surface);
        padding: 0 var(--padding);
        border-radius: var(--radius-sm);

        &:has([data-icon]) {
            /* smaller padding for icon-only items */
            padding: 0 calc(var(--padding) - var(--spacing-sizing-01));

            &:has([data-label]) {
                padding-right: var(--padding);
            }
        }

        &:not([aria-disabled]) {
            &[aria-selected='true'] {
                background: var(--surface-neutral-t1-base);
                box-shadow:
                    0 0 1px 0 var(--shadow-variant-03),
                    0 1px 1px 0 var(--shadow-variant-05);
            }

            &:hover {
                @extend %active;
            }

            &:active {
                background: var(--interactions-neutral-press-opacity);
            }
        }

        &[aria-disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            cursor: not-allowed;
        }
    }

    &:focus-within {
        li:not([aria-disabled])[data-active] {
            @extend %active;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"h2",1),a(2," SegmentedControl "),t(),e(3,"span",2),o(4,"ui-tag",3),t()(),o(5,"app-markup",4),e(6,"h3"),a(7,"Inputs"),t(),o(8,"app-type-props",5),e(9,"h3"),a(10,"Outputs"),t(),o(11,"app-type-props",5),e(12,"h3"),a(13,"Associated Types"),t(),u(14,S,3,2,null,null,c),e(16,"h3"),a(17,"Examples"),t(),h(18,6),e(19,"h3"),a(20,"Stylesheet"),t(),e(21,"p"),a(22," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(23,"ui-card",7),o(24,"app-syntax",8),t()),i&2&&(n(5),r("source",d.description),n(3),r("props",d.componentInputs),n(3),r("props",d.componentOutputs),n(3),m(d.associatedTypes),n(4),r("ngComponentOutlet",d.exampleComponent),n(6),r("pretty",!0))},dependencies:[b,x,y,C,v,w,f],encapsulation:2})};export{T as SegmentedControlPage};
