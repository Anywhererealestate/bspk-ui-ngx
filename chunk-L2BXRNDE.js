import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as v}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as h}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as d,bb as r,cb as e,db as n,eb as i,kb as c,ya as a}from"./chunk-3WAFZL3C.js";var b=class s{componentInputs=[{name:"focusTrap",description:`When true, keyboard focus is trapped within the calendar component on initial render.

Only applicable if the Calendar is used in a popover like in DatePicker.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the calendar component.",type:"string",required:!1},{name:"value",description:"The currently selected date",type:["Date","undefined"],required:!0}];componentOutputs=[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date`,type:"(value: Date | undefined) => void",required:!0}];description="Allows customers to select the date, month, and year.";exampleComponent=null;constructor(){import("./chunk-F6JCJ6HJ.js").then(p=>this.exampleComponent=p.UICalendarExample)}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=d({type:s,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='calendar'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font: var(--labels-base);
    width: 360px;
    color: var(--foreground-neutral-on-surface);
    gap: var(--spacing-sizing-01);
    background: var(--surface-neutral-t1-base);
    border-radius: var(--radius-lg);
    padding: var(--spacing-sizing-02);

    [data-header] {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        border-bottom: 1px solid var(--stroke-neutral-low);

        [data-title] {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            [data-bspk='button'] {
                font: inherit;

                &[data-month],
                &[data-year] {
                    padding: 0;
                    min-width: var(--spacing-sizing-12);
                }
            }
        }

        [data-bspk='button'] {
            border-radius: var(--radius-sm);
        }
    }

    table {
        display: flex;
        flex-direction: column;

        tr {
            display: contents;
        }

        td,
        th {
            height: var(--spacing-sizing-12);
            line-height: var(--spacing-sizing-12);
            text-align: center;
            border-radius: var(--radius-sm);
            font-weight: inherit;
        }

        thead {
            display: grid;
            grid-template-columns: repeat(7, calc(100% / 7));
            text-align: center;

            th {
                color: var(--foreground-neutral-on-surface-variant-01);
            }
        }

        tbody {
            display: grid;
            grid-template-columns: repeat(7, calc(100% / 7));

            [data-non-month-day] {
                color: var(--foreground-neutral-on-surface-variant-02);
            }

            td {
                &:hover,
                &:focus-visible {
                    cursor: pointer;
                    outline: 2px solid var(--stroke-neutral-focus);
                    outline-offset: -2px;
                }

                &[data-selected] {
                    background: var(--surface-brand-primary);
                    color: var(--foreground-brand-on-primary);
                    outline-offset: 2px;
                }
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Calendar "),n(),e(3,"span",2),i(4,"ui-tag",3),n()(),i(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),i(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),i(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),c(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),i(20,"app-syntax",8),n()),o&2&&(a(5),r("source",l.description),a(3),r("props",l.componentInputs),a(3),r("props",l.componentOutputs),a(3),r("ngComponentOutlet",l.exampleComponent),a(6),r("pretty",!0))},dependencies:[g,v,f,h,u,y,m],encapsulation:2})};export{b as CalendarPage};
