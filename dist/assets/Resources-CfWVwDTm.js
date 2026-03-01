import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as s,s as o}from"./renderSection-CSqRZScD.js";import"./CardIcon-BlOxVlIS.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const a=`
  
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
          <p>...</p>
        `},{sectionId:"sites",sectionLabel:"Sites",sectionAriaLabel:"Sites",links:[{href:"",label:"..."}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=HD13eq_Pmp8",label:"Bro Code | Learn HTML in 1 hour"},{href:"https://www.youtube.com/watch?v=qz0aGYrrlhU",label:"Programming with Mosh | HTML Tutorial for Beginners: HTML Crash Course (1:09:33)"},{href:"https://www.youtube.com/watch?v=mJgBOIoGihA",label:"Dave Gray HTML Full Course for Beginners | Complete All-in-One Tutoria… (4:07:33)"},{href:"",label:""}]},{sectionId:"practice",sectionLabel:"Practice",sectionAriaLabel:"Practice",links:[{href:"",label:"..."}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${s(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-html-resources",n);export{n as default};
