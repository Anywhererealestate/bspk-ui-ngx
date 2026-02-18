import{a as T}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as y}from"./chunk-PEIK53MF.js";import{a as w}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as x}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as v}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as b}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as g}from"./chunk-N6IMOQO3.js";import{$a as c,Cb as i,Db as h,Ma as d,Za as m,ab as u,bb as o,cb as e,db as t,eb as r,kb as f,ya as n}from"./chunk-3WAFZL3C.js";function E(l,p){if(l&1&&(e(0,"h4"),i(1),t(),r(2,"app-type-props",5)),l&2){let a=p.$implicit;n(),h(a.name),n(),o("props",a.props)}}var C=class l{componentInputs=[{name:"buttonFormat",description:"The format of the buttons in the footer. Vertical applies only on screen widths less than or equal to 640px.",type:["horizontal","vertical"],required:!1,default:"horizontal"},{name:"callToAction",description:"The call to action button to display in the footer of the modal.",type:"ModalCallToAction",required:!1},{name:"cancelButton",description:`Whether to show the cancel button in the footer.

Providing a string will set the label of the cancel button.`,type:["boolean","string"],required:!1,default:"false"},{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},{name:"description",description:`Modal description. Used for the
[aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
attribute.`,type:"string",required:!0},{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",required:!1,default:"false"},{name:"header",description:"Modal header.",type:"string",required:!0},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"innerRef",description:"",type:"(el: HTMLDivElement | null) => void",required:!1},{name:"open",description:"If the dialog should appear.",type:"boolean",required:!1,default:"false"},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1}];componentOutputs=[{name:"onClose",description:"Emits when modal requests to close.",type:"EventEmitter"}];associatedTypes=[{name:"ModalCallToAction",file:"projects/ui/src/lib/modal/modal.ts",props:[{name:"destructive",type:"boolean",required:!1},{name:"label",type:"string",required:!0},{name:"onClick",type:"function",required:!0}]}];description="Modals display important information that users need to acknowledge. They appear over the interface and block further interactions until an action is selected. Modal is a wrapper around the Dialog component that provides a header and footer for the dialog.";exampleComponent=null;constructor(){import("./chunk-4PVZ4AL4.js").then(p=>this.exampleComponent=p.UIModalExample)}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:25,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='modal'] {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-02);
    padding: var(--spacing-sizing-05);

    @media (width < 640px) {
        padding: var(--spacing-sizing-04);
    }

    > [data-modal-header] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-sizing-04);

        [data-modal-title] {
            font: var(--heading-h5);
            flex: 1;
        }
    }

    [data-modal-main] {
        flex: 1;
        overflow-y: auto;
        max-height: fit-content;
    }

    > [data-modal-footer] {
        display: flex;
        gap: var(--spacing-sizing-04);
    }

    [data-button-format='horizontal'] {
        flex-direction: row-reverse;
        justify-content: flex-start;
    }

    [data-button-format='vertical'] {
        flex-direction: column;

        @media (width >= 640px) {
            flex-direction: row-reverse;
            justify-content: flex-start;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(a,s){a&1&&(e(0,"div",0)(1,"h2",1),i(2," Modal "),t(),e(3,"span",2),r(4,"ui-tag",3),t()(),r(5,"app-markup",4),e(6,"h3"),i(7,"Inputs"),t(),r(8,"app-type-props",5),e(9,"h3"),i(10,"Outputs"),t(),r(11,"app-type-props",5),e(12,"h3"),i(13,"Associated Types"),t(),c(14,E,3,2,null,null,m),e(16,"h3"),i(17,"Examples"),t(),f(18,6),e(19,"h3"),i(20,"Stylesheet"),t(),e(21,"p"),i(22," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(23,"ui-card",7),r(24,"app-syntax",8),t()),a&2&&(n(5),o("source",s.description),n(3),o("props",s.componentInputs),n(3),o("props",s.componentOutputs),n(3),u(s.associatedTypes),n(4),o("ngComponentOutlet",s.exampleComponent),n(6),o("pretty",!0))},dependencies:[b,w,v,x,y,T,g],encapsulation:2})};export{C as ModalPage};
