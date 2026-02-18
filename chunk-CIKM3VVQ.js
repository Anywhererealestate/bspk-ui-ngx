import{a as h}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as b}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as g}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as f}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as v}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as m}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as d,bb as i,cb as e,db as n,eb as r,kb as c,ya as a}from"./chunk-3WAFZL3C.js";var y=class l{componentInputs=[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"container",description:"The container to render the button in.",type:["local","page"],required:!1,default:"local"},{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the button.",type:"string",required:!1},{name:"placement",description:"The placement of the button on the container.",type:["bottom-left","bottom-right","top-left","top-right"],required:!1,default:"bottom-right"},{name:"size",description:"The size of the button.",type:["medium","x-large"],required:!1,default:"medium"},{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},{name:"variant",description:"The style variant of the button.",type:["neutral","primary","secondary"],required:!1,default:"primary"}];componentOutputs=[{name:"onBlur",description:"Event emitted when the button loses focus.",type:"EventEmitter"},{name:"onClick",description:"Event emitted when the button is clicked.",type:"EventEmitter"},{name:"onFocus",description:"Event emitted when the button receives focus.",type:"EventEmitter"},{name:"onMouseEnter",description:"Event emitted when mouse enters the button.",type:"EventEmitter"},{name:"onMouseLeave",description:"Event emitted when mouse leaves the button.",type:"EventEmitter"}];description="A button that highlights a primary action that is elevated above the body content of a page; normally fixed to the bottom right of a screen.";exampleComponent=null;constructor(){import("./chunk-3Z3HWW3C.js").then(p=>this.exampleComponent=p.UIFabExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='fab'] {
    --placement-offset: var(--spacing-sizing-04);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sizing-02);
    border: none;
    cursor: pointer;
    text-decoration: none;
    z-index: var(--z-index-fab);
    box-shadow: var(--drop-shadow-float);
    border-radius: var(--radius-sm);

    &[data-container='page'] {
        position: fixed;
    }

    &[data-container='local'] {
        position: absolute;
    }

    &[data-placement='top-right'] {
        top: var(--placement-offset);
        right: var(--placement-offset);
    }

    &[data-placement='bottom-right'] {
        bottom: var(--placement-offset);
        right: var(--placement-offset);
    }

    &[data-placement='top-left'] {
        top: var(--placement-offset);
        left: var(--placement-offset);
    }

    &[data-placement='bottom-left'] {
        bottom: var(--placement-offset);
        left: var(--placement-offset);
    }

    > [data-fab-icon] {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > [data-fab-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &[data-size='medium'] {
        font: var(--labels-base);
        height: var(--spacing-sizing-10);
        padding: 0 var(--spacing-sizing-04);

        > [data-fab-icon] {
            width: var(--spacing-sizing-05);
        }
    }

    &[data-size='x-large'] {
        font: var(--labels-large);
        height: var(--spacing-sizing-14);
        padding: 0 var(--spacing-sizing-07);

        > [data-fab-icon] {
            width: var(--spacing-sizing-06);
        }
    }

    &[data-variant='primary'] {
        --variant-background: var(--surface-brand-primary);
        --variant-foreground: var(--foreground-brand-on-primary);
    }

    &[data-variant='secondary'] {
        --variant-background: var(--surface-brand-secondary);
        --variant-foreground: var(--foreground-brand-on-secondary);
    }

    &[data-variant='neutral'] {
        --variant-background: var(--surface-neutral-t1-base);
        --variant-foreground: var(--foreground-neutral-on-surface-variant-01);
    }

    background: var(--variant-background);
    color: var(--variant-foreground);

    --variant-gradient: linear-gradient(var(--variant-background), var(--variant-background));

    [data-pseudo='hover'] > &,
    &:hover {
        background:
            linear-gradient(var(--interactions-brand-hover-opacity), var(--interactions-brand-hover-opacity)),
            var(--variant-gradient);
    }

    [data-pseudo='active'] > &,
    &:active {
        background:
            linear-gradient(var(--interactions-brand-press-opacity), var(--interactions-brand-press-opacity)),
            var(--variant-gradient);
    }

    [data-pseudo='focus'] > &,
    &:focus-visible {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
    }

    &[data-round] {
        border-radius: var(--radius-full);
        aspect-ratio: 1/1;
        padding: 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Fab "),n(),e(3,"span",2),r(4,"ui-tag",3),n()(),r(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),r(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),r(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),c(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),r(20,"app-syntax",8),n()),o&2&&(a(5),i("source",s.description),a(3),i("props",s.componentInputs),a(3),i("props",s.componentOutputs),a(3),i("ngComponentOutlet",s.exampleComponent),a(6),i("pretty",!0))},dependencies:[v,b,f,g,u,h,m],encapsulation:2})};export{y as FabPage};
