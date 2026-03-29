const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-DvzfYLXI.js","assets/PageHeader-Bcrc5fxd.js","assets/renderSection-DkGTr7g2.js","assets/CardIcon-DIE4COqa.js","assets/CardCode-DTGEN7ch.js","assets/CardCode-Dvl_Svmm.css","assets/Links-jNmpqXk5.js","assets/Code-D-Sdk-Zj.js","assets/LessonNav-C8O3cQxq.js","assets/page-CVc_1RpR.js","assets/page-WWfMkPyv.js","assets/SubSection-Dx3IDIH1.js","assets/Image-BzCDZVMb.js","assets/Topic-7L1nWIDb.js","assets/Demo-Ciq0aQYx.js","assets/page-QBBYWfnE.js","assets/Spacer-MCI0SMHI.js","assets/page-Bgsxnb3V.js","assets/page-BKPHXJj5.js","assets/page-BIgIBksk.js","assets/page-B7cahEdV.js","assets/page-DZi4MQwo.js","assets/page-1EktDaye.js","assets/page-Bffl1-bj.js","assets/page-Vs66fMBl.js","assets/page-CHDayuhH.js","assets/page-BdPjKcel.js","assets/page-CLj4wWQB.js","assets/page-CozOI-Li.js","assets/page--0Fki4t1.js","assets/page-Bifz5WlS.js","assets/page-CPS4phmk.js","assets/page-Bu3HMQGO.js","assets/page-CJS9-wmR.js","assets/page-yF7llBkk.js","assets/page-CmOkl03d.js","assets/page-BWCzwoVL.js","assets/page-DJLV9JQh.js","assets/page-BfpJkmmo.js","assets/page-C7zmdcLv.js","assets/ifSum-CAJQOuwG.js","assets/page-CJQdjfr_.js","assets/page-CgzuGDyr.js","assets/page-aafAjNRu.js","assets/page-fLNqJOnf.js","assets/page-EopBy3Zm.js","assets/page-CU_YJ951.js","assets/page-B-B2qeHh.js","assets/page-CaePMJLf.js","assets/page-DTQxKmwe.js","assets/Card-Bf91Pc3O.js","assets/page-CJYI9zOH.js","assets/page-DZRPTe58.js","assets/page-BsfLA2kV.js","assets/page-CBFkOyRo.js","assets/page-CkZbvFoZ.js","assets/page-ChUbmJrb.js","assets/page-DQrCEuz7.js","assets/page-DhBqkAPC.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const R="modulepreload",D=function(e){return"/"+e},E={},o=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let p=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=s?.nonce||s?.getAttribute("nonce");n=p(a.map(l=>{if(l=D(l),l in E)return;E[l]=!0;const f=l.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":R,f||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),f)return new Promise((M,O)=>{c.addEventListener("load",M),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return n.then(s=>{for(const d of s||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},Z=`
    .loading-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      opacity: 0.8;
      font-weight: bold;
    }

    .spinner {
      width: 32px;
      height: 32px;
      border: 4px solid #555;
      border-top-color: #999;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
`;class H extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>${Z}</style>
      <div class="loading-container">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>
    `}}customElements.define("wc-loading",H);const v=Object.assign({"../pages/404/page.js":()=>o(()=>import("./page-9HgMM6Vl.js"),[]),"../pages/ai/prompts/dev-prompts/page.js":()=>o(()=>import("./page-DvzfYLXI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),"../pages/backend/node-js/module-1/page.js":()=>o(()=>import("./page-CVc_1RpR.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8])),"../pages/boilerplate/page.js":()=>o(()=>import("./page-WWfMkPyv.js"),__vite__mapDeps([10,1,2,11,3,6,12,13,4,5,7,14,8])),"../pages/contact/page.js":()=>o(()=>import("./page-1Hx3O10X.js"),[]),"../pages/frontend/css/module-1/page.js":()=>o(()=>import("./page-QBBYWfnE.js"),__vite__mapDeps([15,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-2/page.js":()=>o(()=>import("./page-Bgsxnb3V.js"),__vite__mapDeps([17,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-3/page.js":()=>o(()=>import("./page-BKPHXJj5.js"),__vite__mapDeps([18,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-4/page.js":()=>o(()=>import("./page-BIgIBksk.js"),__vite__mapDeps([19,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-5/page.js":()=>o(()=>import("./page-B7cahEdV.js"),__vite__mapDeps([20,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-6/page.js":()=>o(()=>import("./page-DZi4MQwo.js"),__vite__mapDeps([21,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-7/page.js":()=>o(()=>import("./page-1EktDaye.js"),__vite__mapDeps([22,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-8/page.js":()=>o(()=>import("./page-Bffl1-bj.js"),__vite__mapDeps([23,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/module-9/page.js":()=>o(()=>import("./page-Vs66fMBl.js"),__vite__mapDeps([24,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/css/resources/page.js":()=>o(()=>import("./page-CHDayuhH.js"),__vite__mapDeps([25,1,2,4,5,6,7,8])),"../pages/frontend/html/module-1/page.js":()=>o(()=>import("./page-BdPjKcel.js"),__vite__mapDeps([26,1,2,3,11,6,12,4,5,7,8])),"../pages/frontend/html/module-2/page.js":()=>o(()=>import("./page-CLj4wWQB.js"),__vite__mapDeps([27,1,2,3,11,6,12,13,4,5,7,14,8])),"../pages/frontend/html/module-3/page.js":()=>o(()=>import("./page-CozOI-Li.js"),__vite__mapDeps([28,1,2,11,13,8])),"../pages/frontend/html/module-4/page.js":()=>o(()=>import("./page--0Fki4t1.js"),__vite__mapDeps([29,1,2,3,11,6,12,4,5,7,8])),"../pages/frontend/html/module-5/page.js":()=>o(()=>import("./page-Bifz5WlS.js"),__vite__mapDeps([30,1,2,11,13,8])),"../pages/frontend/html/module-6/page.js":()=>o(()=>import("./page-CPS4phmk.js"),__vite__mapDeps([31,1,2,3,11,6,12,4,5,7,14,8])),"../pages/frontend/html/module-7/page.js":()=>o(()=>import("./page-Bu3HMQGO.js"),__vite__mapDeps([32,1,2,3,11,6,12,4,5,7,8])),"../pages/frontend/html/module-8/page.js":()=>o(()=>import("./page-CJS9-wmR.js"),__vite__mapDeps([33,1,2,3,11,13,12,4,5,7,8])),"../pages/frontend/html/resources/page.js":()=>o(()=>import("./page-yF7llBkk.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8])),"../pages/frontend/js/module-1/page.js":()=>o(()=>import("./page-CmOkl03d.js"),__vite__mapDeps([35,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-10/page.js":()=>o(()=>import("./page-BWCzwoVL.js"),__vite__mapDeps([36,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-11/page.js":()=>o(()=>import("./page-DJLV9JQh.js"),__vite__mapDeps([37,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-12/page.js":()=>o(()=>import("./page-BfpJkmmo.js"),__vite__mapDeps([38,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-2/page.js":()=>o(()=>import("./page-C7zmdcLv.js"),__vite__mapDeps([39,1,2,3,11,6,12,13,4,5,7,8,16,40])),"../pages/frontend/js/module-3/page.js":()=>o(()=>import("./page-CJQdjfr_.js"),__vite__mapDeps([41,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-4/page.js":()=>o(()=>import("./page-CgzuGDyr.js"),__vite__mapDeps([42,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-5/page.js":()=>o(()=>import("./page-aafAjNRu.js"),__vite__mapDeps([43,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-6/page.js":()=>o(()=>import("./page-fLNqJOnf.js"),__vite__mapDeps([44,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-7/page.js":()=>o(()=>import("./page-EopBy3Zm.js"),__vite__mapDeps([45,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-8/page.js":()=>o(()=>import("./page-CU_YJ951.js"),__vite__mapDeps([46,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/module-9/page.js":()=>o(()=>import("./page-B-B2qeHh.js"),__vite__mapDeps([47,1,2,3,11,6,12,13,4,5,7,14,8,16])),"../pages/frontend/js/resources/page.js":()=>o(()=>import("./page-CaePMJLf.js"),__vite__mapDeps([48,1,2,4,5,6,7,8])),"../pages/home/page.js":()=>o(()=>import("./page-DTQxKmwe.js"),__vite__mapDeps([49,1,50,12])),"../pages/misc/jobs/common-questions-and-answers/page.js":()=>o(()=>import("./page-CJYI9zOH.js"),__vite__mapDeps([51,1,2,3,50,6,7])),"../pages/motion-3d/gsap/module-1/page.js":()=>o(()=>import("./page-DZRPTe58.js"),__vite__mapDeps([52,1,2,3,4,5,6,7,8])),"../pages/motion-3d/three-js/module-1/page.js":()=>o(()=>import("./page-BsfLA2kV.js"),__vite__mapDeps([53,1,2,3,4,5,6,7,8])),"../pages/playground/page.js":()=>o(()=>import("./page-CBFkOyRo.js"),__vite__mapDeps([54,1,2,3,11,6,12,13,4,5,7,14,8])),"../pages/resources/page.js":()=>o(()=>import("./page-CkZbvFoZ.js"),__vite__mapDeps([55,1,2,4,5,6,7,8])),"../pages/test/page.js":()=>o(()=>import("./page-ChUbmJrb.js"),__vite__mapDeps([56,40])),"../pages/tools/git/module-1/page.js":()=>o(()=>import("./page-DQrCEuz7.js"),__vite__mapDeps([57,1,2,3,11,6,12,4,5,7,14,8])),"../pages/tools/ide/vs-code/page.js":()=>o(()=>import("./page-DhBqkAPC.js"),__vite__mapDeps([58,1,2,3,4,5,6,7,8,16]))});let T=null,k=0;function V(){document.querySelectorAll("a[data-link]").forEach(t=>{t.getAttribute("href")===window.location.pathname?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}async function x(){const e=document.querySelector("#app");let t=window.location.pathname;t=t.toLowerCase();let a=t==="/"?"/home":t;if(a===T)return;T=a;const r=`../pages${a}/page.js`,n=v[r]??v["../pages/404/page.js"];//! Increase token to invalidate older navigations (race condition protection)
const i=++k;//! Loading.js
if(e.classList.add("is-fading"),await Promise.race([new Promise(p=>{const l=()=>{e.removeEventListener("transitionend",l),p()};e.addEventListener("transitionend",l)}),new Promise(p=>setTimeout(p,200))]),e.replaceChildren(document.createElement("wc-loading")),await new Promise(requestAnimationFrame),await n(),i!==k)return;const s="wc-"+a.slice(1).replaceAll("/","-"),d=document.createElement(s);d.classList.add("page"),e.replaceChildren(d),await new Promise(requestAnimationFrame),e.classList.remove("is-fading"),V(),window.scrollTo({top:0,behavior:"smooth"})}const _=new Set;function j(e){const a=`../pages${e==="/"?"/home":e}/page.js`;v[a]&&(_.has(a)||(_.add(a),v[a]().catch(r=>{console.warn(`Falha no prefetch de ${e}:`,r),_.delete(a)})))}document.addEventListener("mouseenter",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");t&&j(t.getAttribute("href"))},!0);document.addEventListener("focusin",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");t&&j(t.getAttribute("href"))});function $(e){window.history.pushState({},"",e),x()}window.addEventListener("popstate",x);document.addEventListener("DOMContentLoaded",()=>{x(),setTimeout(b,0)});document.addEventListener("click",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");if(!t||t.origin!==location.origin)return;e.preventDefault();const a=t.getAttribute("href");$(a),setTimeout(b,0)});const g=document.querySelector("main"),L=document.querySelector("#app");L&&new ResizeObserver(()=>{b()}).observe(L);function b(){g.scrollHeight>g.clientHeight?g.classList.add("has-scroll"):g.classList.remove("has-scroll")}window.addEventListener("resize",b);const z="#000",C=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="var(--red-5">
    <path
      d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 412L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"
    </path>
  </svg>
`,B=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="22">
    height="22"
    <path
      d="M9.783740000000002 1.7569125c-0.4165325 -0.12006 -0.8502175 0.12251000000000001 -0.9702775000000001 0.5390425L5.6772175 13.2728125c-0.1200575 0.4165325 0.12251000000000001 0.850215 0.5390425 0.970275s0.8502175 -0.12251000000000001 0.9702775000000001 -0.5390425l3.136245 -10.976857500000001c0.1200575 -0.4165325 -0.12251000000000001 -0.850215 -0.5390425 -0.970275Zm1.9748525000000001 2.94268c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.1099375L13.946615000000001 8l-2.1904725 2.1904725c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.109935s0.8036625000000002 0.306275 1.1099375 0l2.7442150000000005 -2.7442150000000005c0.3062725 -0.3062725 0.3062725 -0.8036625000000002 0 -1.109935L12.86608 4.7020425c-0.306275 -0.306275 -0.8036625000000002 -0.306275 -1.1099375 0Zm-7.514735000000001 0c-0.306275 -0.306275 -0.8036625000000002 -0.306275 -1.1099375 0L0.389705 7.4438075c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.109935l2.7442150000000005 2.7442150000000005c0.306275 0.306275 0.8036625000000002 0.306275 1.1099375 0s0.3062725 -0.8036625000000002 0 -1.1099375L2.053385 8l2.1904725 -2.1904725c0.3062725 -0.3062725 0.3062725 -0.8036625000000002 0 -1.109935Z" fill="#999999" stroke-width="0.025">
    </path>
  </svg>
`,U=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="25px"
    height="25px"
    fill="#999999">
    <path
      d="M130-189 81-546q-5-32 15.5-58t52.5-31l61 435 283-40h267q-8 21-24.5 35.5T695-187l-477 66q-33 5-58-15t-30-53Zm190-127q-33 0-56.5-23.5T240-396v-364q0-33 23.5-56.5T320-840h480q33 0 56.5 23.5T880-760v364q0 33-23.5 56.5T800-316H320Zm0-80h480v-364H320v364Zm0 0v-364 364ZM210-200Zm190-400h320v-80H400v80Zm0 120h200v-80H400v80Z"
    </path>
  </svg>
`,F=()=>`
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="#999999">
    <path
      d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>
    </svg>
`,q=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="23px"
    height="23px"
    fill="var(--blue-5)">
    <path
      d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
    </path>
  </svg>
`,Q=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="#999999">
    <path
      d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/>
  </svg>
`,N=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="#999999">
    <path
      d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm428.5-51.5Q520-223 520-240t-11.5-28.5Q497-280 480-280t-28.5 11.5Q440-257 440-240t11.5 28.5Q463-200 480-200t28.5-11.5ZM160-320h640v-440H160v440Zm0 0v-440 440Z"
    </path>
  </svg>
`,A=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="18px"
    height="18px"
    fill="#999999">
    <path
      d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
    </path>
  </svg>
`,J=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="${z}">
    <path
      d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
    </path>
  </svg>
`,G=()=>`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 -960 960 960"
  width="24px"
  height="24px"
  fill="#999999">
  <path
    d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
</svg>
`,X=()=>`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 -960 960 960"
  width="25px"
  height="25px"
  fill="#999999">
  <path
    d="M320-316q-33 0-56.5-23.5T240-396v-364q0-33 23.5-56.5T320-840h480q33 0 56.5 23.5T880-760v364q0 33-23.5 56.5T800-316H320Zm0-80h480v-364H320v364Zm0 0v-364 364Zm80-204h320v-80H400v80Zm0 120h200v-80H400v80Z"
  </path>
</svg>
`,Y=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="27px"
    height="27px"
    fill="#999999">
    <path
      d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
    </path>
  </svg>
`,W=Object.freeze(Object.defineProperty({__proto__:null,attention:C,backend:F,codeBlock:B,contents:U,darkMode:q,frontend:Q,laptop:N,lightMode:A,menu:J,module:G,scrollToTop:Y,section:X},Symbol.toStringTag,{value:"Module"}));class K extends HTMLElement{connectedCallback(){const t=this.getAttribute("name");this.innerHTML=W[t]?.()??""}}const ee="*{margin:0;padding:0;box-sizing:border-box}*,*:before,*:after{box-sizing:border-box}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}img,picture,video,canvas,svg{display:block;max-width:100%}video{aspect-ratio:16 / 9}input,button,textarea,select{font:inherit}a{text-decoration:none}button{padding:5px}:root{--slate-0: #f8fafc;--slate-1: #f1f5f9;--slate-2: #e2e8f0;--slate-3: #cbd5e1;--slate-4: #94a3b8;--slate-5: #64748b;--slate-6: #475569;--slate-7: #334155;--slate-8: #1e293b;--slate-9: #0f172a;--slate-10: #020617;--gray-0: #f9fafb;--gray-1: #f3f4f6;--gray-2: #e5e7eb;--gray-3: #d1d5db;--gray-4: #9ca3af;--gray-5: #6b7280;--gray-6: #4b5563;--gray-7: #374151;--gray-8: #1f2937;--gray-9: #111827;--gray-10: #030712;--neutral-0: #fafafa;--neutral-1: #f5f5f5;--neutral-2: #e5e5e5;--neutral-3: #d4d4d8;--neutral-4: #a3a3a3;--neutral-5: #737373;--neutral-6: #525252;--neutral-7: #404040;--neutral-8: #262626;--neutral-9: #171717;--neutral-10: #0a0a0a;--red-0: #fef2f2;--red-1: #fee2e2;--red-2: #fecaca;--red-3: #fca5a5;--red-4: #f87171;--red-5: #ef4444;--red-6: #dc2626;--red-7: #b91c1c;--red-8: #991b1b;--red-9: #7f1d1d;--red-10: #450a0a;--orange-0: #fff7ed;--orange-1: #ffedd5;--orange-2: #fed7aa;--orange-3: #fdba74;--orange-4: #fb923c;--orange-5: #f97316;--orange-6: #ea580c;--orange-7: #c2410c;--orange-8: #9a3412;--orange-9: #7c2d12;--orange-10: #431407;--amber-0: #fffbeb;--amber-1: #fef3c7;--amber-2: #fde68a;--amber-3: #fcd34d;--amber-4: #fbbf24;--amber-5: #f59e0b;--amber-6: #d97706;--amber-7: #b45309;--amber-8: #92400e;--amber-9: #78350f;--amber-10: #451a03;--yellow-0: #fefce8;--yellow-1: #fef9c3;--yellow-2: #fef08a;--yellow-3: #fde047;--yellow-4: #facc15;--yellow-5: #eab308;--yellow-6: #ca8a04;--yellow-7: #a16207;--yellow-8: #854d0e;--yellow-9: #713f12;--yellow0-10: #422006;--lime-0: #f7fee7;--lime-1: #ecfccb;--lime-2: #d9f99d;--lime-3: #bef264;--lime-4: #a3e635;--lime-5: #84cc16;--lime-6: #65a30d;--lime-7: #4d7c0f;--lime-8: #3f6212;--lime-9: #365314;--lime-10: #1a2e05;--green-1: #f0fdf4;--green-2: #dcfce7;--green-3: #bbf7d0;--green-4: #86efac;--green-5: #4ade80;--green-6: #22c55e;--green-7: #16a34a;--green-8: #15803d;--green-9: #166534;--green-0: #14532d;--green-10: #052e16;--teal-0: #f0fdfa;--teal-1: #ccfbf1;--teal-2: #99f6e4;--teal-3: #5eead4;--teal-4: #2dd4bf;--teal-5: #14b8a6;--teal-6: #0d9488;--teal-7: #0f766e;--teal-8: #115e59;--teal-9: #134e4a;--teal-10: #042f2e;--cyan-0: #ecfeff;--cyan-1: #cffafe;--cyan-2: #a5f3fc;--cyan-3: #67e8f9;--cyan-4: #22d3ee;--cyan-5: #06b6d4;--cyan-6: #0891b2;--cyan-7: #0e7490;--cyan-8: #155e75;--cyan-9: #164e63;--cyan-10: #083344;--sky-0: #f0f9ff;--sky-1: #e0f2fe;--sky-2: #bae6fd;--sky-3: #7dd3fc;--sky-4: #38bdf8;--sky-5: #0ea5e9;--sky-6: #0284c7;--sky-7: #0369a1;--sky-8: #075985;--sky-9: #0c4a6e;--sky-10: #082f49;--blue-0: #eff6ff;--blue-1: #dbeafe;--blue-2: #bfdbfe;--blue-3: #93c5fd;--blue-4: #60a5fa;--blue-5: #3b82f6;--blue-6: #2563eb;--blue-7: #1d4ed8;--blue-8: #1e40af;--blue-9: #1e3a8a;--blue-10: #172554;--indigo-0: #eef2ff;--indigo-1: #e0e7ff;--indigo-2: #c7d2fe;--indigo-3: #a5b4fc;--indigo-4: #818cf8;--indigo-5: #6366f1;--indigo-6: #4f46e5;--indigo-7: #4338ca;--indigo-8: #3730a3;--indigo-9: #312e81;--indigo-10: #1e1b4b;--violet-0: #f5f3ff;--violet-1: #ede9fe;--violet-2: #ddd6fe;--violet-3: #c4b5fd;--violet-4: #a78bfa;--violet-5: #8b5cf6;--violet-6: #7c3aed;--violet-7: #6d28d9;--violet-8: #5b21b6;--violet-9: #4c1d95;--violet-10: #2e1065;--purple-0: #faf5ff;--purple-1: #f3e8ff;--purple-2: #e9d5ff;--purple-3: #d8b4fe;--purple-4: #c084fc;--purple-5: #a855f7;--purple-6: #9333ea;--purple-7: #7e22ce;--purple-8: #6b21a8;--purple-9: #581c87;--purple-10: #3b0764;--fuchsia-0: #fdf4ff;--fuchsia-1: #fae8ff;--fuchsia-2: #f5d0fe;--fuchsia-3: #f0abfc;--fuchsia-4: #e879f9;--fuchsia-5: #d946ef;--fuchsia-6: #c026d3;--fuchsia-7: #a21caf;--fuchsia-8: #86198f;--fuchsia-9: #701a75;--fuchsia-10: #4a044e;--pink-0: #fdf2f8;--pink-1: #fce7f3;--pink-2: #fbcfe8;--pink-3: #f9a8d4;--pink-4: #f472b6;--pink-5: #ec4899;--pink-6: #db2777;--pink-7: #be185d;--pink-8: #9d174d;--pink-9: #831843;--pink-10: #500724}body{font-family:Montserrat,sans-serif;color:var(--text-color)}h1{font-size:1.8rem}h2{font-size:1.7rem}h3{font-size:1.5rem}h4{font-size:1.3rem}h5,p,span,li{font-size:1rem}p{line-height:1.4}.line-break-item:not(:last-child){margin-bottom:1rem}.line-break{display:grid;gap:1rem}.flex{display:flex;gap:10px}.flex-align-start{display:flex;align-items:start;gap:10px}.flex-align-center{display:flex;align-items:center;gap:5px}.flex-space-between{display:flex;justify-content:space-between}hr{border-color:var(--slate-5);margin:15px}.cursor-pointer{cursor:pointer}",te=`
  :host {
    display: grid;
    place-items: center;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 5px;
  }

  .ham_menu {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .ham_menu span {
    width: 20px;
    height: 3px;
    background: var(--menu-button);
    border-radius: 5px;
    transition: 0.3s;
  }

  .line1-active {
    transform: translateY(6px) translateX(-3px) rotate(45deg);
  }

  .line2-active {
    opacity: 0;
  }

  .line3-active {
    transform: translateY(-6px) translateX(-3px) rotate(-45deg);
  }

  :host([icon="darkMode"]) svg,
  :host([icon="lightMode"]) svg {
    animation: fadeIn 0.4s;
  }

  :host([icon="lightMode"]) svg {
    filter: none;
    fill: var(--yellow-3);
    margin-right: 2px
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.6);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;class oe extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        ${ee}
        ${te}
      </style>
      <button></button>
    `,this.button=this.shadowRoot.querySelector("button")}connectedCallback(){this.updateIcon(),this.button.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("nav-click",{bubbles:!0,composed:!0}))})}attributeChangedCallback(t){t==="icon"&&this.updateIcon()}toggleHamIcon(t){const r=this.shadowRoot.querySelector(".ham_menu").querySelectorAll("span");r[0].classList.toggle("line1-active",t),r[1].classList.toggle("line2-active",t),r[2].classList.toggle("line3-active",t)}updateIcon(){const t=this.getAttribute("icon");if(t==="menu")this.button.innerHTML=`
        <div class="ham_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;else{const a={lightMode:A,darkMode:q};this.button.innerHTML=a[t]||""}}}const ae='*{margin:0;padding:0;box-sizing:border-box}*,*:before,*:after{box-sizing:border-box}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}img,picture,video,canvas,svg{display:block;max-width:100%}video{aspect-ratio:16 / 9}input,button,textarea,select{font:inherit}a{text-decoration:none}button{padding:5px}:root{--slate-0: #f8fafc;--slate-1: #f1f5f9;--slate-2: #e2e8f0;--slate-3: #cbd5e1;--slate-4: #94a3b8;--slate-5: #64748b;--slate-6: #475569;--slate-7: #334155;--slate-8: #1e293b;--slate-9: #0f172a;--slate-10: #020617;--gray-0: #f9fafb;--gray-1: #f3f4f6;--gray-2: #e5e7eb;--gray-3: #d1d5db;--gray-4: #9ca3af;--gray-5: #6b7280;--gray-6: #4b5563;--gray-7: #374151;--gray-8: #1f2937;--gray-9: #111827;--gray-10: #030712;--neutral-0: #fafafa;--neutral-1: #f5f5f5;--neutral-2: #e5e5e5;--neutral-3: #d4d4d8;--neutral-4: #a3a3a3;--neutral-5: #737373;--neutral-6: #525252;--neutral-7: #404040;--neutral-8: #262626;--neutral-9: #171717;--neutral-10: #0a0a0a;--red-0: #fef2f2;--red-1: #fee2e2;--red-2: #fecaca;--red-3: #fca5a5;--red-4: #f87171;--red-5: #ef4444;--red-6: #dc2626;--red-7: #b91c1c;--red-8: #991b1b;--red-9: #7f1d1d;--red-10: #450a0a;--orange-0: #fff7ed;--orange-1: #ffedd5;--orange-2: #fed7aa;--orange-3: #fdba74;--orange-4: #fb923c;--orange-5: #f97316;--orange-6: #ea580c;--orange-7: #c2410c;--orange-8: #9a3412;--orange-9: #7c2d12;--orange-10: #431407;--amber-0: #fffbeb;--amber-1: #fef3c7;--amber-2: #fde68a;--amber-3: #fcd34d;--amber-4: #fbbf24;--amber-5: #f59e0b;--amber-6: #d97706;--amber-7: #b45309;--amber-8: #92400e;--amber-9: #78350f;--amber-10: #451a03;--yellow-0: #fefce8;--yellow-1: #fef9c3;--yellow-2: #fef08a;--yellow-3: #fde047;--yellow-4: #facc15;--yellow-5: #eab308;--yellow-6: #ca8a04;--yellow-7: #a16207;--yellow-8: #854d0e;--yellow-9: #713f12;--yellow0-10: #422006;--lime-0: #f7fee7;--lime-1: #ecfccb;--lime-2: #d9f99d;--lime-3: #bef264;--lime-4: #a3e635;--lime-5: #84cc16;--lime-6: #65a30d;--lime-7: #4d7c0f;--lime-8: #3f6212;--lime-9: #365314;--lime-10: #1a2e05;--green-1: #f0fdf4;--green-2: #dcfce7;--green-3: #bbf7d0;--green-4: #86efac;--green-5: #4ade80;--green-6: #22c55e;--green-7: #16a34a;--green-8: #15803d;--green-9: #166534;--green-0: #14532d;--green-10: #052e16;--teal-0: #f0fdfa;--teal-1: #ccfbf1;--teal-2: #99f6e4;--teal-3: #5eead4;--teal-4: #2dd4bf;--teal-5: #14b8a6;--teal-6: #0d9488;--teal-7: #0f766e;--teal-8: #115e59;--teal-9: #134e4a;--teal-10: #042f2e;--cyan-0: #ecfeff;--cyan-1: #cffafe;--cyan-2: #a5f3fc;--cyan-3: #67e8f9;--cyan-4: #22d3ee;--cyan-5: #06b6d4;--cyan-6: #0891b2;--cyan-7: #0e7490;--cyan-8: #155e75;--cyan-9: #164e63;--cyan-10: #083344;--sky-0: #f0f9ff;--sky-1: #e0f2fe;--sky-2: #bae6fd;--sky-3: #7dd3fc;--sky-4: #38bdf8;--sky-5: #0ea5e9;--sky-6: #0284c7;--sky-7: #0369a1;--sky-8: #075985;--sky-9: #0c4a6e;--sky-10: #082f49;--blue-0: #eff6ff;--blue-1: #dbeafe;--blue-2: #bfdbfe;--blue-3: #93c5fd;--blue-4: #60a5fa;--blue-5: #3b82f6;--blue-6: #2563eb;--blue-7: #1d4ed8;--blue-8: #1e40af;--blue-9: #1e3a8a;--blue-10: #172554;--indigo-0: #eef2ff;--indigo-1: #e0e7ff;--indigo-2: #c7d2fe;--indigo-3: #a5b4fc;--indigo-4: #818cf8;--indigo-5: #6366f1;--indigo-6: #4f46e5;--indigo-7: #4338ca;--indigo-8: #3730a3;--indigo-9: #312e81;--indigo-10: #1e1b4b;--violet-0: #f5f3ff;--violet-1: #ede9fe;--violet-2: #ddd6fe;--violet-3: #c4b5fd;--violet-4: #a78bfa;--violet-5: #8b5cf6;--violet-6: #7c3aed;--violet-7: #6d28d9;--violet-8: #5b21b6;--violet-9: #4c1d95;--violet-10: #2e1065;--purple-0: #faf5ff;--purple-1: #f3e8ff;--purple-2: #e9d5ff;--purple-3: #d8b4fe;--purple-4: #c084fc;--purple-5: #a855f7;--purple-6: #9333ea;--purple-7: #7e22ce;--purple-8: #6b21a8;--purple-9: #581c87;--purple-10: #3b0764;--fuchsia-0: #fdf4ff;--fuchsia-1: #fae8ff;--fuchsia-2: #f5d0fe;--fuchsia-3: #f0abfc;--fuchsia-4: #e879f9;--fuchsia-5: #d946ef;--fuchsia-6: #c026d3;--fuchsia-7: #a21caf;--fuchsia-8: #86198f;--fuchsia-9: #701a75;--fuchsia-10: #4a044e;--pink-0: #fdf2f8;--pink-1: #fce7f3;--pink-2: #fbcfe8;--pink-3: #f9a8d4;--pink-4: #f472b6;--pink-5: #ec4899;--pink-6: #db2777;--pink-7: #be185d;--pink-8: #9d174d;--pink-9: #831843;--pink-10: #500724}body{font-family:Montserrat,sans-serif;color:var(--text-color)}h1{font-size:1.8rem}h2{font-size:1.7rem}h3{font-size:1.5rem}h4{font-size:1.3rem}h5,p,span,li{font-size:1rem}p{line-height:1.4}.line-break-item:not(:last-child){margin-bottom:1rem}.line-break{display:grid;gap:1rem}.flex{display:flex;gap:10px}.flex-align-start{display:flex;align-items:start;gap:10px}.flex-align-center{display:flex;align-items:center;gap:5px}.flex-space-between{display:flex;justify-content:space-between}hr{border-color:var(--slate-5);margin:15px}.cursor-pointer{cursor:pointer}:root{--header: max-content;--background-color: var(--slate-1);--text-color: var(--slate-8);--surface-text-color: #111;--menu-button: var(--slate-8);--icon-invert: 0;--padding: 5px;--gap: 5px;--border: 1px solid rgb(203, 203, 203);--border-radius: 5px;--box-shadow: 0 0 2px rgba(0, 0, 0, .342);--icon: 21px}[data-theme=dark]{--background-color: #0d0f12;--text-color: #fff;--surface-text-color: #111;--menu-button: var(--slate-2)}:host(:not(wc-button)){width:100%}html,body{height:100%}body{max-width:1100px;margin:0 auto;background-color:var(--background-color)}.layout{height:100dvh;padding:var(--padding);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr auto;gap:var(--gap);grid-template-areas:"header header" "nav main" "footer footer"}header{grid-area:header;border:1px solid var(--gray-4);border-radius:var(--border-radius);display:flex;justify-content:space-between;align-items:center;min-height:36px}.header-logo{transform:translate(5px,1px);display:flex;align-items:center;gap:15px;font-family:Impact,Haettenschweiler,Arial Narrow Bold,sans-serif;text-decoration:none;font-size:1.1rem;color:var(--text-color)}#menu{margin-left:4px}.main-shell{grid-area:main;min-width:0;min-height:0;position:relative}main{overflow-y:auto;transition:margin-left .5s ease;height:100%;min-width:0}main.has-scroll{padding-right:5px}#app{height:100%}#app>.page{opacity:1;transition:opacity 1s ease}#app.is-fading>.page{opacity:0}footer{grid-area:footer;border:1px solid var(--gray-4);border-radius:var(--border-radius);padding:var(--padding);text-align:center}svg{filter:invert(var(--icon-invert))}input{padding:3px}code{border:1px solid var(--slate-3);padding:0 1px;font-family:Courier New,Courier,monospace;background-color:var(--slate-1);color:var(--surface-text-color);border-radius:var(--border-radius)}table{border:1px solid;border-collapse:collapse;border-radius:var(--border-radius)}td{border:1px solid;padding:1px 5px}wc-icon[name=scrollToTop]{position:absolute;right:5px;top:5px;cursor:pointer;background-color:#fff;border-radius:50%;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease}wc-icon[name=scrollToTop].visible{opacity:1;pointer-events:auto;transform:translateY(0)}@media not (max-width:701px){#menu{display:none}}.navbar{grid-area:nav;box-sizing:border-box;height:100%;min-height:0;padding:5px;background-color:var(--background-color);border:1px solid var(--gray-4);border-radius:var(--border-radius);font-family:Bebas Neue,sans-serif;font-size:1.4rem;overflow-y:auto;z-index:99;transition:margin-left .5s ease}.navbar__icon__alignement{display:flex;align-items:center;gap:7px}.section-icon{display:flex;align-items:center;gap:5px;margin-bottom:2px}.navbar__section,.navbar__category{font-size:1.3rem}.navbar__icon__size{width:20px}.navbar li:not(:last-child){margin-bottom:.2rem}.navbar__category{transform:translateY(1px)}.navbar a{text-decoration:none;font-size:1.3rem;color:inherit;transition:color .2s ease}.navbar a:hover{color:var(--slate-4)}.navbar a[aria-current=page]{color:var(--slate-5)}.navbar summary{list-style:none;cursor:pointer;display:flex;align-items:center;font-size:1.3rem}.navbar summary::-webkit-details-marker{display:none}.navbar summary:before{font-family:Material Symbols Outlined;content:"keyboard_arrow_right";font-size:1.5rem;transition:transform .2s ease}.navbar details[open]>summary:before{transform:rotate(90deg)}.navbar__modules{display:flex;flex-direction:column;gap:7px;margin-block:3px}.navbar__global,.navbar__module,.navbar__label{border-left:3px solid var(--slate-4);padding-left:5px;font-size:1.2rem!important}.navbar__module a{font-size:1.2rem}img[src*="tools.svg"]{width:22px;margin:0 0 0 2px}img[src*="ide.svg"]{width:23px}.invert{filter:invert(1)}@media(max-width:700px){.navbar{margin-left:-265px;position:fixed;top:45px;bottom:5px;width:min(260px,calc(100vw - 10px));height:auto;max-height:none}.navbar.visible{margin-left:0}}',ne=`
  p {
    
  }
`;class ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${ae}
        ${ne}
      </style>
      <p>It's a component.</p>
      `}}customElements.define("wc-component",ie);customElements.define("wc-icon",K);customElements.define("wc-button",oe);const re=[{href:"/",label:"Home"},{href:"/resources",label:"Resources"}],se=[{icon:"/assets/images/icons/tools.svg",section:"Tools",categories:[{icon:"/assets/images/icons/ide.svg",category:"IDEs",labels:[{href:"/tools/ide/vs-code",label:"VS Code"}]},{icon:"/assets/images/icons/git.svg",category:"Git",labels:[{href:"/tools/ide/git",label:"Git"}]}]}],le=[{icon:"/assets/images/icons/design.svg",section:"Design",categories:[{icon:"/assets/images/icons/ux.svg",category:"UX",modules:[{href:"/design/ux/...",module:"Thinking & User Psychology",description:""},{href:"/design/ux/...",module:"User Research & Problem Framing",description:""},{href:"/design/ux/...",module:"Information Architecture",description:"User Flows & Interaction Design"},{href:"/design/ux/...",module:"Usability & Accessibility",description:""},{href:"/design/ux/...",module:"UX Evaluation & Iteration"}]},{icon:"/assets/images/icons/ui.svg",category:"UI",modules:[{href:"/design/ui/...",module:"Visual Hierarchy & Layout Principles",description:""},{href:"/design/ui/...",module:"... Systems",description:""},{href:"/design/ui/...",module:"Color Systems & Theming",description:""},{href:"/design/ui/...",module:"Spacing & Layout Systems",description:""},{href:"/design/ui/...",module:"Component Design",description:""},{href:"/design/ui/...",module:"Design Systems & Tokens",description:""},{href:"/design/ui/...",module:"Responsive & Adaptive UI",description:""}]}]}],de=[{icon:"/assets/images/icons/frontend.svg",section:"Frontend",categories:[{icon:"/assets/images/icons/html5.svg",category:"HTML",modules:[{href:"/frontend/html/resources",module:"Resources"},{href:"/frontend/html/module-1",module:"Document Foundations",description:"Understand how HTML documents are structured, including elements, tags, and the basic page skeleton used to build every webpage."},{href:"/frontend/html/module-2",module:"Text and Content Structure",description:"Learn how to organize textual content using headings, paragraphs, emphasis, and semantic text elements for readable and accessible pages."},{href:"/frontend/html/module-3",module:"Lists, Links & Navigation",description:"Create navigation systems using lists and hyperlinks to connect pages and improve user navigation."},{href:"/frontend/html/module-4",module:"Semantic Layout",description:"Build meaningful page layouts using semantic elements that improve structure, SEO, and accessibility."},{href:"/frontend/html/module-5",module:"Media & Embedded Content",description:"Add images, audio, video, and external content to webpages while maintaining accessibility and performance."},{href:"/frontend/html/module-6",module:"Forms & Data Submission",description:"Create interactive forms to collect user input and understand how data is structured for submission."},{href:"/frontend/html/module-7",module:"Accessibility & SEO",description:"Learn how to build accessible webpages using semantic HTML, ARIA roles, and SEO best practices to improve usability, discoverability, and overall user experience."},{href:"/frontend/html/module-8",module:"SVG",description:""}]},{icon:"/assets/images/icons/css.svg",category:"CSS",modules:[{href:"/frontend/css/resources",module:"Resources"},{href:"/frontend/css/module-1",module:"Core Fundamentals",description:"Learn how CSS applies styles to HTML using selectors, properties, and the cascade to control presentation."},{href:"/frontend/css/module-2",module:"Box Model & Spacing",description:"Understand margins, padding, borders, and sizing to control layout spacing and element dimensions."},{href:"/frontend/css/module-3",module:"Typography & Color",description:"Style text using fonts, sizes, colors, and readability techniques to create visually balanced interfaces."},{href:"/frontend/css/module-4",module:"Positioning & Layering",description:"Control element positioning using relative, absolute, fixed, and stacking context concepts."},{href:"/frontend/css/module-5",module:"Flexbox",description:"Build flexible one‑dimensional layouts using alignment, distribution, and responsive flex properties."},{href:"/frontend/css/module-6",module:"Grid",description:"Create complex two‑dimensional layouts using CSS Grid for precise placement and responsive design."},{href:"/frontend/css/module-7",module:"Responsive Design",description:"Adapt layouts across devices using media queries, fluid units, and mobile‑first techniques."},{href:"/frontend/css/module-8",module:"CSS Architecture & Methodologies",description:"Organize scalable styles using methodologies like BEM and utility patterns, understanding how to structure CSS for maintainability and large applications."},{href:"/frontend/css/module-9",module:"Transitions & Animation",description:"Add motion and interaction using CSS transitions, transforms, and keyframe animations."}]},{icon:"/assets/images/icons/javascript.svg",category:"Javascript",modules:[{href:"/frontend/js/resources",module:"Resources"},{href:"/frontend/js/module-1",module:"Language Basics",description:"Understand variables, data types, and operators to write fundamental JavaScript logic."},{href:"/frontend/js/module-2",module:"Control Flow",description:"Use conditionals and loops to control program execution and handle decision making."},{href:"/frontend/js/module-3",module:"Functions",description:"Create reusable logic using function declarations, expressions, and arrow functions."},{href:"/frontend/js/module-4",module:"Data Structures",description:"Work with arrays and objects to organize and manipulate structured data."},{href:"/frontend/js/module-5",module:"Modern JS & Modules",description:"Organize applications using ES modules, imports, exports, and modern JavaScript syntax."},{href:"/frontend/js/module-6",module:"DOM Manipulation",description:"Interact with webpage elements by selecting, creating, and updating the DOM dynamically."},{href:"/frontend/js/module-7",module:"Events",description:"Handle user interactions using event listeners and event‑driven programming concepts."},{href:"/frontend/js/module-8",module:"Browser Environment & Event Loop",description:"Understand how JavaScript runs inside the browser, including the call stack, task queues, and the event loop that powers asynchronous behavior."},{href:"/frontend/js/module-9",module:"Asynchronous JS",description:"Manage asynchronous behavior using callbacks, promises, and async/await."},{href:"/frontend/js/module-10",module:"APIs & Fetch",description:"Retrieve and send data using HTTP requests and the Fetch API."},{href:"/frontend/js/module-11",module:"State & Architecture",description:"Learn how to manage application state and organize code structure using modular patterns and architectural principles for scalable interfaces."},{href:"/frontend/js/module-12",module:"SPA & Application Architecture",description:"Build a client-side rendered Single Page Application, understanding routing, layout composition, and how application pieces work together as a cohesive system."}]}]},{icon:"/assets/images/icons/backend.svg",section:"Backend",categories:[{icon:"/assets/images/icons/nodejs.svg",category:"Node JS",modules:[{href:"/backend/node-js/module-1",module:"...",description:"..."}]}]}],ce=[{icon:"/assets/images/icons/ai.svg",section:"AI",categories:[{icon:"/assets/images/icons/text.svg",category:"Prompts",labels:[{href:"/ai/prompts/dev-prompts",label:"Dev Prompts"}]}]}],fe=[{icon:"/assets/images/icons/misc.svg",section:"Miscellaneous",categories:[{icon:"/assets/images/icons/job.svg",category:"Jobs",labels:[{href:"/misc/jobs/common-questions-and-answers",label:"Common Questions & Answers"},{href:"/misc/jobs/javascript",label:"Javascript"}]}]}],pe=document.querySelector("#navbar-links"),I=(e=[])=>e.map((t,a)=>"module"in t?a===0?`
              <li class="navbar__module">
                <a href="${t.href}">${t.module}</a>
              </li>
            `:`
              <li class="navbar__module">
                <a href="${t.href}">Module ${a} • ${t.module}</a>
              </li>
            `:`
        <li class="navbar__label">
          <a href="${t.href}" class="navbar__icon__alignement">
            ${t.labelIcon?`<img src="${t.labelIcon}" class="navbar__icon__size" />`:""}
            ${t.label}
          </a>
        </li>
      `).join(""),me=(e=[])=>e.map(t=>{const a=t.modules??t.labels??[];return`
          <li>
            <details>
              <summary>
                <div class="navbar__icon__alignement">
                  ${t.icon?`<img src="${t.icon}" class="navbar__icon__size ${t.category==="Three JS"?"invert":""}" />`:""}
                  <span class="navbar__category">${t.category}</span>
                </div>
              </summary>

              <ul class="navbar__modules">
                ${I(a)}
              </ul>
            </details>
          </li>
        `}).join(""),u=(e,t="section-icon")=>e.labels?`
      <div class="line-break-item">
        <div class="${t}">
          <img src="${e.icon}" />
          <span class="navbar__section">${e.section}</span>
        </div>

        <ul class="flex-align-center">
          ${I(e.labels)}
        </ul>
      </div>
    `:`
    <div class="line-break-item">
      <div class="${t}">
        <img src="${e.icon}" />
        <span class="navbar__section">${e.section}</span>
      </div>

      ${me(e.categories)}
    </div>
  `;pe.innerHTML=`
  <div class="line-break">

    <!-- Global pages (Home / Resources / ...) -->
    <div class="line-break-item">
      <ul class="navbar__globals">
        ${re.map(e=>`
            <li class="navbar__global">
              <a href="${e.href}">${e.label}</a>
            </li>
          `).join("")}
      </ul>
    </div>

    <!-- Tools -->
    ${se.filter(e=>e.section).map(e=>u(e)).join("")}

      <!-- UI / UX Design -->
    ${le.filter(e=>e.section).map(e=>u(e)).join("")}
    
    <!-- Full-Stack Roadmap -->
    ${de.filter(e=>e.section).map(e=>u(e)).join("")}

    <!-- Artificial Intelligence -->
    ${ce.filter(e=>e.section).map(e=>u(e,"flex-align-center")).join("")}

    <!-- Miscellaneous -->
    ${fe.filter(e=>e.section).map(e=>u(e,"flex-align-center")).join("")}
  </div>
`;const S=localStorage.getItem("theme")||"light";document.body.setAttribute("data-theme",S);function ue(){const e=document.querySelector("wc-button[icon='darkMode']");e&&(e.setAttribute("icon",S==="dark"?"lightMode":"darkMode"),e.addEventListener("click",()=>{const a=document.body.getAttribute("data-theme")==="dark"?"light":"dark";document.body.setAttribute("data-theme",a),localStorage.setItem("theme",a),e.setAttribute("icon",a==="dark"?"lightMode":"darkMode")}))}function y(e){e&&e.querySelectorAll("details").forEach(t=>{t.removeAttribute("open")})}function ge(){const e=document.querySelector("wc-button[icon='menu']"),t=document.querySelector("nav");!e||!t||(e.addEventListener("nav-click",()=>{const a=t.classList.toggle("visible");e.toggleHamIcon(a),a||y(t)}),t.addEventListener("click",a=>{a.target.tagName==="A"&&(t.classList.remove("visible"),e.toggleHamIcon(!1),y(t))}))}function he(){const e=document.querySelector("nav"),t=document.querySelector("wc-button[icon='menu']");if(!e||!t)return;const a=window.matchMedia("(max-width: 700px)");function r(n){n.matches||(e.classList.remove("visible"),t.toggleHamIcon(!1),y(e))}a.addEventListener("change",r),r(a)}ue();ge();he();const w=document.querySelector("main"),h=document.querySelector("wc-icon[name='scrollToTop']");function P(){h&&(w.scrollTop>300?h.classList.add("visible"):h.classList.remove("visible"))}w.addEventListener("scroll",P);P();h?.addEventListener("click",()=>{w.scrollTo({top:0,behavior:"smooth"})});export{o as _,ce as a,ee as c,le as d,de as f,re as g,fe as m,ae as s,se as t};
