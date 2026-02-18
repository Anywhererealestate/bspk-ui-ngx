import{a as f}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as d}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as g}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as y}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as l,bb as i,cb as e,db as n,eb as p,kb as u,ya as a}from"./chunk-3WAFZL3C.js";var b=class s{componentInputs=[{name:"numPages",description:`The number of pages to display in the pagination component.

If there is only one page, the component will not render.`,type:"number",required:!0,default:"2"},{name:"value",description:"The current page number.",type:"number",required:!0,default:"1"}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The current page number.`,type:"(value: number) => void",required:!0}];description="A navigation component that allows customers to move between a range of listed content within a page into smaller multiple micro pages.";exampleComponent=null;constructor(){import("./chunk-7TW5YHYN.js").then(m=>this.exampleComponent=m.UIPaginationExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=l({type:s,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='pagination'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sizing-01);
    flex: 1;

    [data-input-form] {
        display: contents;

        [data-bspk='input'] {
            max-width: var(--spacing-sizing-12);
            margin-right: var(--spacing-sizing-01);

            input {
                text-align: center;
            }
        }

        span {
            display: block;
            white-space: nowrap;
            font: var(--body-small);
        }
    }

    button[data-bspk-owner='pagination'][data-bspk='button'][data-size='small'] {
        padding: 6px 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Pagination "),n(),e(3,"span",2),p(4,"ui-tag",3),n()(),p(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),p(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),p(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),u(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),p(20,"app-syntax",8),n()),o&2&&(a(5),i("source",r.description),a(3),i("props",r.componentInputs),a(3),i("props",r.componentOutputs),a(3),i("ngComponentOutlet",r.exampleComponent),a(6),i("pretty",!0))},dependencies:[y,v,g,h,d,f,c],encapsulation:2})};export{b as PaginationPage};
