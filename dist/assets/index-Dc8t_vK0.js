const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Boilerplate-ByARSc8v.js","assets/styles-DlIJiwEK.js","assets/PageHeader-D9g-7skL.js","assets/renderSection-CSqRZScD.js","assets/CardIcon-BlOxVlIS.js","assets/LessonNav-BMvgDSVs.js","assets/Links-jvN2lMqa.js","assets/404-BM2HSxK_.js","assets/Home-q_IWWAsS.js","assets/Card-ejHzky1x.js","assets/Resources-CkLJJRS-.js","assets/AtomicDesign-RPagpA15.js","assets/Resources-CfWVwDTm.js","assets/ModuleOne-CJnnNX80.js","assets/ModuleTwo-C4xKLtUQ.js","assets/ModuleThree-DnqMZBxP.js","assets/ModuleFour-DrHpJaqD.js","assets/ModuleFive-BeLcZOvD.js","assets/ModuleSix-CvT_KDUO.js","assets/ModuleSeven-C31sFVFR.js","assets/Resources-2TQO_Lon.js","assets/ModuleOne-Dt2bBhEZ.js","assets/ModuleTwo-Dz3yxOy2.js","assets/ModuleThree-Dz3AzA--.js","assets/ModuleFour-Bwb4wFIw.js","assets/ModuleFive-Cyg8qJFp.js","assets/ModuleSix-CPuX6iz8.js","assets/ModuleSeven-DiK-jgpL.js","assets/ModuleEight-ChUGMP2r.js","assets/ModuleNine-BDKohAJd.js","assets/Resources-C7s4XyS8.js","assets/ModuleOne-COhDHNjH.js","assets/ModuleTwo-BM6XPwp5.js","assets/ModuleThree-B0V3tmAR.js","assets/ModuleFour-LecZ9vIa.js","assets/ModuleFive-CeldGeGb.js","assets/ModuleSix-Bc2sPtnL.js","assets/ModuleSeven-Ckeb36LY.js","assets/ModuleEight-rXTMY0l6.js","assets/ModuleNine-DMN9cU1q.js","assets/ModuleTen-wo-PMUrF.js","assets/ModuleEleven-DUr8GEj7.js","assets/ModuleTwelve-tiAqD17W.js","assets/ModuleOne-DdZjtEIj.js","assets/ModuleOne-D1kkb62g.js","assets/DevPrompts-AxfC25LX.js","assets/CommonQuestionsAndAnswers-BRuY0nde.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const A="modulepreload",j=function(e){return"/"+e},v={},o=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let L=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=L(n.map(d=>{if(d=j(d),d in v)return;v[d]=!0;const m=d.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":A,m||(c.as="script"),c.crossOrigin="",c.href=d,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((q,k)=>{c.addEventListener("load",q),c.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},P=`
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
`;class M extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>${P}</style>
      <div class="loading-container">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>
    `}}customElements.define("wc-loading",M);const p={"/boilerplate":{tag:"wc-boilerplate",load:()=>o(()=>import("./Boilerplate-ByARSc8v.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},404:{tag:"wc-404",load:()=>o(()=>import("./404-BM2HSxK_.js"),__vite__mapDeps([7,1]))},"/":{tag:"wc-home",load:()=>o(()=>import("./Home-q_IWWAsS.js"),__vite__mapDeps([8,1,2,9]))},"/resources":{tag:"wc-resources",load:()=>o(()=>import("./Resources-CkLJJRS-.js"),__vite__mapDeps([10,1,2,3,5,6]))},"/frontend/architecture/atomic-design":{tag:"wc-atomic-design",load:()=>o(()=>import("./AtomicDesign-RPagpA15.js"),__vite__mapDeps([11,1,2,3,9]))},"/frontend/html/resources":{tag:"wc-html-resources",load:()=>o(()=>import("./Resources-CfWVwDTm.js"),__vite__mapDeps([12,1,2,3,4,5,6]))},"/frontend/html/module-1":{tag:"wc-html-module-one",load:()=>o(()=>import("./ModuleOne-CJnnNX80.js"),__vite__mapDeps([13,1,2,3,4,5,6]))},"/frontend/html/module-2":{tag:"wc-html-module-two",load:()=>o(()=>import("./ModuleTwo-C4xKLtUQ.js"),__vite__mapDeps([14,1,2,3,5]))},"/frontend/html/module-3":{tag:"wc-html-module-three",load:()=>o(()=>import("./ModuleThree-DnqMZBxP.js"),__vite__mapDeps([15,1,2,3,5]))},"/frontend/html/module-4":{tag:"wc-html-module-four",load:()=>o(()=>import("./ModuleFour-DrHpJaqD.js"),__vite__mapDeps([16,1,2,3,5]))},"/frontend/html/module-5":{tag:"wc-html-module-five",load:()=>o(()=>import("./ModuleFive-BeLcZOvD.js"),__vite__mapDeps([17,1,2,3,5]))},"/frontend/html/module-6":{tag:"wc-html-module-six",load:()=>o(()=>import("./ModuleSix-CvT_KDUO.js"),__vite__mapDeps([18,1,2,3,5]))},"/frontend/html/module-7":{tag:"wc-html-module-seven",load:()=>o(()=>import("./ModuleSeven-C31sFVFR.js"),__vite__mapDeps([19,1,2,3,5,6]))},"/frontend/css/resources":{tag:"wc-css-resources",load:()=>o(()=>import("./Resources-2TQO_Lon.js"),__vite__mapDeps([20,1,2,3,5,6]))},"/frontend/css/module-1":{tag:"wc-css-module-one",load:()=>o(()=>import("./ModuleOne-Dt2bBhEZ.js"),__vite__mapDeps([21,1,2,3,4,5,6]))},"/frontend/css/module-2":{tag:"wc-css-module-two",load:()=>o(()=>import("./ModuleTwo-Dz3yxOy2.js"),__vite__mapDeps([22,1,2,3,4,5,6]))},"/frontend/css/module-3":{tag:"wc-css-module-three",load:()=>o(()=>import("./ModuleThree-Dz3AzA--.js"),__vite__mapDeps([23,1,2,3,4,5,6]))},"/frontend/css/module-4":{tag:"wc-css-module-four",load:()=>o(()=>import("./ModuleFour-Bwb4wFIw.js"),__vite__mapDeps([24,1,2,3,5,6]))},"/frontend/css/module-5":{tag:"wc-css-module-five",load:()=>o(()=>import("./ModuleFive-Cyg8qJFp.js"),__vite__mapDeps([25,1,2,3,5]))},"/frontend/css/module-6":{tag:"wc-css-module-six",load:()=>o(()=>import("./ModuleSix-CPuX6iz8.js"),__vite__mapDeps([26,1,2,3,5]))},"/frontend/css/module-7":{tag:"wc-css-module-seven",load:()=>o(()=>import("./ModuleSeven-DiK-jgpL.js"),__vite__mapDeps([27,1,2,3,5]))},"/frontend/css/module-8":{tag:"wc-css-module-eight",load:()=>o(()=>import("./ModuleEight-ChUGMP2r.js"),__vite__mapDeps([28,1,2,3,5,6]))},"/frontend/css/module-9":{tag:"wc-css-module-nine",load:()=>o(()=>import("./ModuleNine-BDKohAJd.js"),__vite__mapDeps([29,1,2,3,5]))},"/frontend/js/resources":{tag:"wc-js-resources",load:()=>o(()=>import("./Resources-C7s4XyS8.js"),__vite__mapDeps([30,1,2,3,5,6]))},"/frontend/js/module-1":{tag:"wc-js-module-one",load:()=>o(()=>import("./ModuleOne-COhDHNjH.js"),__vite__mapDeps([31,1,2,3,5]))},"/frontend/js/module-2":{tag:"wc-js-module-two",load:()=>o(()=>import("./ModuleTwo-BM6XPwp5.js"),__vite__mapDeps([32,1,2,3,5]))},"/frontend/js/module-3":{tag:"wc-js-module-three",load:()=>o(()=>import("./ModuleThree-B0V3tmAR.js"),__vite__mapDeps([33,1,2,3,5]))},"/frontend/js/module-4":{tag:"wc-js-module-four",load:()=>o(()=>import("./ModuleFour-LecZ9vIa.js"),__vite__mapDeps([34,1,2,3,5]))},"/frontend/js/module-5":{tag:"wc-js-module-five",load:()=>o(()=>import("./ModuleFive-CeldGeGb.js"),__vite__mapDeps([35,1,2,3,5]))},"/frontend/js/module-6":{tag:"wc-js-module-six",load:()=>o(()=>import("./ModuleSix-Bc2sPtnL.js"),__vite__mapDeps([36,1,2,3,5]))},"/frontend/js/module-7":{tag:"wc-js-module-seven",load:()=>o(()=>import("./ModuleSeven-Ckeb36LY.js"),__vite__mapDeps([37,1,2,3,5]))},"/frontend/js/module-8":{tag:"wc-js-module-eight",load:()=>o(()=>import("./ModuleEight-rXTMY0l6.js"),__vite__mapDeps([38,1,2,3,5]))},"/frontend/js/module-9":{tag:"wc-js-module-nine",load:()=>o(()=>import("./ModuleNine-DMN9cU1q.js"),__vite__mapDeps([39,1,2,3,5]))},"/frontend/js/module-10":{tag:"wc-js-module-ten",load:()=>o(()=>import("./ModuleTen-wo-PMUrF.js"),__vite__mapDeps([40,1,2,3,5]))},"/frontend/js/module-11":{tag:"wc-js-module-eleven",load:()=>o(()=>import("./ModuleEleven-DUr8GEj7.js"),__vite__mapDeps([41,1,2,3,5]))},"/frontend/js/module-12":{tag:"wc-js-module-twelve",load:()=>o(()=>import("./ModuleTwelve-tiAqD17W.js"),__vite__mapDeps([42,1,2,3,5]))},"/backend/node-js/module-1":{tag:"wc-node-js-module-one",load:()=>o(()=>import("./ModuleOne-DdZjtEIj.js"),__vite__mapDeps([43,1,2,3,4,5,6]))},"/tools/git/module-1":{tag:"wc-git-module-one",load:()=>o(()=>import("./ModuleOne-D1kkb62g.js"),__vite__mapDeps([44,1,2,3,9,6]))},"/ai/prompts/dev-prompts":{tag:"wc-dev-prompts",load:()=>o(()=>import("./DevPrompts-AxfC25LX.js"),__vite__mapDeps([45,1,2,3,4,5,6]))},"/misc/jobs/common-questions-and-answers":{tag:"wc-jobs-common-questions-answers",load:()=>o(()=>import("./CommonQuestionsAndAnswers-BRuY0nde.js"),__vite__mapDeps([46,1,2,3,4,9,6]))}};let _=null,b=0;function S(){document.querySelectorAll("a[data-link]").forEach(t=>{t.getAttribute("href")===window.location.pathname?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}async function h(){const e=document.querySelector("#app");let t=window.location.pathname;if(t=t.toLowerCase(),p[t]||(t=404),t===_)return;_=t;const{tag:n,load:r}=p[t];//! Increase token to invalidate older navigations (race condition protection)
const s=++b;if(e.classList.add("is-fading"),await Promise.race([new Promise(a=>{const l=()=>{e.removeEventListener("transitionend",l),a()};e.addEventListener("transitionend",l)}),new Promise(a=>setTimeout(a,200))]),e.replaceChildren(document.createElement("wc-loading")),await new Promise(requestAnimationFrame),await r(),s!==b)return;const i=document.createElement(n);i.classList.add("page"),e.replaceChildren(i),await new Promise(requestAnimationFrame),e.classList.remove("is-fading"),S(),window.scrollTo({top:0,behavior:"smooth"})}const g=new Set;function w(e){p[e]&&(g.has(e)||(g.add(e),p[e].load().catch(t=>{console.warn(`Falha no prefetch de ${e}:`,t),g.delete(e)})))}document.addEventListener("mouseenter",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");t&&w(t.getAttribute("href"))},!0);document.addEventListener("focusin",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");t&&w(t.getAttribute("href"))});function I(e){window.history.pushState({},"",e),h()}window.addEventListener("popstate",h);document.addEventListener("DOMContentLoaded",h);document.addEventListener("click",e=>{if(!(e.target instanceof Element))return;const t=e.target.closest("[data-link]");if(!t||t.origin!==location.origin)return;e.preventDefault();const n=t.getAttribute("href");I(n)});const O="#000",R=()=>`
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
`,Z=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="22">
    height="22"
    <path
      d="M9.783740000000002 1.7569125c-0.4165325 -0.12006 -0.8502175 0.12251000000000001 -0.9702775000000001 0.5390425L5.6772175 13.2728125c-0.1200575 0.4165325 0.12251000000000001 0.850215 0.5390425 0.970275s0.8502175 -0.12251000000000001 0.9702775000000001 -0.5390425l3.136245 -10.976857500000001c0.1200575 -0.4165325 -0.12251000000000001 -0.850215 -0.5390425 -0.970275Zm1.9748525000000001 2.94268c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.1099375L13.946615000000001 8l-2.1904725 2.1904725c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.109935s0.8036625000000002 0.306275 1.1099375 0l2.7442150000000005 -2.7442150000000005c0.3062725 -0.3062725 0.3062725 -0.8036625000000002 0 -1.109935L12.86608 4.7020425c-0.306275 -0.306275 -0.8036625000000002 -0.306275 -1.1099375 0Zm-7.514735000000001 0c-0.306275 -0.306275 -0.8036625000000002 -0.306275 -1.1099375 0L0.389705 7.4438075c-0.3062725 0.3062725 -0.3062725 0.8036625000000002 0 1.109935l2.7442150000000005 2.7442150000000005c0.306275 0.306275 0.8036625000000002 0.306275 1.1099375 0s0.3062725 -0.8036625000000002 0 -1.1099375L2.053385 8l2.1904725 -2.1904725c0.3062725 -0.3062725 0.3062725 -0.8036625000000002 0 -1.109935Z" fill="#999999" stroke-width="0.025">
    </path>
  </svg>
`,D=()=>`
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
`,$=()=>`
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="#999999">
    <path
      d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>
    </svg>
`,y=`
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
`,H=()=>`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="#999999">
    <path
      d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/>
  </svg>
`,V=()=>`
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
`,E=`
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
`,C=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24px"
    height="24px"
    fill="${O}">
    <path
      d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
    </path>
  </svg>
`,B=()=>`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 -960 960 960"
  width="24px"
  height="24px"
  fill="#999999">
  <path
    d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
</svg>
`,z=()=>`
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
`,F=()=>`
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
`,Q=Object.freeze(Object.defineProperty({__proto__:null,attention:R,backend:$,codeBlock:Z,contents:D,darkMode:y,frontend:H,laptop:V,lightMode:E,menu:C,module:B,scrollToTop:F,section:z},Symbol.toStringTag,{value:"Module"}));class J extends HTMLElement{connectedCallback(){const t=this.getAttribute("name");this.innerHTML=Q[t]?.()??""}}const N='@import"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";@import"https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap";*{margin:0;padding:0;box-sizing:border-box}*,*:before,*:after{box-sizing:border-box}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}img,picture,video,canvas,svg{display:block;max-width:100%}video{aspect-ratio:16 / 9}input,button,textarea,select{font:inherit}a{text-decoration:none}:root{--slate-0: #f8fafc;--slate-1: #f1f5f9;--slate-2: #e2e8f0;--slate-3: #cbd5e1;--slate-4: #94a3b8;--slate-5: #64748b;--slate-6: #475569;--slate-7: #334155;--slate-8: #1e293b;--slate-9: #0f172a;--slate-10: #020617;--gray-0: #f9fafb;--gray-1: #f3f4f6;--gray-2: #e5e7eb;--gray-3: #d1d5db;--gray-4: #9ca3af;--gray-5: #6b7280;--gray-6: #4b5563;--gray-7: #374151;--gray-8: #1f2937;--gray-9: #111827;--gray-10: #030712;--neutral-0: #fafafa;--neutral-1: #f5f5f5;--neutral-2: #e5e5e5;--neutral-3: #d4d4d8;--neutral-4: #a3a3a3;--neutral-5: #737373;--neutral-6: #525252;--neutral-7: #404040;--neutral-8: #262626;--neutral-9: #171717;--neutral-10: #0a0a0a;--red-0: #fef2f2;--red-1: #fee2e2;--red-2: #fecaca;--red-3: #fca5a5;--red-4: #f87171;--red-5: #ef4444;--red-6: #dc2626;--red-7: #b91c1c;--red-8: #991b1b;--red-9: #7f1d1d;--red-10: #450a0a;--orange-0: #fff7ed;--orange-1: #ffedd5;--orange-2: #fed7aa;--orange-3: #fdba74;--orange-4: #fb923c;--orange-5: #f97316;--orange-6: #ea580c;--orange-7: #c2410c;--orange-8: #9a3412;--orange-9: #7c2d12;--orange-10: #431407;--amber-0: #fffbeb;--amber-1: #fef3c7;--amber-2: #fde68a;--amber-3: #fcd34d;--amber-4: #fbbf24;--amber-5: #f59e0b;--amber-6: #d97706;--amber-7: #b45309;--amber-8: #92400e;--amber-9: #78350f;--amber-10: #451a03;--yellow-0: #fefce8;--yellow-1: #fef9c3;--yellow-2: #fef08a;--yellow-3: #fde047;--yellow-4: #facc15;--yellow-5: #eab308;--yellow-6: #ca8a04;--yellow-7: #a16207;--yellow-8: #854d0e;--yellow-9: #713f12;--yellow0-10: #422006;--lime-0: #f7fee7;--lime-1: #ecfccb;--lime-2: #d9f99d;--lime-3: #bef264;--lime-4: #a3e635;--lime-5: #84cc16;--lime-6: #65a30d;--lime-7: #4d7c0f;--lime-8: #3f6212;--lime-9: #365314;--lime-10: #1a2e05;--green-1: #f0fdf4;--green-2: #dcfce7;--green-3: #bbf7d0;--green-4: #86efac;--green-5: #4ade80;--green-6: #22c55e;--green-7: #16a34a;--green-8: #15803d;--green-9: #166534;--green-0: #14532d;--green-10: #052e16;--teal-0: #f0fdfa;--teal-1: #ccfbf1;--teal-2: #99f6e4;--teal-3: #5eead4;--teal-4: #2dd4bf;--teal-5: #14b8a6;--teal-6: #0d9488;--teal-7: #0f766e;--teal-8: #115e59;--teal-9: #134e4a;--teal-10: #042f2e;--cyan-0: #ecfeff;--cyan-1: #cffafe;--cyan-2: #a5f3fc;--cyan-3: #67e8f9;--cyan-4: #22d3ee;--cyan-5: #06b6d4;--cyan-6: #0891b2;--cyan-7: #0e7490;--cyan-8: #155e75;--cyan-9: #164e63;--cyan-10: #083344;--sky-0: #f0f9ff;--sky-1: #e0f2fe;--sky-2: #bae6fd;--sky-3: #7dd3fc;--sky-4: #38bdf8;--sky-5: #0ea5e9;--sky-6: #0284c7;--sky-7: #0369a1;--sky-8: #075985;--sky-9: #0c4a6e;--sky-10: #082f49;--blue-0: #eff6ff;--blue-1: #dbeafe;--blue-2: #bfdbfe;--blue-3: #93c5fd;--blue-4: #60a5fa;--blue-5: #3b82f6;--blue-6: #2563eb;--blue-7: #1d4ed8;--blue-8: #1e40af;--blue-9: #1e3a8a;--blue-10: #172554;--indigo-0: #eef2ff;--indigo-1: #e0e7ff;--indigo-2: #c7d2fe;--indigo-3: #a5b4fc;--indigo-4: #818cf8;--indigo-5: #6366f1;--indigo-6: #4f46e5;--indigo-7: #4338ca;--indigo-8: #3730a3;--indigo-9: #312e81;--indigo-10: #1e1b4b;--violet-0: #f5f3ff;--violet-1: #ede9fe;--violet-2: #ddd6fe;--violet-3: #c4b5fd;--violet-4: #a78bfa;--violet-5: #8b5cf6;--violet-6: #7c3aed;--violet-7: #6d28d9;--violet-8: #5b21b6;--violet-9: #4c1d95;--violet-10: #2e1065;--purple-0: #faf5ff;--purple-1: #f3e8ff;--purple-2: #e9d5ff;--purple-3: #d8b4fe;--purple-4: #c084fc;--purple-5: #a855f7;--purple-6: #9333ea;--purple-7: #7e22ce;--purple-8: #6b21a8;--purple-9: #581c87;--purple-10: #3b0764;--fuchsia-0: #fdf4ff;--fuchsia-1: #fae8ff;--fuchsia-2: #f5d0fe;--fuchsia-3: #f0abfc;--fuchsia-4: #e879f9;--fuchsia-5: #d946ef;--fuchsia-6: #c026d3;--fuchsia-7: #a21caf;--fuchsia-8: #86198f;--fuchsia-9: #701a75;--fuchsia-10: #4a044e;--pink-0: #fdf2f8;--pink-1: #fce7f3;--pink-2: #fbcfe8;--pink-3: #f9a8d4;--pink-4: #f472b6;--pink-5: #ec4899;--pink-6: #db2777;--pink-7: #be185d;--pink-8: #9d174d;--pink-9: #831843;--pink-10: #500724}body{font-family:Montserrat,sans-serif;color:var(--text-color)}h1{font-size:1.8rem}h2{font-size:1.7rem}h3{font-size:1.5rem}h4{font-size:1.3rem}h5,p,span,li{font-size:1rem}p{line-height:1.4}.line-break-item:not(:last-child){margin-bottom:1rem}.line-break{display:grid;gap:1rem}.flex{display:flex;gap:10px}.flex-align-start{display:flex;align-items:start;gap:10px}.flex-align-center{display:flex;align-items:center;gap:5px}hr{border-color:var(--slate-5);margin:15px}',U=`
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
`;class G extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        ${N}
        ${U}
      </style>
      <button></button>
    `,this.button=this.shadowRoot.querySelector("button")}connectedCallback(){this.updateIcon(),this.button.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("nav-click",{bubbles:!0,composed:!0}))})}attributeChangedCallback(t){t==="icon"&&this.updateIcon()}toggleHamIcon(t){const r=this.shadowRoot.querySelector(".ham_menu").querySelectorAll("span");r[0].classList.toggle("line1-active",t),r[1].classList.toggle("line2-active",t),r[2].classList.toggle("line3-active",t)}updateIcon(){const t=this.getAttribute("icon");if(t==="menu")this.button.innerHTML=`
        <div class="ham_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;else{const n={lightMode:E,darkMode:y};this.button.innerHTML=n[t]||""}}}customElements.define("wc-icon",J);customElements.define("wc-button",G);const Y=[{href:"/",label:"Home"},{href:"/resources",label:"Resources"},{href:"/ide",label:"IDE"}],W=[{icon:"/assets/images/icons/frontend.svg",section:"Frontend",categories:[{icon:"/assets/images/icons/html5.svg",category:"HTML",modules:[{href:"/frontend/html/resources",module:"Resources"},{href:"/frontend/html/module-1",module:"Document Foundations",description:"Understand how HTML documents are structured, including elements, tags, and the basic page skeleton used to build every webpage."},{href:"/frontend/html/module-2",module:"Text and Content Structure",description:"Learn how to organize textual content using headings, paragraphs, emphasis, and semantic text elements for readable and accessible pages."},{href:"/frontend/html/module-3",module:"Lists, Links & Navigation",description:"Create navigation systems using lists and hyperlinks to connect pages and improve user navigation."},{href:"/frontend/html/module-4",module:"Semantic Layout",description:"Build meaningful page layouts using semantic elements that improve structure, SEO, and accessibility."},{href:"/frontend/html/module-5",module:"Media & Embedded Content",description:"Add images, audio, video, and external content to webpages while maintaining accessibility and performance."},{href:"/frontend/html/module-6",module:"Forms & Data Submission",description:"Create interactive forms to collect user input and understand how data is structured for submission."},{href:"/frontend/html/module-7",module:"Accessibility & SEO",description:"Learn how to build accessible webpages using semantic HTML, ARIA roles, and SEO best practices to improve usability, discoverability, and overall user experience."}]},{icon:"/assets/images/icons/css.svg",category:"CSS",modules:[{href:"/frontend/css/resources",module:"Resources"},{href:"/frontend/css/module-1",module:"Core Fundamentals",description:"Learn how CSS applies styles to HTML using selectors, properties, and the cascade to control presentation."},{href:"/frontend/css/module-2",module:"Box Model & Spacing",description:"Understand margins, padding, borders, and sizing to control layout spacing and element dimensions."},{href:"/frontend/css/module-3",module:"Typography & Color",description:"Style text using fonts, sizes, colors, and readability techniques to create visually balanced interfaces."},{href:"/frontend/css/module-4",module:"Positioning & Layering",description:"Control element positioning using relative, absolute, fixed, and stacking context concepts."},{href:"/frontend/css/module-5",module:"Flexbox",description:"Build flexible one‑dimensional layouts using alignment, distribution, and responsive flex properties."},{href:"/frontend/css/module-6",module:"Grid",description:"Create complex two‑dimensional layouts using CSS Grid for precise placement and responsive design."},{href:"/frontend/css/module-7",module:"Responsive Design",description:"Adapt layouts across devices using media queries, fluid units, and mobile‑first techniques."},{href:"/frontend/css/module-8",module:"CSS Architecture & Methodologies",description:"Organize scalable styles using methodologies like BEM and utility patterns, understanding how to structure CSS for maintainability and large applications."},{href:"/frontend/css/module-9",module:"Transitions & Animation",description:"Add motion and interaction using CSS transitions, transforms, and keyframe animations."}]},{icon:"/assets/images/icons/javascript.svg",category:"Javascript",modules:[{href:"/frontend/js/resources",module:"Resources"},{href:"/frontend/js/module-1",module:"Language Basics",description:"Understand variables, data types, and operators to write fundamental JavaScript logic."},{href:"/frontend/js/module-2",module:"Control Flow",description:"Use conditionals and loops to control program execution and handle decision making."},{href:"/frontend/js/module-3",module:"Functions",description:"Create reusable logic using function declarations, expressions, and arrow functions."},{href:"/frontend/js/module-4",module:"Data Structures",description:"Work with arrays and objects to organize and manipulate structured data."},{href:"/frontend/js/module-5",module:"Modern JS & Modules",description:"Organize applications using ES modules, imports, exports, and modern JavaScript syntax."},{href:"/frontend/js/module-6",module:"DOM Manipulation",description:"Interact with webpage elements by selecting, creating, and updating the DOM dynamically."},{href:"/frontend/js/module-7",module:"Events",description:"Handle user interactions using event listeners and event‑driven programming concepts."},{href:"/frontend/js/module-8",module:"Browser Environment & Event Loop",description:"Understand how JavaScript runs inside the browser, including the call stack, task queues, and the event loop that powers asynchronous behavior."},{href:"/frontend/js/module-9",module:"Asynchronous JS",description:"Manage asynchronous behavior using callbacks, promises, and async/await."},{href:"/frontend/js/module-10",module:"APIs & Fetch",description:"Retrieve and send data using HTTP requests and the Fetch API."},{href:"/frontend/js/module-11",module:"State & Architecture",description:"Learn how to manage application state and organize code structure using modular patterns and architectural principles for scalable interfaces."},{href:"/frontend/js/module-12",module:"SPA & Application Architecture",description:"Build a client-side rendered Single Page Application, understanding routing, layout composition, and how application pieces work together as a cohesive system."}]}]},{icon:"/assets/images/icons/backend.svg",section:"Backend",categories:[{icon:"/assets/images/icons/nodejs.svg",category:"Node JS",modules:[{href:"/backend/node-js/module-1",module:"...",description:"..."}]}]}],X=[{icon:"/assets/images/icons/ai.svg",section:"AI",categories:[{icon:"/assets/images/icons/text.svg",category:"Prompts",labels:[{href:"/ai/prompts/dev-prompts",label:"Dev Prompts"}]}]}],K=[{icon:"/assets/images/icons/misc.svg",section:"Miscellaneous",categories:[{icon:"/assets/images/icons/job.svg",category:"Jobs",labels:[{href:"/misc/jobs/common-questions-and-answers",label:"Common Questions & Answers"},{href:"/misc/jobs/javascript",label:"Javascript"}]}]}],ee=document.querySelector("#navbar-links");ee.innerHTML=`
  <div class="line-break">

    <!-- Global pages (Home / Resources / ...) -->
    <div class="line-break-item">
      <ul class="navbar__globals">
        ${Y.map(e=>`
            <li class="navbar__global">
              <a href="${e.href}">${e.label}</a>
            </li>
          `).join("")}
      </ul>
    </div>

    <!-- Full-Stack Roadmap -->
    ${W.filter(e=>e.section).map(e=>`
        <div class="line-break-item">
          <div class="section-icon">
            <img src="${e.icon}" />
            <span class="navbar__section">${e.section}</span>
          </div>

          ${e.categories.map(t=>`
              <li>
                <details>
                  <summary>
                    <div class="navbar__icon__category-wrapper">
                      ${t.icon?`<img src="${t.icon}" class="navbar__icon__size ${t.category==="Three JS"?"invert":""}" />`:""}
                      <span class="navbar__category">${t.category}</span>
                    </div>
                  </summary>

                  <ul class="navbar__modules">
                    ${t.modules.map((n,r)=>{const s=r;return s===0?`
                              <li class="navbar__module">
                                <a href="${n.href}">${n.module}</a>
                              </li>
                            `:`
                              <li class="navbar__module">
                                <a href="${n.href}">Module ${s} • ${n.module}</a>
                              </li>`}).join("")}
                  </ul>
                </details>
              </li>
            `).join("")}
        </div>
      `).join("")}

    <!-- Artificial Intelligence -->
    ${X.filter(e=>e.section).map(e=>`
        <div class="line-break-item">
          <div class="flex-align-center">
            <img src="${e.icon}" />
            <span class="navbar__section">${e.section}</span>
          </div>

          ${e.categories.map(t=>`
              <li>
                <details>
                  <summary>
                    <div class="navbar__icon__category-wrapper">
                      ${t.icon?`<img src="${t.icon}" class="navbar__icon__size ${t.category==="Three JS"?"invert":""}" />`:""}
                      <span class="navbar__category">${t.category}</span>
                    </div>
                  </summary>

                  <ul class="navbar__modules">
                    ${t.labels.map(n=>`
                              <li class="navbar__module">
                                <a href="${n.href}">${n.label}</a>
                              </li>
                            `).join("")}
                  </ul>
                </details>
              </li>
            `).join("")}
        </div>
      `).join("")}

    <!-- Miscellaneous -->
    ${K.filter(e=>e.section).map(e=>`
        <div class="line-break-item">
          <div class="flex-align-center">
            <img src="${e.icon}" />
            <span class="navbar__section">${e.section}</span>
          </div>

          ${e.categories.map(t=>`
              <li>
                <details>
                  <summary>
                    <div class="navbar__icon__category-wrapper">
                      ${t.icon?`<img src="${t.icon}" class="navbar__icon__size ${t.category==="Three JS"?"invert":""}" />`:""}
                      <span class="navbar__category">${t.category}</span>
                    </div>
                  </summary>

                  <ul class="navbar__modules">
                    ${t.labels.map(n=>`
                              <li class="navbar__module">
                                <a href="${n.href}">${n.label}</a>
                              </li>
                            `).join("")}
                  </ul>
                </details>
              </li>
            `).join("")}
        </div>
      `).join("")}

    

  </div>
`;const T=localStorage.getItem("theme")||"light";document.body.setAttribute("data-theme",T);function te(){const e=document.querySelector("wc-button[icon='darkMode']");e&&(e.setAttribute("icon",T==="dark"?"lightMode":"darkMode"),e.addEventListener("click",()=>{const n=document.body.getAttribute("data-theme")==="dark"?"light":"dark";document.body.setAttribute("data-theme",n),localStorage.setItem("theme",n),e.setAttribute("icon",n==="dark"?"lightMode":"darkMode")}))}function oe(){const e=document.querySelector("wc-button[icon='menu']"),t=document.querySelector("nav");!e||!t||(e.addEventListener("nav-click",()=>{const n=t.classList.toggle("visible");e.toggleHamIcon(n)}),t.addEventListener("click",n=>{n.target.tagName==="A"&&(t.classList.remove("visible"),e.toggleHamIcon(!1))}))}function ne(){const e=document.querySelector("nav");if(!e)return;const t=window.matchMedia("(max-width: 700px)");function n(r){r.matches&&e.classList.remove("visible")}t.addEventListener("change",n),n(t)}te();oe();ne();const f=document.querySelector("wc-icon[name='scrollToTop']");function x(){f&&(window.scrollY>300?f.classList.add("visible"):f.classList.remove("visible"))}window.addEventListener("scroll",x);x();f?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{N as c,W as f,Y as g,K as m};
