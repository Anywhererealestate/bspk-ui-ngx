import{a as g}from"./chunk-L5RMOR4L.js";import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as x}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as u}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as d,bb as i,cb as t,db as e,eb as a,kb as m,ya as n}from"./chunk-3WAFZL3C.js";var b=class p{componentInputs=[{name:"inset",description:`The inset (margin) of the divider. The value is a number between 0 and 12, which corresponds to the spacing
sizing variables defined in the theme. The inset is applied to the left and right sides of the divider when the
orientation is horizontal, and to the top and bottom when the orientation is vertical.`,type:["0","1","2","3","4","5","6","7","8","9","10","11","12"],required:!1,default:"0"},{name:"orientation",description:"The orientation of the divider.",type:["horizontal","vertical"],required:!1,default:"horizontal"},{name:"padding",description:"If the divider padding is shown.",type:"boolean",required:!1,default:"true"},{name:"thickness",description:"The thickness of the divider.",type:["heavy","light"],required:!1,default:"light"}];componentOutputs=[];description=`Horizontal thin lines that separates grouped content in a list or other containers with an optional section/group label.

Vertical thin lines that separates grouped content or other visual elements within a container.`;exampleComponent=null;constructor(){import("./chunk-ZEE5QLVV.js").then(s=>this.exampleComponent=s.UIDividerExample)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=d({type:p,selectors:[["app-component-page"]],decls:24,vars:7,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["orientation","horizontal","thickness","light",3,"inset","padding"],["source",`<ui-divider
  [inset]="0"
   orientation="horizontal"
   [padding]="true"
   thickness="light"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='divider'] {
    /*! --inset: is set via inline style */

    display: flex;
    background-color: var(--stroke-neutral-low);
    align-self: stretch;
    place-content: stretch stretch;
    margin: 0;
    padding: 0;
    content: '';

    --length: calc(100% - var(--inset) * 2);

    &,
    &[data-thickness='light'] {
        --line-thickness: 1px;
        --padding: var(--spacing-sizing-02);
    }

    &[data-thickness='heavy'] {
        --line-thickness: 2px;
        --padding: var(--spacing-sizing-04);

        border-radius: var(--radius-full);
    }

    &, /* default */
  &[data-orientation='horizontal'] {
        min-height: var(--line-thickness);
        min-width: var(--length);
        margin: var(--padding) var(--inset);
    }

    &[data-orientation='vertical'] {
        min-width: var(--line-thickness);
        min-height: var(--length);
        margin: var(--inset) var(--padding);
    }

    &[data-hide-padding] {
        --padding: 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"h2",1),r(2," Divider "),e(),t(3,"span",2),a(4,"ui-tag",3),e()(),a(5,"app-markup",4),t(6,"h3"),r(7,"Basic Usage"),e(),t(8,"ui-card",5)(9,"div",6),a(10,"ui-divider",7),e(),a(11,"app-syntax",8),e(),t(12,"h3"),r(13,"Inputs"),e(),a(14,"app-type-props",9),t(15,"h3"),r(16,"Examples"),e(),m(17,10),t(18,"h3"),r(19,"Stylesheet"),e(),t(20,"p"),r(21," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),t(22,"ui-card",5),a(23,"app-syntax",11),e()),o&2&&(n(5),i("source",l.description),n(5),i("inset",0)("padding",!0),n(),i("pretty",!0),n(3),i("props",l.componentInputs),n(3),i("ngComponentOutlet",l.exampleComponent),n(6),i("pretty",!0))},dependencies:[v,x,u,f,g,h,y,c],encapsulation:2})};export{b as DividerPage};
