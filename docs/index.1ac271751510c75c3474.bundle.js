(()=>{"use strict";var e,t={505:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(645),i=n.n(r),o=n(278),s=n.n(o)()(i());s.push([e.id,"",""]);const a=s},278:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},645:e=>{e.exports=function(e){return e[1]}},292:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=i(h,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},383:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},88:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},884:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},893:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},997:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,exports:{}};return t[e](o,o.exports,r),o.exports}function i(e,t){let n="";const r=Math.max(e.length,t.length);for(let i=0;i<r;i+=1)n+=String(e[i]),i+1!==r&&(n+=String(t[i]));return n}function o(e,...t){return i(e,t)}function s(e,...t){return i(e,t)}function a(e){e.forEach((({element:e,event:t,callback:n})=>{e.removeEventListener(t,n)}))}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,function(e){e.Nav="gm-nav",e.Gallery="gm-gallery",e.Service="gm-service"}(e||(e={}));const c=o`
    /* ${e.Gallery} {
        display: flex;
        height: 500px;
        background-color: var(--color-text-1-opace);
    } */

    ${e.Gallery} {
        display: block;
        position: relative;
        width: 100%;
        max-width: 600px;
        min-height: 600px;
        margin: auto;
        overflow: hidden;
        background-color: var(--color-text-1-opace);
    }

    .gallery {
        display: flex;
        transition: transform 0.5s ease;
    }

    .gallery img {
        width: 100%;
        flex-shrink: 0;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        line-height: 0;
    }

    .arrow.left {
        left: 1rem;
    }

    .arrow.right {
        right: 1rem;
    }
`;class l extends HTMLElement{constructor(){super(...arguments),this.hasRendered=!1,this.eventListeners=[]}connectedCallback(){this.hasRendered||(this.render(),this.hasRendered=!0)}disconnectedCallback(){a(this.eventListeners)}render(){this.innerHTML=s`
            <style>
                ${c}
            </style>

            <div class="gallery-container">
                <button class="arrow left">&lt;</button>
                <div class="gallery">
                    <slot></slot>
                </div>
                <button class="arrow right">&gt;</button>
            </div>
        `}}var d,p;!function(e){e.SMALL="700px",e.MED="768px",e.LG="1000px",e.XLG="1600px"}(d||(d={})),function(e){e.Open="data-open",e.Hidden="data-hidden",e.Scrolled="data-scrolled"}(p||(p={}));const u=r.p+"assets/bg-pattern.png",h=o`
    ${e.Nav} {
        transition: transform 0.075s ease-in;
        transition-delay: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        &[${p.Open}='true'] {
            nav ul {
                display: flex;
                transform: translateX(-100%);
            }

            .nav-toggle__lines {
                transform: rotate(45deg);
                transition-delay: 0.12s;

                &::before {
                    bottom: 0;
                    transition: bottom 0.075s ease;
                }

                &::after {
                    bottom: 0;
                    transform: rotate(-90deg);
                    transition: bottom 0.075s ease, transform 0.075s 0.12s ease;
                }
            }
        }

        &[${p.Hidden}='true'] {
            transform: translateY(-100%);
        }

        &[${p.Scrolled}='true'] {
            background-color: var(--color-bg-2);
        }
    }

    ${e.Nav} nav {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 1rem 1rem 1rem;
        /* background-color: var(--color-bg-2); */
        align-items: center;

        ul {
            position: fixed;
            left: 100%;
            top: 79px;
            bottom: 79px;
            width: 60%;
            border-radius: 1rem 0 0 1rem;
            transition: transform 0.075s ease-in;
            display: flex;
            flex-direction: column;
            gap: 6px;
            align-items: stretch;
            justify-content: center;
            background-color: var(--color-bg-3);
            background-image: url(${u});
            background-position: center;
            background-size: cover;

            @media (min-width: ${d.MED}) {
                display: flex;
            }
        }

        li {
            list-style: none;
            font-size: 1rem;
            color: var(--color-text-2);

            a {
                text-decoration: none;
                text-align: right;
                color: var(--color-text-2);
                display: block;
                padding: 1rem 1.5rem;
                font-size: 1.5rem;

                &:hover,
                &:active {
                    background-color: var(--color-accent);
                    color: var(--color-text-1);
                }
            }
        }
    }

    .nav-toggle__lines {
        width: 36px;
        height: 3px;
        background-color: var(--color-text-2);
        position: relative;
        transition: transform 0.075s ease;

        &::before,
        &::after {
            content: '';
            display: block;
            width: 36px;
            height: 3px;
            background-color: var(--color-text-2);
            position: absolute;
        }

        &::before {
            bottom: 10px;
            transition: bottom 0.075s 0.12s ease;
        }

        &::after {
            bottom: -10px;
            transition: bottom 0.075s 0.12s ease, transform 0.075s ease;
        }
    }

    .nav-toggle__button {
        height: 40px;
        width: 50px;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;

        @media (min-width: ${d.MED}) {
            display: none;
        }
    }
`,f=r.p+"assets/logo-dark.svg";class v extends HTMLElement{constructor(){super(),this.hasRendered=!1,this.isOpen=!1,this.isHidden=!1,this.isScrolled=!1,this.lastScrollTop=0,this.eventListeners=[],this.eventListeners.push({element:document,event:"click",callback:this.handleClick.bind(this)},{element:window,event:"scroll",callback:this.handleScroll.bind(this)}),this.eventListeners.forEach((({element:e,event:t,callback:n})=>{e.addEventListener(t,n)}))}connectedCallback(){this.hasRendered||(this.render(),this.hasRendered=!0)}disconnectedCallback(){a(this.eventListeners)}render(){this.innerHTML=s`
            <style>
                ${h}
            </style>

            <nav>
                <div>
                    <a href="#home">
                        <img
                            width="200px"
                            height="48px"
                            src="${f}"
                            alt="gm-proconstruct logo"
                        />
                    </a>
                </div>
                <ul id="navList">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="nav-toggle">
                    <button id="navToggleButton" class="nav-toggle__button">
                        <div class="nav-toggle__lines"></div>
                    </button>
                </div>
            </nav>
        `}handleClick(e){const t=e.target;t.closest("#navList li a")?this.updateOpen(!1):t.closest(".nav-toggle")?this.updateOpen(!this.isOpen):!t.closest("#navList")&&this.isOpen&&this.updateOpen(!1)}handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;this.updateScrolled(e>v.SCROLL_COLOR_THRESHOLD),this.updateHidden(e>this.lastScrollTop),this.lastScrollTop=e<=0?0:e}updateOpen(e){this.isOpen!==e&&(this.isOpen=e,this.setAttribute(p.Open,String(e)))}updateHidden(e){this.isHidden!==e&&(this.isHidden=e,this.setAttribute(p.Hidden,String(e)),e&&this.updateOpen(!1))}updateScrolled(e){this.isScrolled!==e&&(this.isScrolled=e,this.setAttribute(p.Scrolled,String(e)))}}v.SCROLL_COLOR_THRESHOLD=10;const m=o`
    ${e.Service} {
        display: flex;
        flex-direction: column;
        text-align: center;

        .${e.Service}__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
        }

        p {
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 1.25rem;
        }
    }
`;var g;!function(e){e.Description="data-description",e.Icon="src"}(g||(g={}));class b extends HTMLElement{constructor(){super(...arguments),this.hasRendered=!1,this.description=null,this.icon=null,this.eventListeners=[]}static get observedAttributes(){return[g.Description,g.Icon]}attributeChangedCallback(e,t,n){if(t!==n){switch(e){case g.Description:this.description=n;break;case g.Icon:this.icon=n}this.hasRendered&&this.render()}}connectedCallback(){this.hasRendered||(this.render(),this.hasRendered=!0)}disconnectedCallback(){a(this.eventListeners)}render(){this.description&&this.icon&&(this.innerHTML=s`
            <style>
                ${m}
            </style>

            <div class="${e.Service}__container">
                <img
                    width="100px"
                    height="100px"
                    src="${this.icon}"
                    alt="${this.description} icon"
                />
                <p>${this.description}</p>
            </div>
        `)}}var x=r(292),y=r.n(x),w=r(893),S=r.n(w),k=r(383),L=r.n(k),O=r(884),C=r.n(O),T=r(88),E=r.n(T),$=r(997),H=r.n($),_=r(505),A={};A.styleTagTransform=H(),A.setAttributes=C(),A.insert=L().bind(null,"head"),A.domAPI=S(),A.insertStyleElement=E(),y()(_.A,A),_.A&&_.A.locals&&_.A.locals,class{static defineAllComponents(){customElements.define(e.Nav,v),customElements.define(e.Gallery,l),customElements.define(e.Service,b)}}.defineAllComponents()})();