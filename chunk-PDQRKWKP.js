import{a as E}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as y,b}from"./chunk-VNR4GKET.js";import"./chunk-GWCBBZPT.js";import{a as T}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as k}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as x}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as S}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as v}from"./chunk-N6IMOQO3.js";import{$a as u,Cb as t,Db as f,Ma as d,Za as p,ab as m,bb as a,cb as n,db as e,eb as r,kb as g,ya as i}from"./chunk-3WAFZL3C.js";function I(c,s){if(c&1&&(n(0,"h4"),t(1),e(),r(2,"app-type-props",13)),c&2){let o=s.$implicit;i(),f(o.name),i(),a("props",o.props)}}var C=class c{componentInputs=[{name:"singleOpen",description:"If true only one accordion section can be opened at a time",type:"boolean",required:!1,default:"true"}];componentOutputs=[];associatedTypes=[{name:"AccordionSectionProps",file:"projects/ui/src/lib/accordion/section.ts",props:[{name:"disabled",description:"Indicates whether the accordion is disabled.",type:"boolean",default:"false",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"isOpen",description:`If the accordion is initially open.

This is ignored if the accordion section disabled property is true.`,type:"boolean",default:"false",required:!1},{name:"leading",description:`The leading element to display in the accordion header.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"subtitle",description:"The subtitle of the accordion.",type:"string",required:!1},{name:"title",description:"The title of the accordion.",type:"string",required:!0},{name:"trailing",description:`The trailing element to display in the accordion header.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1}]}];description="A vertical stack of collapsible panels or that allows customers to expand or collapse each panel individually to reveal or hide their content.";exampleComponent=null;constructor(){import("./chunk-WB2I44CS.js").then(s=>this.exampleComponent=s.UIAccordionExample)}static \u0275fac=function(o){return new(o||c)};static \u0275cmp=d({type:c,selectors:[["app-component-page"]],decls:36,vars:6,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],[3,"singleOpen"],["title","Section 1"],["title","Section 2"],["title","Section 3"],["title","Section 4"],["source",`<ui-accordion
  [singleOpen]="true">
    <ui-accordion-section title="Section 1">Section 1 content</ui-accordion-section>
    <ui-accordion-section title="Section 2">Section 2 content</ui-accordion-section>
    <ui-accordion-section title="Section 3">Section 3 content</ui-accordion-section>
    <ui-accordion-section title="Section 4">Section 4 content</ui-accordion-section>
</ui-accordion>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='accordion'] {
    display: block;
    width: 100%;
    padding: var(--spacing-sizing-02);

    &:empty {
        display: none;
    }

    > [data-bspk='accordion-item'] {
        --border-bottom-color: var(--stroke-neutral-base);

        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--foreground-neutral-on-surface);

        &[data-disabled] {
            --border-bottom-color: var(--stroke-neutral-disabled-light);

            background:
                linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
            color: var(--foreground-neutral-disabled-on-surface);
        }

        button[data-header] {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: none;
            color: inherit;
            border: none;
            padding: 0 var(--spacing-sizing-02);
            gap: var(--spacing-sizing-02);
            font: inherit;
            cursor: pointer;
            outline: none;
            min-height: var(--spacing-sizing-12);

            [data-title-subtitle] {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex: 1;

                [data-title] {
                    font: var(--labels-base);
                }

                [data-subtitle] {
                    font: var(--body-x-small);
                    color: var(--foreground-neutral-on-surface-variant-01);
                }
            }

            [data-arrow] {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: var(--spacing-sizing-02);

                svg {
                    width: var(--spacing-sizing-06);
                }
            }

            &:not(:disabled) {
                &:hover {
                    background-image:
                        linear-gradient(
                            var(--interactions-neutral-hover-opacity),
                            var(--interactions-neutral-hover-opacity)
                        ),
                        linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
                }

                &:active {
                    background-image:
                        linear-gradient(
                            var(--interactions-neutral-press-opacity),
                            var(--interactions-neutral-press-opacity)
                        ),
                        linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
                }
            }

            &:disabled {
                cursor: not-allowed;
                color: var(--foreground-neutral-disabled-on-surface);
                border-color: var(--stroke-neutral-disabled-light);
            }
        }

        &:has(:focus-visible) {
            outline: 2px solid var(--stroke-neutral-focus);
            border-color: var(--stroke-neutral-focus);
            margin-bottom: 1px;
        }

        [data-content] {
            padding: var(--spacing-sizing-01) var(--spacing-sizing-02) var(--spacing-sizing-04);
        }
    }

    [data-divider] {
        display: block;
        height: 1px;
        width: calc(100% - var(--spacing-sizing-04));
        margin: -1px var(--spacing-sizing-02) 0;
        background-color: var(--border-bottom-color);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"h2",1),t(2," Accordion "),e(),n(3,"span",2),r(4,"ui-tag",3),e()(),r(5,"app-markup",4),n(6,"h3"),t(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6)(10,"ui-accordion",7)(11,"ui-accordion-section",8),t(12,"Section 1 content"),e(),n(13,"ui-accordion-section",9),t(14,"Section 2 content"),e(),n(15,"ui-accordion-section",10),t(16,"Section 3 content"),e(),n(17,"ui-accordion-section",11),t(18,"Section 4 content"),e()()(),r(19,"app-syntax",12),e(),n(20,"h3"),t(21,"Inputs"),e(),r(22,"app-type-props",13),n(23,"h3"),t(24,"Associated Types"),e(),u(25,I,3,2,null,null,p),n(27,"h3"),t(28,"Examples"),e(),g(29,14),n(30,"h3"),t(31,"Stylesheet"),e(),n(32,"p"),t(33," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(34,"ui-card",5),r(35,"app-syntax",15),e()),o&2&&(i(5),a("source",l.description),i(5),a("singleOpen",!0),i(9),a("pretty",!0),i(3),a("props",l.componentInputs),i(3),m(l.associatedTypes),i(4),a("ngComponentOutlet",l.exampleComponent),i(6),a("pretty",!0))},dependencies:[S,T,x,k,b,y,h,E,v],encapsulation:2})};export{C as AccordionPage};
