import{a as g}from"./chunk-3T6EYYHK.js";import{a as v}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as b}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as y}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as d}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as l,bb as i,cb as t,db as e,eb as a,kb as c,ya as n}from"./chunk-3WAFZL3C.js";var x=class s{componentInputs=[{name:"contained",description:"If the scrim should be contained within a parent element, or fixed to the viewport.",type:"boolean",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"visible",description:"Whether the Scrim should be visible.",type:"boolean",required:!1,default:"true"}];componentOutputs=[];description="A temporary effect or overlay that can be applied to a user interface to make content less prominent or to draw attention to a modal or sheet.";exampleComponent=null;constructor(){import("./chunk-4GHH3PQW.js").then(p=>this.exampleComponent=p.UIScrimExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=l({type:s,selectors:[["app-component-page"]],decls:24,vars:6,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","magenta","label","Utility"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],[3,"visible"],["source",`<ui-scrim
  [visible]="true"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='scrim'] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-index-scrim);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-scrim);
    animation-name: fade-in;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &[data-contained] {
        position: absolute;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"h2",1),r(2," Scrim "),e(),t(3,"span",2),a(4,"ui-tag",3),e()(),a(5,"app-markup",4),t(6,"h3"),r(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),a(10,"ui-scrim",7),e(),a(11,"app-syntax",8),e(),t(12,"h3"),r(13,"Inputs"),e(),a(14,"app-type-props",9),t(15,"h3"),r(16,"Examples"),e(),c(17,10),t(18,"h3"),r(19,"Stylesheet"),e(),t(20,"p"),r(21," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(22,"ui-card",5),a(23,"app-syntax",11),e()),o&2&&(n(5),i("source",m.description),n(5),i("visible",!0),n(),i("pretty",!0),n(3),i("props",m.componentInputs),n(3),i("ngComponentOutlet",m.exampleComponent),n(6),i("pretty",!0))},dependencies:[y,b,f,h,g,u,v,d],encapsulation:2})};export{x as ScrimPage};
