import{a as h}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as v}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as n,Ma as m,bb as r,cb as e,db as t,eb as i,kb as d,ya as a}from"./chunk-3WAFZL3C.js";var x=class s{componentInputs=[{name:"variant",description:"Determines how the card border will appear.",type:["elevated","outlined"],required:!1,default:"elevated"}];componentOutputs=[];description=`Cards are often rectangular and contain various content, such as text, images, icons, multimedia, and interactive elements.

They are similar in size and shape to playing cards and are intended to encourage users to click or tap to view more details.`;exampleComponent=null;constructor(){import("./chunk-X6XO56YW.js").then(p=>this.exampleComponent=p.UICardExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["app-component-page"]],decls:18,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='card'] {
    display: block;
    background: var(--surface-neutral-t1-base);
    border-radius: var(--radius-md);
    overflow: hidden;

    &[data-variant='outlined'] {
        border: solid 1px var(--stroke-neutral-low);
    }

    &[data-variant='elevated'] {
        box-shadow:
            0 1px 2px 0 var(--shadow-32),
            0 1px 3px 1px var(--shadow-15);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"h2",1),n(2," Card "),t(),e(3,"span",2),i(4,"ui-tag",3),t()(),i(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),i(8,"app-type-props",5),e(9,"h3"),n(10,"Examples"),t(),d(11,6),e(12,"h3"),n(13,"Stylesheet"),t(),e(14,"p"),n(15," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(16,"ui-card",7),i(17,"app-syntax",8),t()),o&2&&(a(5),r("source",l.description),a(3),r("props",l.componentInputs),a(3),r("ngComponentOutlet",l.exampleComponent),a(6),r("pretty",!0))},dependencies:[g,y,v,f,u,h,c],encapsulation:2})};export{x as CardPage};
