import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as y}from"./chunk-PEIK53MF.js";import{a as w}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as I}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as v}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as C}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as g}from"./chunk-N6IMOQO3.js";import{$a as d,Cb as n,Db as f,Ma as c,Za as m,ab as u,bb as o,cb as e,db as t,eb as a,kb as h,ya as i}from"./chunk-3WAFZL3C.js";function T(r,l){if(r&1&&(e(0,"h4"),n(1),t(),a(2,"app-type-props",5)),r&2){let p=l.$implicit;i(),f(p.name),i(),o("props",p.props)}}var x=class r{componentInputs=[{name:"items",description:"Only Chip components should be used as items.",type:"ChipGroupItemProps[]",required:!0},{name:"overflow",description:"Controls the overflow behavior of the chip group. If set to `scroll`, the chip group will be scrollable\nhorizontally. If set to `wrap`, the chip group will wrap to multiple lines as needed.",type:["scroll","wrap"],required:!1,default:"wrap"}];componentOutputs=[];associatedTypes=[{name:"ChipGroupItemProps",file:"projects/ui/src/lib/chip-group/chip-group.ts",props:[{name:"click",description:"Optional click handler for the chip item.",type:"function",required:!1},{name:"disabled",description:"Is the chip disabled.",type:"boolean",default:"false",required:!1},{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",default:"false",required:!1},{name:"label",description:"The label of the chip.",type:"string",required:!0},{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",default:"false",required:!1},{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}]}];description="A component that manages the layout of a group of chips.";exampleComponent=null;constructor(){import("./chunk-3BF3XXUY.js").then(l=>this.exampleComponent=l.UIChipGroupExample)}static \u0275fac=function(p){return new(p||r)};static \u0275cmp=c({type:r,selectors:[["app-component-page"]],decls:22,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='chip-group'] {
    display: flex;
    gap: var(--spacing-sizing-02);
    width: 100%;
    flex-flow: row wrap;
    padding-bottom: var(--spacing-sizing-01);

    &:empty {
        display: none;
    }

    &[data-scroll] {
        overflow: auto;
        flex-wrap: nowrap;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(p,s){p&1&&(e(0,"div",0)(1,"h2",1),n(2," ChipGroup "),t(),e(3,"span",2),a(4,"ui-tag",3),t()(),a(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),a(8,"app-type-props",5),e(9,"h3"),n(10,"Associated Types"),t(),d(11,T,3,2,null,null,m),e(13,"h3"),n(14,"Examples"),t(),h(15,6),e(16,"h3"),n(17,"Stylesheet"),t(),e(18,"p"),n(19," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(20,"ui-card",7),a(21,"app-syntax",8),t()),p&2&&(i(5),o("source",s.description),i(3),o("props",s.componentInputs),i(3),u(s.associatedTypes),i(4),o("ngComponentOutlet",s.exampleComponent),i(6),o("pretty",!0))},dependencies:[C,w,v,I,y,b,g],encapsulation:2})};export{x as ChipGroupPage};
