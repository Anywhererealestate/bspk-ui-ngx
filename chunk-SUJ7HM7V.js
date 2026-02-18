import{a as y}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as u}from"./chunk-PEIK53MF.js";import{a as x}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as f}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as v}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as h}from"./chunk-INPGU3UV.js";import{a as m}from"./chunk-Z33MGHGB.js";import"./chunk-OMUJZVGI.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as c}from"./chunk-N6IMOQO3.js";import{Cb as r,Ma as d,bb as t,cb as n,db as e,eb as i,kb as g,ya as a}from"./chunk-3WAFZL3C.js";var b=class p{componentInputs=[{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",required:!1,default:"grey"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"hideTooltip",description:"Whether to hide the represented user's name as a tooltip.",type:"boolean",required:!1,default:"false"},{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the avatar.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],required:!1,default:"small"}];componentOutputs=[{name:"onClick",description:"The function to call when the avatar is clicked.",type:"EventEmitter"}];description="An avatar is a visual representation of a user or entity. It can be used to display an initials, icon, or image.";exampleComponent=null;constructor(){import("./chunk-N5ZDN7JU.js").then(l=>this.exampleComponent=l.UIAvatarExample)}static \u0275fac=function(s){return new(s||p)};static \u0275cmp=d({type:p,selectors:[["app-component-page"]],decls:27,vars:9,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],["variant","outlined"],[2,"display","flex","align-items","center","justify-content","center","width","100%","border-bottom","solid 1px var(--stroke-neutral-low-contrast)","padding","var(--spacing-sizing-04)","position","relative","background-color","var(--background-shade)"],["color","blue","name","Andre Giant","size","large","image","/avatar-01.png","initials","AR",3,"disabled","hideTooltip","showIcon"],["source",`<ui-avatar
  color="blue"
   [disabled]="false"
   [hideTooltip]="false"
   name="Andre Giant"
   [showIcon]="true"
   size="large"
   image="/avatar-01.png"
   initials="AR"
/>`,"language","html",2,"margin-top","2rem",3,"pretty"],[3,"props"],[3,"ngComponentOutlet"],["source",`[data-bspk='avatar'] {
    /*! 
    --avatar-border: is set via inline style 
    */

    --height: var(--spacing-sizing-10);
    --font: var(--labels-base);
    --svg-size: var(--spacing-sizing-10);

    border: var(--avatar-border);

    &:not([data-color]) {
        --foreground: var(--foreground-neutral-on-surface);
        --background: var(--surface-neutral-t3-low);
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: var(--height);
    width: var(--height);
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-full);
    background-color: var(--background);
    color: var(--foreground);
    font: var(--font);
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;

    &:has(img) {
        overflow: hidden;
        align-items: start;
        justify-content: start;
    }

    img {
        vertical-align: top;
        max-width: 100%;
        height: auto;
    }

    svg {
        width: var(--svg-size);
        height: var(--svg-size);
    }

    [data-icon] {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &[data-size='x-small'] {
        --height: var(--spacing-sizing-06);
        --font: var(--labels-x-small);
        --svg-size: var(--spacing-sizing-04);
    }

    &[data-size='small'] {
        --height: var(--spacing-sizing-08);
        --font: var(--labels-small);
        --svg-size: var(--spacing-sizing-05);
    }

    &[data-size='medium'] {
        --height: var(--spacing-sizing-10);
        --font: var(--labels-base);
        --svg-size: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --height: var(--spacing-sizing-12);
        --font: var(--labels-large);
        --svg-size: var(--spacing-sizing-06);
    }

    &[data-size='x-large'] {
        --height: var(--spacing-sizing-14);
        --font: var(--subheader-x-large);
        --svg-size: var(--spacing-sizing-08);
    }

    &[data-size='xx-large'] {
        --height: var(--spacing-sizing-17);
        --font: var(--subheader-xx-large);
        --svg-size: var(--spacing-sizing-12);
    }

    &[data-size='xxx-large'] {
        --height: var(--spacing-sizing-19);
        --font: var(--display-regular-small);
        --svg-size: var(--spacing-sizing-15);
    }

    &[data-size='xxxx-large'] {
        --height: var(--spacing-sizing-21);
        --font: var(--display-regular-medium);
        --svg-size: var(--spacing-sizing-17);
    }

    &[data-size='xxxxx-large'] {
        --height: var(--spacing-sizing-23);
        --font: var(--display-regular-large);
        --svg-size: var(--spacing-sizing-18);
    }

    --state-background: transparent;

    &::after {
        content: '';
        position: absolute;
        display: block;
        inset: 0;
        border-radius: var(--radius-full);
        background: var(--state-background);
    }

    &:not([aria-disabled])[role='button'] {
        &:hover {
            --state-background: var(--interactions-neutral-hover-opacity);
        }

        &:active {
            --state-background: var(--interactions-neutral-press-opacity);
        }
    }

    &[aria-disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:focus:not(:active, [aria-disabled]) {
        outline: 2px solid var(--stroke-neutral-focus);
        outline-offset: -2px;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(s,o){s&1&&(n(0,"div",0)(1,"h2",1),r(2," Avatar "),e(),n(3,"span",2),i(4,"ui-tag",3),e()(),i(5,"app-markup",4),n(6,"h3"),r(7,"Basic Usage"),e(),n(8,"ui-card",5)(9,"div",6),i(10,"ui-avatar",7),e(),i(11,"app-syntax",8),e(),n(12,"h3"),r(13,"Inputs"),e(),i(14,"app-type-props",9),n(15,"h3"),r(16,"Outputs"),e(),i(17,"app-type-props",9),n(18,"h3"),r(19,"Examples"),e(),g(20,10),n(21,"h3"),r(22,"Stylesheet"),e(),n(23,"p"),r(24," This is the CSS for the component. The css variables used within are available in the styles package. "),e(),n(25,"ui-card",5),i(26,"app-syntax",11),e()),s&2&&(a(5),t("source",o.description),a(5),t("disabled",!1)("hideTooltip",!1)("showIcon",!0),a(),t("pretty",!0),a(3),t("props",o.componentInputs),a(3),t("props",o.componentOutputs),a(3),t("ngComponentOutlet",o.exampleComponent),a(6),t("pretty",!0))},dependencies:[h,x,v,f,m,u,y,c],encapsulation:2})};export{b as AvatarPage};
