import{a as v}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as g}from"./chunk-PEIK53MF.js";import{a as y}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as u}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as f}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as a,Ma as m,bb as i,cb as t,db as e,eb as n,kb as d,ya as r}from"./chunk-3WAFZL3C.js";var x=class s{componentInputs=[{name:"color",description:"The color of the tag.",type:"unknown",required:!1,default:"grey"},{name:"label",description:"The label of the tag.",type:"string",required:!0},{name:"size",description:"The size of the tag.",type:["small","x-small"],required:!1,default:"small"},{name:"variant",description:"The display variant of the tag.",type:["corner-wrap","flat","pill"],required:!1,default:"flat"}];componentOutputs=[];description="A non-interactive visual indicators to draw attention or categorization of a component.";exampleComponent=null;constructor(){import("./chunk-ENXDXH2L.js").then(l=>this.exampleComponent=l.UITagExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["app-component-page"]],decls:24,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["color","grey","label","example","size","small","variant","flat"],["source",`<ui-tag
  color="grey"
   label="example"
   size="small"
   variant="flat"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='tag'] {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 var(--spacing-sizing-03);
    border-radius: var(--radius-sm);
    color: var(--foreground) !important;
    background: var(--background);
    font: unset;
    max-width: 200px;
    flex-shrink: 0;
    flex-grow: 0;
    width: fit-content;

    &[data-variant='pill'] {
        border-radius: var(--radius-full);
    }

    &[data-variant='corner-wrap'] {
        border-bottom-right-radius: 0;
    }

    &[data-size='small'] {
        font: var(--labels-small);
        height: var(--spacing-sizing-08);
    }

    &[data-size='x-small'] {
        font: var(--labels-x-small);
        height: var(--spacing-sizing-06);
    }

    &[data-color='white'] {
        box-shadow: var(--drop-shadow-south);
    }

    [data-triangle] {
        position: absolute;
        bottom: -12px;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px 12px 0 0;
        border-color: var(--foreground) transparent transparent transparent;
        transform: rotate(0deg);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,p){o&1&&(t(0,"div",0)(1,"h2",1),a(2," Tag "),e(),t(3,"span",2),n(4,"ui-tag",3),e()(),n(5,"app-markup",4),t(6,"h3"),a(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),n(10,"ui-tag",7),e(),n(11,"app-syntax",8),e(),t(12,"h3"),a(13,"Inputs"),e(),n(14,"app-type-props",9),t(15,"h3"),a(16,"Examples"),e(),d(17,10),t(18,"h3"),a(19,"Stylesheet"),e(),t(20,"p"),a(21," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(22,"ui-card",5),n(23,"app-syntax",11),e()),o&2&&(r(5),i("source",p.description),r(6),i("pretty",!0),r(3),i("props",p.componentInputs),r(3),i("ngComponentOutlet",p.exampleComponent),r(6),i("pretty",!0))},dependencies:[f,y,u,h,g,v,c],encapsulation:2})};export{x as TagPage};
