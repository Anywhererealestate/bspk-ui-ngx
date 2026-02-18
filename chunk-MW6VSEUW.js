import{a as T}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as b}from"./chunk-PEIK53MF.js";import{a as w}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as v}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as y}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f}from"./chunk-N6IMOQO3.js";import{$a as u,Cb as a,Db as h,Ma as p,Za as c,ab as m,bb as r,cb as e,db as n,eb as o,kb as g,ya as t}from"./chunk-3WAFZL3C.js";function z(l,s){if(l&1&&(e(0,"h4"),a(1),n(),o(2,"app-type-props",5)),l&2){let i=s.$implicit;t(),h(i.name),t(),r("props",i.props)}}var k=class l{componentInputs=[{name:"columns",description:"The column definitions of the table.",type:"TableColumn<R>[]",required:!0},{name:"data",description:`The data of the table.

Array<TableRow>`,type:"R[]",required:!0},{name:"pageSize",description:`The number of rows per page.

If the number of rows exceeds the page size, pagination controls will be displayed.`,type:"number",required:!1,default:"10"},{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],required:!1,default:"medium"},{name:"title",description:"The title of the table.",type:"string",required:!1}];componentOutputs=[];associatedTypes=[{name:"TableCellProps",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"row",description:"The row data for the current cell.",type:"R",required:!0},{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],required:!0}]},{name:"TableColumn",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"align",description:"The horizontal alignment of the column. This is used to set the text alignment of the column.",type:["center","left","right"],default:"left",required:!1},{name:"component",description:`A custom component to use for rendering the cell values in the column.

This component will receive the following inputs:

- \`row\`: The current row data.
- \`size\`: The table size.

Use a component that extends \`UITableCell<R>\`.`,type:"Type<UITableCell<R>>",required:!1},{name:"formatter",description:`A formatter function for the cell values in the column.

This function is called for each cell in the column and can be used to customize the display of the cell value.`,type:"TableCellValueFormatter<R>",required:!1},{name:"hideHeader",description:"Whether to hide the header for this column.",type:"boolean",default:"false",required:!1},{name:"key",description:"The key of the column. This is used to access the data in the row.",type:"string",required:!0},{name:"label",description:"The label of the column. This is used to display the column header.",type:"string",required:!0},{name:"sort",description:"The sorting function for the column.\n\nThis can be a custom sorting function or one of the built-in sorting functions:\n\n`string`, `boolean`, `date`, or `number`.\n\nIf unspecified, the column will not be sortable.",type:["BuiltInColumnSorters","TableColumnSortingFn"],required:!1},{name:"valign",description:"The vertical alignment of the column. This is used to set the text alignment of the column.",type:["bottom","center","top"],default:"center",required:!1},{name:"width",description:`The width of the column. This is used to set the width of the column.

Used to set the value of
[grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)`,type:"string",default:"1fr",required:!1}]},{name:"TableExampleData",file:"projects/ui/src/lib/table/example.ts",props:[{name:"columns",type:"TableColumn<R>[]",required:!0},{name:"data",type:"R[]",required:!0}]},{name:"TableRow",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"id",type:"string",required:!0}]}];description="A component that displays data in a tabular format with support for sorting and pagination.";exampleComponent=null;constructor(){import("./chunk-BDJX2ZRY.js").then(s=>this.exampleComponent=s.UITableExample)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=p({type:l,selectors:[["app-component-page"]],decls:22,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='table'] {
    /*! --template-columns: is set via inline style */

    --white-background: var(--surface-neutral-t1-base);
    --grey-background: var(--surface-neutral-t2-lowest);
    --icon-size: var(--spacing-sizing-05);

    display: block;
    min-width: 100%;
    overflow: auto hidden;
    border-collapse: separate;
    text-align: left;
    border-spacing: 2rem 0.125rem;
    color: var(--foreground-neutral-on-surface);
    font: var(--labels-base);
    border-radius: var(--radius-md);
    border: 1px solid var(--stroke-neutral-low);
    background: var(--white-background);

    /* [data-size='medium'] */
    --min-height: var(--spacing-sizing-10);
    --padding-y: var(--spacing-sizing-02);

    &[data-size='x-large'] {
        --min-height: var(--spacing-sizing-14);
        --padding-y: var(--spacing-sizing-04);
    }

    &[data-size='large'] {
        --min-height: var(--spacing-sizing-12);
        --padding-y: var(--spacing-sizing-03);
    }

    &[data-size='small'] {
        --min-height: var(--spacing-sizing-08);
        --padding-y: var(--spacing-sizing-01);
    }

    [data-scroll-container] {
        width: fit-content;
        min-width: 100%;
        border-radius: var(--radius-md);
    }

    table {
        display: grid;
        grid-template-columns: var(--template-columns);
        border-collapse: collapse;
        min-width: 100%;

        tr,
        tbody,
        thead {
            display: contents;
        }

        caption {
            grid-column: 1 / -1;
            background: var(--grey-background);
            border-bottom: 1px solid var(--stroke-neutral-low);
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            font: var(--labels-small);
            min-height: var(--min-height);
            padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
            overflow: hidden;
        }

        th {
            display: flex;
            min-height: var(--min-height);
            overflow: hidden;
            flex-direction: row;
            background: var(--grey-background);
            font: var(--labels-small);
            border-bottom: 1px solid var(--stroke-neutral-base);
            white-space: nowrap;
            z-index: 1;
            position: relative;

            &:not([data-sortable]) {
                padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
                pointer-events: none;
            }

            &[data-sortable] {
                button {
                    display: flex;
                    min-height: var(--min-height);
                    border: none;
                    overflow: hidden;
                    flex-direction: row;
                    padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
                    background: var(--grey-background);
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--spacing-sizing-02);
                    width: 100%;
                    cursor: pointer;
                    font: inherit;
                    outline: none;
                    position: relative;

                    &:hover {
                        background:
                            linear-gradient(
                                var(--interactions-neutral-hover-opacity),
                                var(--interactions-neutral-hover-opacity)
                            ),
                            linear-gradient(var(--grey-background), var(--grey-background));
                    }

                    &:active {
                        background:
                            linear-gradient(
                                var(--interactions-neutral-press-opacity),
                                var(--interactions-neutral-press-opacity)
                            ),
                            linear-gradient(var(--grey-background), var(--grey-background));
                    }

                    [data-sort-icon] {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        svg {
                            width: var(--icon-size);
                        }
                    }

                    &:focus-visible {
                        position: absolute;
                        z-index: var(--z-index-focus);
                        inset: 0;
                        outline: solid 2px var(--stroke-neutral-focus);
                        isolation: isolate;
                    }
                }
            }

            &[data-align='right'] {
                align-items: flex-end;

                button {
                    justify-content: flex-end;
                }
            }

            &[data-align='center'] {
                align-items: center;

                button {
                    justify-content: center;
                }
            }

            &[data-align='left'] {
                align-items: flex-start;

                button {
                    justify-content: space-between;
                }
            }
        }

        td {
            display: flex;
            min-height: var(--min-height);
            overflow: hidden;
            padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
            flex-direction: column;
            font: var(--body-small);

            &[data-align='right'] {
                align-items: flex-end;
            }

            &[data-align='center'] {
                align-items: center;
            }

            &[data-align='left'] {
                align-items: flex-start;
            }

            &[data-valign='top'] {
                justify-content: flex-start;
            }

            &[data-valign='bottom'] {
                justify-content: flex-end;
            }

            &[data-valign='center'] {
                justify-content: center;
            }

            p {
                margin: 0;
                padding: 0;
                font: var(--body-small);
            }

            &[data-action]:hover {
                background:
                    linear-gradient(
                        var(--interactions-neutral-hover-opacity),
                        var(--interactions-neutral-hover-opacity)
                    ),
                    linear-gradient(var(--white-background), var(--white-background));
            }
        }

        tr:nth-child(even) td {
            background: var(--grey-background);

            &[data-action]:hover {
                background:
                    linear-gradient(
                        var(--interactions-neutral-hover-opacity),
                        var(--interactions-neutral-hover-opacity)
                    ),
                    linear-gradient(var(--grey-background), var(--grey-background));
            }
        }
    }

    [data-pagination] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-sizing-03) var(--spacing-sizing-04);
        width: 100%;

        [data-pagination-label] {
            font: var(--body-small);
            min-width: fit-content;
        }

        [data-bspk='pagination'] {
            flex-grow: 0;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"h2",1),a(2," Table "),n(),e(3,"span",2),o(4,"ui-tag",3),n()(),o(5,"app-markup",4),e(6,"h3"),a(7,"Inputs"),n(),o(8,"app-type-props",5),e(9,"h3"),a(10,"Associated Types"),n(),u(11,z,3,2,null,null,c),e(13,"h3"),a(14,"Examples"),n(),g(15,6),e(16,"h3"),a(17,"Stylesheet"),n(),e(18,"p"),a(19," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(20,"ui-card",7),o(21,"app-syntax",8),n()),i&2&&(t(5),r("source",d.description),t(3),r("props",d.componentInputs),t(3),m(d.associatedTypes),t(4),r("ngComponentOutlet",d.exampleComponent),t(6),r("pretty",!0))},dependencies:[y,w,v,x,b,T,f],encapsulation:2})};export{k as TablePage};
