import{a as b}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as g}from"./chunk-PEIK53MF.js";import{a as f}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as v}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as h}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as m}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as t,Ma as p,bb as i,cb as e,db as n,eb as r,kb as u,ya as a}from"./chunk-3WAFZL3C.js";var y=class l{componentInputs=[{name:"ariaControls",description:"The aria-controls attribute of the element for accessibility purposes.",type:["string","null"],required:!1,default:"null"},{name:"ariaExpanded",description:"The aria-expanded attribute of the element for accessibility purposes.",type:["boolean","null"],required:!1,default:"null"},{name:"ariaHaspopup",description:"The aria-haspopup attribute of the element for accessibility purposes.",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"class",description:"Additional CSS classes to apply.",type:"string",required:!1},{name:"destructive",description:"The function of the button is destructive.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the button.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"size",description:"The size of the button.",type:["large","medium","small","x-small"],required:!1,default:"medium"},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},{name:"type",description:"The type of the button element.",type:["button","reset","submit"],required:!1,default:"button"},{name:"variant",description:"The color variant of the button.",type:["primary","secondary","tertiary"],required:!1,default:"primary"},{name:"width",description:`Determines how the button uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}];componentOutputs=[{name:"onBlur",description:"Event emitted when the button loses focus.",type:"EventEmitter"},{name:"onClick",description:"Event emitted when the button is clicked.",type:"EventEmitter"},{name:"onFocus",description:"Event emitted when the button receives focus.",type:"EventEmitter"},{name:"onMouseEnter",description:"Event emitted when mouse enters the button.",type:"EventEmitter"},{name:"onMouseLeave",description:"Event emitted when mouse leaves the button.",type:"EventEmitter"}];description="A clickable component that allows users to perform an action, make a choice or trigger a change in state.";exampleComponent=null;constructor(){import("./chunk-GF6AOOLZ.js").then(d=>this.exampleComponent=d.UIButtonExample)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=p({type:l,selectors:[["app-component-page"]],decls:21,vars:5,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='button'] {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sizing-02);
    border: none;
    cursor: pointer;
    background: transparent;
    text-decoration: none;
    width: fit-content;
    font-family: var(--typeface);

    [data-touch-target] {
        min-width: var(--spacing-sizing-12);
        min-height: var(--spacing-sizing-12);
    }

    &[data-width='hug'] {
        width: fit-content;
    }

    &[data-width='fill'] {
        width: 100%;
    }

    &[data-size='x-small'] {
        font-size: var(--typography-size-xs);
        line-height: var(--typography-line-height-lh-1);
        height: var(--spacing-sizing-06);
        min-width: var(--spacing-sizing-06);
        gap: var(--spacing-sizing-02);

        &:has([data-button-label]),
        &[data-override] {
            padding: 0 var(--spacing-sizing-02);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-04);
            height: var(--spacing-sizing-04);
        }
    }

    &[data-size='small'] {
        font-size: var(--typography-size-sm);
        line-height: var(--typography-line-height-lh-2);
        height: var(--spacing-sizing-08);
        min-width: var(--spacing-sizing-08);

        &:has([data-button-label]),
        &[data-override] {
            padding: 6px var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-05);
            height: var(--spacing-sizing-05);
        }
    }

    &[data-size='medium'] {
        font-size: var(--typography-size-base);
        line-height: var(--typography-line-height-lh-2);
        height: var(--spacing-sizing-10);
        min-width: var(--spacing-sizing-10);

        &:has([data-button-label]),
        &[data-override] {
            padding: var(--spacing-sizing-02) var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-05);
            height: var(--spacing-sizing-05);
        }
    }

    &[data-size='large'] {
        font-size: var(--typography-size-bp-md);
        line-height: var(--typography-line-height-lh-4);
        height: var(--spacing-sizing-12);
        min-width: var(--spacing-sizing-12);

        &:has([data-button-label]),
        &[data-override] {
            padding: var(--spacing-sizing-03) var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-06);
            height: var(--spacing-sizing-06);
        }
    }

    &[disabled] {
        cursor: not-allowed;
    }

    [data-button-icon] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    [data-button-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &[data-variant='primary'] {
        --primary-background: var(--surface-brand-primary);

        background-color: var(--primary-background);
        color: var(--foreground-brand-on-primary);
        border-radius: var(--button-border-radius);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            background: var(--interactions-disabled-opacity);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background:
                    linear-gradient(var(--interactions-brand-hover-opacity), var(--interactions-brand-hover-opacity)),
                    linear-gradient(var(--primary-background), var(--primary-background));
            }

            [data-pseudo='active'] > &,
            &:active {
                background:
                    linear-gradient(var(--interactions-brand-press-opacity), var(--interactions-brand-press-opacity)),
                    linear-gradient(var(--primary-background), var(--primary-background));
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                --primary-background: var(--status-error);

                color: var(--foreground-brand-on-primary);
            }
        }
    }

    &[data-variant='secondary'] {
        border: solid var(--button-border-width) var(--stroke-neutral-base);
        border-radius: var(--button-border-radius);
        color: var(--foreground-neutral-on-surface-variant-01);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            border: solid var(--button-border-width) var(--stroke-neutral-disabled-light);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] > &,
            &:active {
                background-color: var(--interactions-neutral-press-opacity);
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                background: transparent;
                color: var(--status-error);
                border: solid var(--button-border-width) var(--status-error);
            }
        }
    }

    &[data-variant='tertiary'] {
        background: transparent;
        color: var(--foreground-neutral-on-surface-variant-01);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] > &,
            &:active {
                background: var(--interactions-neutral-press-opacity);
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                color: var(--status-error);
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"h2",1),t(2," Button "),n(),e(3,"span",2),r(4,"ui-tag",3),n()(),r(5,"app-markup",4),e(6,"h3"),t(7,"Inputs"),n(),r(8,"app-type-props",5),e(9,"h3"),t(10,"Outputs"),n(),r(11,"app-type-props",5),e(12,"h3"),t(13,"Examples"),n(),u(14,6),e(15,"h3"),t(16,"Stylesheet"),n(),e(17,"p"),t(18," This is the CSS for the component. The css variables used within are available in the styles package. "),n(),e(19,"ui-card",7),r(20,"app-syntax",8),n()),o&2&&(a(5),i("source",s.description),a(3),i("props",s.componentInputs),a(3),i("props",s.componentOutputs),a(3),i("ngComponentOutlet",s.exampleComponent),a(6),i("pretty",!0))},dependencies:[m,f,h,v,g,b,c],encapsulation:2})};export{y as ButtonPage};
