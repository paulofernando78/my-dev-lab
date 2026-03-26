import{s as t}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as o,s}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./CardCode-yhvPs5fJ.js";import"./Links-FCbr7Lwo.js";import"./Code-fMuPM1Lh.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const r=`
  
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",label:"MDN | HTML: HyperText Markup Language"},{href:"https://html.spec.whatwg.org/",label:"HTML | Living Standard"},{href:"https://htmlreference.io/",label:"HTML | Reference IO"},{href:"https://htmldog.com/",label:"HTML DOG"},{href:"https://www.w3schools.com/html/default.asp",label:"W3 School"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=HD13eq_Pmp8",label:"Bro Code | Learn HTML in 1 hour"},{href:"https://www.youtube.com/watch?v=qz0aGYrrlhU",label:"Programming with Mosh | HTML Tutorial for Beginners: HTML Crash Course (1:09:33)"},{href:"https://www.youtube.com/watch?v=mJgBOIoGihA",label:"Dave Gray HTML Full Course for Beginners | Complete All-in-One Tutoria… (4:07:33)"},{href:"",label:""}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${r}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,e)}}customElements.define("wc-frontend-html-resources",n);export{n as default};
