import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as h}from"./chunk-PEIK53MF.js";import{a as b}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as u}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as g}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as p,bb as i,cb as e,db as n,eb as o,kb as m,ya as a}from"./chunk-3WAFZL3C.js";var v=class d{componentInputs=[{name:"ariaDescription",description:"The aria-description attribute for the element.",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"open",description:"If the dialog should appear.",type:"boolean",required:!1,default:"false"},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placement",description:"The placement of the dialog on the screen.",type:["bottom","center","left","right","top"],required:!1,default:"center"},{name:"showScrim",description:"Whether the dialog should have a scrim behind it.",type:"boolean",required:!1,default:"true"},{name:"widthFull",description:"If the dialog should take the full width of the screen.",type:"boolean",required:!1,default:"false"}];componentOutputs=[{name:"onClose",description:`Emits when the dialog should be closed, such as when the scrim is clicked or the escape key is pressed. The
parent component should handle this event and set <code>open</code> to false to close the dialog.`,type:"EventEmitter"}];description=`Dialogs display important information that users need to acknowledge. They appear over the interface and may block further interactions until an action is selected.

The Modal component is a higher-level component built on top of Dialog that includes standard dialog UI and behavior.

Also known as: Tray, Drawer, Flyout, Sheet`;exampleComponent=null;constructor(){import("./chunk-N4QNBPSU.js").then(l=>this.exampleComponent=l.UIDialogExample)}static \u0275fac=function(r){return new(r||d)};static \u0275cmp=p({type:d,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='dialog'] {
    position: fixed;
    inset: 0;
    z-index: var(--z-index-dialog);
    display: flex;
    pointer-events: none; /* makes scrim clickable */

    --height: 100vh;
    --width: 100vw;

    [data-dialog-box] {
        pointer-events: all; /* allow pointer events on the dialog box */
        text-align: start;
        position: absolute;
        box-shadow: var(--drop-shadow-float);
        background: var(--surface-neutral-t1-base);
        color: var(--foreground-neutral-on-surface);
        max-height: calc(var(--height) - var(--spacing-sizing-24));
        z-index: 2;
        width: calc(100% - var(--spacing-sizing-08));
        animation-name: var(--box-animation-name);
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 0;

        > :first-of-type {
            margin-top: 0;
        }

        > :last-child {
            margin-bottom: 0;
        }

        /* we make the width responsive to the viewport */
        @media (width >= 640px) {
            width: 90%;
        }

        @media (width >= 768px) {
            width: 80%;
        }

        @media (width >= 1024px) {
            width: 60%;
        }

        @media (width >= 1280px) {
            width: 50%;
        }
    }

    &[data-placement='center'] {
        --box-animation-name: fade-in;

        justify-content: center;
        align-items: center;

        [data-dialog-box] {
            border-radius: var(--radius-lg);
        }
    }

    &[data-placement='bottom'] {
        --box-animation-name: placement-bottom;

        justify-content: center;
        align-items: end;

        [data-dialog-box] {
            border-top-left-radius: var(--radius-lg);
            border-top-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='top'] {
        --box-animation-name: placement-top;

        justify-content: center;
        align-items: start;

        [data-dialog-box] {
            border-bottom-left-radius: var(--radius-lg);
            border-bottom-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='left'] {
        --box-animation-name: placement-left;

        justify-content: flex-start;

        [data-dialog-box] {
            max-height: unset;
            width: 280px;
            height: var(--height);
            border-bottom-right-radius: var(--radius-lg);
            border-top-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='right'] {
        --box-animation-name: placement-right;

        justify-content: flex-end;

        [data-dialog-box] {
            max-height: unset;
            width: 280px;
            height: var(--height);
            border-bottom-left-radius: var(--radius-lg);
            border-top-left-radius: var(--radius-lg);
        }
    }

    [data-width-full='true'] {
        width: 100%;
    }

    &[data-contained] {
        position: absolute;

        --height: 100%;
        --width: 100%;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translate(var(--spacing-sizing-01), var(--spacing-sizing-01));
        }

        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }

    @keyframes placement-left {
        0% {
            opacity: 0;
        }

        1% {
            transform: translateX(calc(-1 * var(--width, 100vw)));
            opacity: 1;
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes placement-right {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateX(var(--width, 100vw));
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes placement-top {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateY(calc(-1 * var(--height, 100vh)));
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes placement-bottom {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateY(var(--height, 100vh));
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(r,s){r&1&&(e(0,"div",0)(1,"h2",1),t(2," Dialog "),n(),e(3,"span",2),o(4,"ui-tag",3),n()(),o(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),o(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),o(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),m(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),o(20,"app-syntax",8),n()),r&2&&(a(5),i("source",s.description),a(3),i("props",s.componentInputs),a(3),i("props",s.componentOutputs),a(3),i("ngComponentOutlet",s.exampleComponent),a(6),i("pretty",!0))},dependencies:[g,b,u,f,h,y,c],encapsulation:2})};export{v as DialogPage};
