(()=>{"use strict";var e,t={505:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(645),r=i.n(n),s=i(278),o=i.n(s)()(r());o.push([e.id,"",""]);const a=o},278:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},645:e=>{e.exports=function(e){return e[1]}},292:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],l=n.base?c[0]+n.base:c[0],d=s[l]||0,h="".concat(l," ").concat(d);s[l]=d+1;var u=i(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=r(p,n);n.byIndex=a,t.splice(a,0,{identifier:h,updater:m,references:1})}o.push(h)}return o}function r(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var s=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=i(s[o]);t[a].references--}for(var c=n(e,r),l=0;l<s.length;l++){var d=i(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},383:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},88:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},884:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},893:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var s=i.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},997:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var s=i[e]={id:e,exports:{}};return t[e](s,s.exports,n),s.exports}function r(e,t){let i="";const n=Math.max(e.length,t.length);for(let r=0;r<n;r+=1)i+=String(e[r]),r+1!==n&&(i+=String(t[r]));return i}function s(e,...t){return r(e,t)}function o(e,...t){return r(e,t)}function a(e){e.forEach((({element:e,event:t,callback:i})=>{e.addEventListener(t,i)}))}function c(e){e.forEach((({element:e,event:t,callback:i})=>{e.removeEventListener(t,i)}))}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,function(e){e.Nav="gm-nav",e.Gallery="gm-gallery",e.Service="gm-service"}(e||(e={}));const l=s`
    :host {
        display: block;
        padding-top: 2rem;
        width: 100%;
        max-width: 700px;
        background-color: var(--color-text-1-opace);
        box-shadow: 0 0 5px -2px var(--color-black);

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

            &.left {
                left: 1rem;
            }

            &.right {
                right: 1rem;
            }
        }

        .gallery-container {
            display: flex;
            flex-direction: column;
        }

        .gallery {
            height: 31rem;
            position: relative;
            display: flex;
            justify-content: center;
        }

        .preview {
            display: flex;
            height: 100px;
            margin: 2rem;
            overflow: hidden;
            justify-content: center;

            img {
                max-height: 100%;
                margin: 0;
                padding: 0;
                border: 0;
                vertical-align: baseline;
            }

            img.active {
                outline: 3px solid var(--color-accent);
                outline-offset: -3px;
            }
        }
    }

    ::slotted(img) {
        display: none;
        max-width: 100%;
        object-fit: contain;
    }

    ::slotted(img.active) {
        display: block;
    }
`;var d,h,u;!function(e){e.Previous="previous",e.Next="next",e.Index="index"}(d||(d={}));class p extends HTMLElement{constructor(){super(),this.hasRendered=!1,this.eventListeners=[],this.images=[],this.imagesPreview=[],this.currentIndex=0,this.attachShadow({mode:"open"})}connectedCallback(){var e,t;if(!this.hasRendered){if(this.render(),this.hasRendered=!0,!this.shadowRoot)return;if(this.images=(null===(e=this.shadowRoot.querySelector("slot"))||void 0===e?void 0:e.assignedElements())||[],this.images.length>0){const e=document.createDocumentFragment();this.images.forEach(((t,i)=>{const n=t.cloneNode(!0);n.setAttribute("data-index",`${i}`),this.imagesPreview.push(n),e.appendChild(n)})),null===(t=this.shadowRoot.querySelector(".preview"))||void 0===t||t.appendChild(e),this.calculatePreviewImagesSizes(),this.images[0].classList.add("active"),this.imagesPreview[0].classList.add("active")}this.eventListeners.push({element:this.shadowRoot,event:"click",callback:this.handleClick.bind(this)},{element:window,event:"resize",callback:this.calculatePreviewImagesSizes.bind(this)}),a(this.eventListeners)}}disconnectedCallback(){c(this.eventListeners)}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=o`
            <style>
                ${l}
            </style>

            <div class="gallery-container">
                <div class="gallery">
                    <button class="arrow left">&lt;</button>
                    <button class="arrow right">&gt;</button>
                    <slot></slot>
                </div>
                <div class="preview"></div>
            </div>
        `)}handleClick(e){const t=e.target;if(t.closest(".arrow.left"))return void this.updateActiveImage(d.Previous);t.closest(".arrow.right")&&this.updateActiveImage(d.Next);const i=t.closest(".preview img");if(i){const e=Number(i.getAttribute("data-index"))||0;this.updateActiveImage(d.Index,e)}}updateActiveImage(e,t=0){switch(this.images[this.currentIndex].classList.remove("active"),this.imagesPreview[this.currentIndex].classList.remove("active"),e){case d.Previous:this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length;break;case d.Next:this.currentIndex=(this.currentIndex+1)%this.images.length;break;case d.Index:this.currentIndex=t}this.images[this.currentIndex].classList.add("active"),this.imagesPreview[this.currentIndex].classList.add("active")}calculatePreviewImagesSizes(){if(!this.shadowRoot)return;const e=this.shadowRoot.querySelectorAll(".preview img"),t=e.length,i=this.shadowRoot.querySelector(".preview").clientWidth;let n=i/t,r=i;e.forEach(((e,i)=>{const s=e;if(s.clientWidth<=n)s.style.marginRight="0",r-=s.clientWidth,n=r/(t-i-1);else{const e=n-s.clientWidth;s.style.marginRight=`${e}px`,r-=n}}))}}!function(e){e.SMALL="700px",e.MED="768px",e.LG="1000px",e.XLG="1600px"}(h||(h={})),function(e){e.Open="data-open",e.Hidden="data-hidden",e.Scrolled="data-scrolled"}(u||(u={}));const m=n.p+"assets/bg-pattern.png",v=s`
    ${e.Nav} {
        transition: transform 0.075s ease-in;
        transition-delay: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        &[${u.Open}='true'] {
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

        &[${u.Hidden}='true'] {
            transform: translateY(-100%);
        }

        &[${u.Scrolled}='true'] {
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
            background-image: url(${m});
            background-position: center;
            background-size: cover;
            overflow: hidden;

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

            @media (min-width: ${h.MED}) {
                display: flex;
                flex-direction: row;
                position: static;
                width: unset;
                border-radius: 1rem;
                align-items: stretch;

                li {
                    justify-self: stretch;
                }

                li a {
                    font-size: 1rem;
                    padding: 0.5rem 1rem;
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

    .nav-toggle {
        @media (min-width: ${h.MED}) {
            display: none;
            position: fixed;
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
    }
`,f=n.p+"assets/logo-dark.svg";class g extends HTMLElement{constructor(){super(),this.hasRendered=!1,this.isOpen=!1,this.isHidden=!1,this.isScrolled=!1,this.lastScrollTop=0,this.eventListeners=[],this.eventListeners.push({element:document,event:"click",callback:this.handleClick.bind(this)},{element:window,event:"scroll",callback:this.handleScroll.bind(this)},{element:window,event:"resize",callback:this.updateWidth.bind(this)}),a(this.eventListeners)}connectedCallback(){this.hasRendered||(this.render(),this.updateWidth(),this.hasRendered=!0)}disconnectedCallback(){c(this.eventListeners)}render(){this.innerHTML=o`
            <style>
                ${v}
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
        `}handleClick(e){const t=e.target;t.closest("#navList li a")?this.updateOpen(!1):t.closest(".nav-toggle")?this.updateOpen(!this.isOpen):!t.closest("#navList")&&this.isOpen&&this.updateOpen(!1)}handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;this.updateScrolled(e>g.SCROLL_COLOR_THRESHOLD),this.updateHidden(e>this.lastScrollTop),this.lastScrollTop=e<=0?0:e}updateOpen(e){this.isOpen!==e&&(this.isOpen=e,this.setAttribute(u.Open,String(e)))}updateHidden(e){this.isHidden!==e&&(this.isHidden=e,this.setAttribute(u.Hidden,String(e)),e&&this.updateOpen(!1))}updateScrolled(e){this.isScrolled!==e&&(this.isScrolled=e,this.setAttribute(u.Scrolled,String(e)))}updateWidth(){const e=document.querySelector(".layout"),t=null==e?void 0:e.clientWidth;if(!t)return;const i=document.documentElement.clientWidth;if(i<=t)return;const n=(i-t)/2;this.style.left=n-2+"px",this.style.right=n-2+"px"}}g.SCROLL_COLOR_THRESHOLD=10;const b=s`
    ${e.Service} {
        display: flex;
        flex-direction: column;
        text-align: center;
        max-width: 10rem;
        max-height: 10rem;

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
`;var x;!function(e){e.Description="data-description",e.Icon="src"}(x||(x={}));class y extends HTMLElement{constructor(){super(...arguments),this.hasRendered=!1,this.description=null,this.icon=null,this.eventListeners=[]}static get observedAttributes(){return[x.Description,x.Icon]}attributeChangedCallback(e,t,i){if(t!==i){switch(e){case x.Description:this.description=i;break;case x.Icon:this.icon=i}this.hasRendered&&this.render()}}connectedCallback(){this.hasRendered||(this.render(),this.hasRendered=!0)}disconnectedCallback(){c(this.eventListeners)}render(){this.description&&this.icon&&(this.innerHTML=o`
            <style>
                ${b}
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
        `)}}var w=n(292),S=n.n(w),k=n(893),L=n.n(k),C=n(383),I=n.n(C),R=n(884),E=n.n(R),A=n(88),O=n.n(A),T=n(997),$=n.n(T),H=n(505),_={};_.styleTagTransform=$(),_.setAttributes=E(),_.insert=I().bind(null,"head"),_.domAPI=L(),_.insertStyleElement=O(),S()(H.A,_),H.A&&H.A.locals&&H.A.locals,class{static defineAllComponents(){customElements.define(e.Nav,g),customElements.define(e.Gallery,p),customElements.define(e.Service,y)}}.defineAllComponents()})();