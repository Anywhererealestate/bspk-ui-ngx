import{a as f}from"./chunk-4UWRZSBU.js";import"./chunk-HFPZGCZI.js";import{a as h}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as x}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as y}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as g}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as d}from"./chunk-N6IMOQO3.js";import{Cb as a,Ma as m,bb as r,cb as n,db as e,eb as t,kb as c,ya as i}from"./chunk-3WAFZL3C.js";var b=class p{componentInputs=[{name:"id",description:"The id of the inline alert.",type:"string",required:!1},{name:"label",description:"The content of the inline alert.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"variant",description:"The color variant of the inline alert.",type:["error","informational","success","warning"],required:!1,default:"informational"}];componentOutputs=[];description="Inline alerts provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages.";exampleComponent=null;constructor(){import("./chunk-DHG52KU2.js").then(s=>this.exampleComponent=s.UIInlineAlertExample)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=m({type:p,selectors:[["app-component-page"]],decls:24,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["label","example","variant","informational"],["source",`<ui-inline-alert
  label="example"
   variant="informational"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='inline-alert'] {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: row;
    gap: var(--spacing-sizing-02);

    [data-txt] {
        flex: 1;
    }

    &[data-variant='error'] {
        color: var(--status-error);

        --first-tone: var(--status-error);
        --second-tone: var(--status-on-information);
    }

    &[data-variant='success'] {
        color: var(--status-success);

        --first-tone: var(--status-success);
        --second-tone: var(--status-on-success);
    }

    &[data-variant='warning'] {
        color: var(--foreground-neutral-on-surface);

        --first-tone: var(--status-warning);
        --second-tone: var(--status-on-warning);
    }

    &[data-variant='informational'] {
        color: var(--status-information);

        --first-tone: var(--status-information);
        --second-tone: var(--status-on-information);
    }

    svg {
        color: var(--first-tone);
        width: var(--spacing-sizing-05);
        height: var(--spacing-sizing-05);
        flex: 0 0 auto;

        [data-second-tone] {
            fill: var(--second-tone);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"h2",1),a(2," InlineAlert "),e(),n(3,"span",2),t(4,"ui-tag",3),e()(),t(5,"app-markup",4),n(6,"h3"),a(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),t(10,"ui-inline-alert",7),e(),t(11,"app-syntax",8),e(),n(12,"h3"),a(13,"Inputs"),e(),t(14,"app-type-props",9),n(15,"h3"),a(16,"Examples"),e(),c(17,10),n(18,"h3"),a(19,"Stylesheet"),e(),n(20,"p"),a(21," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(22,"ui-card",5),t(23,"app-syntax",11),e()),o&2&&(i(5),r("source",l.description),i(6),r("pretty",!0),i(3),r("props",l.componentInputs),i(3),r("ngComponentOutlet",l.exampleComponent),i(6),r("pretty",!0))},dependencies:[v,x,g,y,f,u,h,d],encapsulation:2})};export{b as InlineAlertPage};
