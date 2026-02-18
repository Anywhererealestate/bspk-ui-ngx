import{a as w}from"./chunk-OXFMQE7A.js";import"./chunk-HJCW6QCZ.js";import{a as g}from"./chunk-PEIK53MF.js";import{a as T}from"./chunk-ZM5C4PGH.js";import"./chunk-4XF7PTB3.js";import"./chunk-OCF3CQ5J.js";import{a as b}from"./chunk-6X7MQ2E3.js";import"./chunk-DR2IIZUZ.js";import{a as y}from"./chunk-P7YJCSKP.js";import"./chunk-PLGTR6VX.js";import"./chunk-MNVB66FG.js";import"./chunk-6T4FD2VU.js";import"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-DFJIGA5G.js";import{a as x}from"./chunk-INPGU3UV.js";import"./chunk-R7NQLYIS.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{f as v}from"./chunk-N6IMOQO3.js";import{$a as u,Cb as n,Db as h,Ma as d,Za as m,ab as c,bb as r,cb as e,db as t,eb as o,kb as f,ya as a}from"./chunk-3WAFZL3C.js";function C(s,p){if(s&1&&(e(0,"h4"),n(1),t(),o(2,"app-type-props",5)),s&2){let i=p.$implicit;a(),h(i.name),a(),r("props",i.props)}}var k=class s{componentInputs=[{name:"items",description:"The avatars to display in the group.",type:"AvatarItem[]",required:!0},{name:"max",description:`The maximum number of avatars to display before showing the overflow menu.

This is used to limit the number of avatars displayed in the group.

Recommended to set this to a value between 3 and 5 for optimal display.`,type:"number",required:!1,default:"5"},{name:"size",description:"Size of the avatar group.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],required:!1,default:"small"},{name:"variant",description:"The variant of the avatar group.",type:["spread","stacked"],required:!1,default:"stacked"}];componentOutputs=[];associatedTypes=[{name:"AvatarItem",file:"projects/ui/src/lib/avatar-group/avatar-group.ts",props:[{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",default:"grey",required:!1},{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",default:"true",required:!1}]}];description="The AvatarGroup component is used to display a group of avatars, with support for overflow handling and different display variants.";exampleComponent=null;constructor(){import("./chunk-TKS5ACFF.js").then(p=>this.exampleComponent=p.UIAvatarGroupExample)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=d({type:s,selectors:[["app-component-page"]],decls:22,vars:4,consts:[["ui-flex",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"margin-left","auto"],["color","blue","label","Dev"],[3,"source"],[3,"props"],[3,"ngComponentOutlet"],["variant","outlined"],["source",`[data-bspk='avatar-group'] {
    width: fit-content;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    [data-wrap] {
        min-width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    /* data-gap={variant === 'spread' ? (small ? '01' : '02') : undefined} */

    [data-bspk='avatar'] {
        z-index: 1;

        &:hover {
            z-index: 2;
        }

        &[data-bspk-owner='avatar-overflow'] {
            --avatar-border: solid 1px var(--stroke-neutral-low);

            background-color: var(--surface-neutral-t1-base);
        }
    }

    &[data-variant='spread'] {
        --avatar-border: none;

        [data-bspk='avatar'] + [data-bspk='avatar'] {
            margin-left: var(--spacing-sizing-02);
        }
    }

    &[data-variant='stacked'] {
        --avatar-border: solid 1px var(--stroke-neutral-low);

        [data-bspk='avatar'] + [data-bspk='avatar'] {
            margin-left: calc(var(--spacing-sizing-02) * -1);
        }
    }
}
`,"language","css",2,"margin-top","2rem",3,"pretty"]],template:function(i,l){i&1&&(e(0,"div",0)(1,"h2",1),n(2," AvatarGroup "),t(),e(3,"span",2),o(4,"ui-tag",3),t()(),o(5,"app-markup",4),e(6,"h3"),n(7,"Inputs"),t(),o(8,"app-type-props",5),e(9,"h3"),n(10,"Associated Types"),t(),u(11,C,3,2,null,null,m),e(13,"h3"),n(14,"Examples"),t(),f(15,6),e(16,"h3"),n(17,"Stylesheet"),t(),e(18,"p"),n(19," This is the CSS for the component. The css variables used within are available in the styles package. "),t(),e(20,"ui-card",7),o(21,"app-syntax",8),t()),i&2&&(a(5),r("source",l.description),a(3),r("props",l.componentInputs),a(3),c(l.associatedTypes),a(4),r("ngComponentOutlet",l.exampleComponent),a(6),r("pretty",!0))},dependencies:[x,T,y,b,g,w,v],encapsulation:2})};export{k as AvatarGroupPage};
