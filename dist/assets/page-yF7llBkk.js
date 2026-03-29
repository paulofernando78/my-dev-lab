import{s as t}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as o,s}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./CardCode-DTGEN7ch.js";import"./Links-jNmpqXk5.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";const r=`
  
`;class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"links",sectionLabel:"Links",links:[{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",label:"MDN | HTML: HyperText Markup Language"},{href:"https://html.spec.whatwg.org/",label:"HTML | Living Standard"},{href:"https://htmlreference.io/",label:"HTML | Reference IO"},{href:"https://htmldog.com/",label:"HTML DOG"},{href:"https://www.w3schools.com/html/default.asp",label:"W3 School"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=HD13eq_Pmp8",label:"Bro Code | Learn HTML in 1 hour"},{href:"https://www.youtube.com/watch?v=qz0aGYrrlhU",label:"Programming with Mosh | HTML Tutorial for Beginners: HTML Crash Course (1:09:33)"},{href:"https://www.youtube.com/watch?v=mJgBOIoGihA",label:"Dave Gray HTML Full Course for Beginners | Complete All-in-One Tutoria… (4:07:33)"},{href:"",label:""}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${r}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,e)}}customElements.define("wc-frontend-html-resources",l);export{l as default};
