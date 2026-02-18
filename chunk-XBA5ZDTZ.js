import{a as w}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as y}from"./chunk-PEIK53MF.js";import{a as T}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as g}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as b}from"./chunk-N6IMOQO3.js";import{$a as c,Cb as n,Db as f,Ma as d,Za as m,ab as u,bb as r,cb as e,db as t,eb as o,kb as h,ya as i}from"./chunk-3WAFZL3C.js";function q(s,l){if(s&1&&(e(0,"h4"),n(1),t(),o(2,"app-type-props",5)),s&2){let a=l.$implicit;i(),f(a.name),i(),r("props",a.props)}}var I=class s{componentInputs=[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"items",description:`The array of breadcrumb items.

If **less than 2** items are provided, the component will not render.`,type:"BreadcrumbItem[]",required:!0},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"variant",description:`Change the color of the link to a subtle color. This is useful for links that are not primary actions, for
example footer menus.`,type:["default","subtle-inverse","subtle"],required:!1,default:"default"}];componentOutputs=[];associatedTypes=[{name:"BreadcrumbItem",file:"projects/ui/src/lib/breadcrumb/utils.ts",props:[{name:"href",description:"The href of the breadcrumb item.",type:"string",required:!0},{name:"label",description:"The label of the breadcrumb item.",type:"string",required:!0},{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",default:"false",required:!1},{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},{name:"as",description:"The element type to render as.",type:["a","button","div","label"],default:"div",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"fill",required:!1}]}];description="Used to indicate the current page's location within a navigational hierarchy.";exampleComponent=null;constructor(){import("./chunk-ORXF4NQH.js").then(l=>this.exampleComponent=l.UIBreadcrumbExample)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=d({type:s,selectors:[["app-component-page"]],decls:22,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='breadcrumb'] {
    width: 100%;

    ol {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        list-style: none;
        gap: var(--spacing-sizing-02);

        li {
            display: flex;
            gap: var(--spacing-sizing-02);
        }
    }
}
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(a,p){a&1&&(e(0,"div",0)(1,"h2",1),n(2," Breadcrumb "),t(),e(3,"span",2),o(4,"ui-tag",3),t()(),o(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),o(8,"app-type-props",5),e(9,"h3"),n(10,"Associated Types"),t(),c(11,q,3,2,null,null,m),e(13,"h3"),n(14,"Examples"),t(),h(15,6),e(16,"h3"),n(17,"Stylesheet"),t(),e(18,"p"),n(19," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(20,"ui-card",7),o(21,"app-syntax",8),t()),a&2&&(i(5),r("source",p.description),i(3),r("props",p.componentInputs),i(3),u(p.associatedTypes),i(4),r("ngComponentOutlet",p.exampleComponent),i(6),r("pretty",!0))},dependencies:[v,T,g,x,y,w,b],encapsulation:2})};export{I as BreadcrumbPage};
