import{a as y}from"./chunk-PT7SDE2N.js";import"./chunk-HFPZGCZI.js";import"./chunk-XPWYZDYU.js";import"./chunk-DSDVWFGY.js";import{a as C}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as w}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as T}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as b}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as x}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f}from"./chunk-N6IMOQO3.js";import{$a as m,Cb as a,Db as v,Ma as c,Za as d,ab as u,bb as r,cb as n,db as e,eb as i,kb as g,ya as t}from"./chunk-3WAFZL3C.js";function S(l,s){if(l&1&&(n(0,"h4"),a(1),e(),i(2,"app-type-props",9)),l&2){let o=s.$implicit;t(),v(o.name),t(),r("props",o.props)}}var E=class l{componentInputs=[{name:"body",description:"The body of the banner alert.",type:"string",required:!0},{name:"callToAction",description:"This property may be undefined or an object containing required CallToActionButton properties.",type:"CallToActionButton",required:!1},{name:"elevated",description:"Is the alert elevated. If true a drop shadow is added.",type:"boolean",required:!1,default:"false"},{name:"header",description:"The header of the banner alert.",type:"string",required:!0},{name:"variant",description:"The color variant of the banner alert.",type:["error","informational","success","warning"],required:!1,default:"informational"}];componentOutputs=[{name:"onClose",description:"Function to call when the banner alert is closed.",type:"EventEmitter"}];associatedTypes=[{name:"CallToActionButton",file:"projects/ui/src/lib/banner-alert/banner-alert.ts",props:[{name:"label",description:"The label of the call to action button.",type:"string",required:!0},{name:"onClick",description:"The callback function for the call to action button.",type:"function",required:!0}]}];description="A visual and contextual message used to communicate an important message or notification to users relating to a status or the body content of a page.";exampleComponent=null;constructor(){import("./chunk-GZRYZWLQ.js").then(s=>this.exampleComponent=s.UIBannerAlertExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=c({type:l,selectors:[["app-component-page"]],decls:31,vars:7,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","purple","label","UXReview"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["body","example","header","example","variant","informational",3,"elevated"],["source",`<ui-banner-alert
  body="example"
   [elevated]="false"
   header="example"
   variant="informational"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='banner-alert'] {
    --color: var(--status-information);
    --on-color: var(--status-on-information);

    display: flex;
    flex-direction: row;
    border: 2px solid var(--color);
    border-radius: var(--radius-md);
    background-color: var(--surface-neutral-t1-base);
    width: 100%;

    &[data-variant='error'] {
        --color: var(--status-error);
        --on-color: var(--status-on-error);
    }

    &[data-variant='success'] {
        --color: var(--status-success);
        --on-color: var(--status-on-success);
    }

    &[data-variant='warning'] {
        --color: var(--status-warning);
        --on-color: var(--status-on-warning);
    }

    &[data-elevated] {
        box-shadow: var(--drop-shadow-raise);
    }

    [data-icon-bar] {
        flex: 1;
        padding: var(--spacing-sizing-04) var(--spacing-sizing-03);
        background: var(--color);
        color: var(--on-color);

        svg {
            width: var(--spacing-sizing-06);
            height: var(--spacing-sizing-06);
        }
    }

    [data-content] {
        flex: 100%;
        display: flex;
        flex-direction: column;
        padding: var(--spacing-sizing-02) var(--spacing-sizing-02) var(--spacing-sizing-02) var(--spacing-sizing-04);

        [data-header] {
            display: flex;
            flex-direction: row;
            gap: var(--spacing-sizing-03);
            height: var(--spacing-sizing-12);
            align-items: center;

            span {
                flex: 1;
                display: flex;
                align-items: center;
                color: var(--foreground-neutral-on-surface);
                font: var(--heading-h6);

                @media (any-pointer: coarse) {
                    font: var(--heading-h6);
                }
            }
        }

        [data-body] {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sizing-02);
            padding: 0 var(--spacing-sizing-02) var(--spacing-sizing-02) 0;

            span {
                font: var(--body-base);
            }

            button {
                margin-left: auto;
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,p){o&1&&(n(0,"div",0)(1,"h2",1),a(2," BannerAlert "),e(),n(3,"span",2),i(4,"ui-tag",3),e()(),i(5,"app-markup",4),n(6,"h3"),a(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),i(10,"ui-banner-alert",7),e(),i(11,"app-syntax",8),e(),n(12,"h3"),a(13,"Inputs"),e(),i(14,"app-type-props",9),n(15,"h3"),a(16,"Outputs"),e(),i(17,"app-type-props",9),n(18,"h3"),a(19,"Associated Types"),e(),m(20,S,3,2,null,null,d),n(22,"h3"),a(23,"Examples"),e(),g(24,10),n(25,"h3"),a(26,"Stylesheet"),e(),n(27,"p"),a(28," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(29,"ui-card",5),i(30,"app-syntax",11),e()),o&2&&(t(5),r("source",p.description),t(5),r("elevated",!1),t(),r("pretty",!0),t(3),r("props",p.componentInputs),t(3),r("props",p.componentOutputs),t(3),u(p.associatedTypes),t(4),r("ngComponentOutlet",p.exampleComponent),t(6),r("pretty",!0))},dependencies:[x,w,b,T,y,h,C,f],encapsulation:2})};export{E as BannerAlertPage};
