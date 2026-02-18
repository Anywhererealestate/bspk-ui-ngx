import{a as v}from"./chunk-VBC2SZHE.js";import"./chunk-TRWDX5RD.js";import{a as C}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as y}from"./chunk-PEIK53MF.js";import{a as k}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as I}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as b}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as x}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as g}from"./chunk-N6IMOQO3.js";import{$a as m,Cb as a,Db as f,Ma as d,Za as c,ab as u,bb as i,cb as t,db as e,eb as r,kb as h,ya as n}from"./chunk-3WAFZL3C.js";function T(l,s){if(l&1&&(t(0,"h4"),a(1),e(),r(2,"app-type-props",9)),l&2){let o=s.$implicit;n(),f(o.name),n(),i("props",o.props)}}var w=class l{componentInputs=[{name:"disabled",description:"Is the chip disabled.",type:"boolean",required:!1,default:"false"},{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the chip.",type:"string",required:!0},{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",required:!1,default:"false"},{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}];componentOutputs=[{name:"onClick",description:"The function to call when the chip is clicked.",type:"EventEmitter"}];associatedTypes=[{name:"BadgeItem",file:"projects/ui/src/lib/chip/chip.ts",props:[{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",default:"1",required:!1},{name:"size",description:"The size of the badge.",type:["small","x-small"],default:"small",required:!1},{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",default:"false",required:!1}]}];description="Dynamically generated options that are suggested to the user as responses or prompts.";exampleComponent=null;constructor(){import("./chunk-OHSEOBNO.js").then(s=>this.exampleComponent=s.UIChipExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:31,vars:9,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example",3,"disabled","flat","selected"],["source",`<ui-chip
  [disabled]="false"
   [flat]="false"
   label="example"
   [selected]="false"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='chip'] {
    flex-direction: row;
    gap: var(--spacing-sizing-02);
    height: var(--spacing-sizing-08);
    text-wrap: nowrap;
    font: var(--labels-small);
    color: var(--foreground-neutral-on-surface-variant-01);
    background-color: var(--surface-neutral-t1-base);
    border: 1px solid var(--stroke-neutral-low);
    border-radius: var(--radius-sm);
    padding: 0 var(--spacing-sizing-03);

    [data-touch-target] {
        min-width: var(--spacing-sizing-12);
        min-height: var(--spacing-sizing-12);
    }

    &:not([data-flat]) {
        box-shadow: var(--drop-shadow-raise);
    }

    &[data-variant='filter'] {
        cursor: pointer;
    }

    &[data-disabled] {
        color: var(--foreground-neutral-disabled-on-surface);
        cursor: not-allowed;
        border-color: var(--stroke-neutral-disabled-light);
        background-color: var(--interactions-disabled-opacity);
    }

    &:not([data-disabled]) {
        &:hover {
            background-color: var(--interactions-neutral-hover-opacity);
        }

        &:active {
            background-color: var(--interactions-neutral-press-opacity);
        }

        &:focus {
            outline: 1px solid var(--stroke-neutral-focus);
            border-color: var(--stroke-neutral-focus);
        }
    }

    &[data-selected] {
        background-color: var(--surface-brand-primary-highlight);
        border-color: var(--stroke-brand-primary);
    }

    [data-chip-icon] {
        display: flex;
        align-items: center;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,p){o&1&&(t(0,"div",0)(1,"h2",1),a(2," Chip "),e(),t(3,"span",2),r(4,"ui-tag",3),e()(),r(5,"app-markup",4),t(6,"h3"),a(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),r(10,"ui-chip",7),e(),r(11,"app-syntax",8),e(),t(12,"h3"),a(13,"Inputs"),e(),r(14,"app-type-props",9),t(15,"h3"),a(16,"Outputs"),e(),r(17,"app-type-props",9),t(18,"h3"),a(19,"Associated Types"),e(),m(20,T,3,2,null,null,c),t(22,"h3"),a(23,"Examples"),e(),h(24,10),t(25,"h3"),a(26,"Stylesheet"),e(),t(27,"p"),a(28," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(29,"ui-card",5),r(30,"app-syntax",11),e()),o&2&&(n(5),i("source",p.description),n(5),i("disabled",!1)("flat",!1)("selected",!1),n(),i("pretty",!0),n(3),i("props",p.componentInputs),n(3),i("props",p.componentOutputs),n(3),u(p.associatedTypes),n(4),i("ngComponentOutlet",p.exampleComponent),n(6),i("pretty",!0))},dependencies:[x,k,b,I,v,y,C,g],encapsulation:2})};export{w as ChipPage};
