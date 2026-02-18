import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as c}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as u}from"./chunk-N6IMOQO3.js";import{Cb as n,Ma as m,bb as o,cb as e,db as t,eb as r,kb as d,ya as i}from"./chunk-3WAFZL3C.js";var x=class s{componentInputs=[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"width",description:"The width of the menu.",type:"unknown",required:!1}];componentOutputs=[];description="A container housing a simple list of options presented to the customer to select one option at a time.";exampleComponent=null;constructor(){import("./chunk-NTN4PZID.js").then(l=>this.exampleComponent=l.UIMenuExample)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=m({type:s,selectors:[["app-component-page"]],decls:18,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk-utility='menu'] {
    --overflow-y: hidden;

    width: 332px;
    box-sizing: border-box;
    border: 1px solid var(--stroke-neutral-low);
    background-color: var(--surface-neutral-t1-base);
    box-shadow: var(--drop-shadow-float);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    height: fit-content;
    z-index: var(--z-index-dropdown);
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(a,p){a&1&&(e(0,"div",0)(1,"h2",1),n(2," Menu "),t(),e(3,"span",2),r(4,"ui-tag",3),t()(),r(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),r(8,"app-type-props",5),e(9,"h3"),n(10,"Examples"),t(),d(11,6),e(12,"h3"),n(13,"Stylesheet"),t(),e(14,"p"),n(15," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(16,"ui-card",7),r(17,"app-syntax",8),t()),a&2&&(i(5),o("source",p.description),i(3),o("props",p.componentInputs),i(3),o("ngComponentOutlet",p.exampleComponent),i(6),o("pretty",!0))},dependencies:[g,y,h,f,c,b,u],encapsulation:2})};export{x as MenuPage};
