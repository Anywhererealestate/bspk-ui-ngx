import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as b}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as g}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as d,bb as r,cb as e,db as n,eb as i,kb as m,ya as a}from"./chunk-3WAFZL3C.js";var v=class l{componentInputs=[{name:"color",description:"The color variant of the badge.",type:["primary","secondary"],required:!1,default:"primary"},{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",required:!1,default:"1"},{name:"size",description:"The size of the badge.",type:["small","x-small"],required:!1,default:"small"},{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",required:!1,default:"false"}];componentOutputs=[];description="Visual indicator for new items within a parent page represented with a numerical count of new items.";exampleComponent=null;constructor(){import("./chunk-P73X6U7A.js").then(p=>this.exampleComponent=p.UIBadgeExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:18,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='badge'] {
    --size: var(--spacing-sizing-06);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    height: var(--size);
    width: fit-content;
    min-width: var(--size);
    font: var(--labels-x-small);
    padding: 0 var(--spacing-sizing-02);
    background-color: var(--background);
    color: var(--foreground);

    &[data-color='primary'] {
        --foreground: var(--foreground-brand-on-primary);
        --background: var(--foreground-brand-primary);
    }

    &[data-color='secondary'] {
        --foreground: var(--foreground-brand-on-secondary);
        --background: var(--foreground-brand-secondary);
    }

    &[data-size='x-small'] {
        --size: var(--spacing-sizing-05);

        padding: 2px var(--spacing-sizing-01);
    }

    &[data-variant='notification'] {
        --size: 6px;

        padding: 0;
        display: block;
    }

    &[data-surface-border] {
        border: 2px solid var(--surface-neutral-t1-base);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Badge "),n(),e(3,"span",2),i(4,"ui-tag",3),n()(),i(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),i(8,"app-type-props",5),e(9,"h3"),t(10,"Examples"),n(),m(11,6),e(12,"h3"),t(13,"Stylesheet"),n(),e(14,"p"),t(15," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(16,"ui-card",7),i(17,"app-syntax",8),n()),o&2&&(a(5),r("source",s.description),a(3),r("props",s.componentInputs),a(3),r("ngComponentOutlet",s.exampleComponent),a(6),r("pretty",!0))},dependencies:[f,b,g,h,u,y,c],encapsulation:2})};export{v as BadgePage};
