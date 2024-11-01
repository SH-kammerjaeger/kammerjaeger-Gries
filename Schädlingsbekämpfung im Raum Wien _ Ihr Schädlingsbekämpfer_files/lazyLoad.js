/**
 * @desc lazyload any src or srcset attribute
 * @author Dominik Kressler
 * @version 2.0.0
 */
var LazyLoad=function(e){var t=J.merge({offset:"100px",threshold:0,selector:"",nodeList:!1,observe:!1},e);if(t.nodes=!1,t.nodeList&&J.isNodeElement(t.nodeList)&&(t.nodes=t.nodeList),!1===t.nodes&&(t.nodes=document.querySelectorAll(t.selector)),t.nodes instanceof NodeList?t.nodes=Array.prototype.slice.call(t.nodes):t.nodes=[t.nodes],0===t.nodes.length)return this;const s=new IntersectionObserver((e,t)=>{for(let t of e){if(!1===t.isIntersecting)continue;let e=t.target;if(e.classList.add("lazyProcessing","isOnScreen"),e.addEventListener("load",function(){this.classList.add("lazyLoaded")}),"PICTURE"==e.nodeName){var r=e.querySelectorAll("img, source");for(let e of r)e.hasAttribute("data-src")&&e.setAttribute("src",e.getAttribute("data-src")),e.hasAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"))}else"IMG"==e.nodeName?(e.hasAttribute("data-srcset")&&(e.srcset=e.getAttribute("data-srcset")),e.hasAttribute("data-src")&&(e.src=e.getAttribute("data-src"))):"IFRAME"==e.nodeName?e.src=e.getAttribute("data-src"):e.classList.add("lazyLoaded");s.unobserve(e)}},{rootMargin:t.offset,threshold:t.threshold});for(let e of t.nodes)s.observe(e);if("MutationObserver"in window&&t.observe){new MutationObserver(function(e,s){let r=new RegExp(",","g"),o=t.selector.replace(r,":not(.lazyProcessing),")+":not(.lazyProcessing)";for(let s of e)new LazyLoad({offset:t.offset,threshold:t.threshold,selector:t.selector,nodeList:document.querySelectorAll(o),observe:!1})}).observe(t.observe,{childList:!0,subtree:!0})}return this};