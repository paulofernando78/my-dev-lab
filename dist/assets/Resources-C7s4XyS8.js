import{s}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s as a}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const o=`
  
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"sites",sectionLabel:"Sites",sectionAriaLabel:"Sites",links:[{href:"",label:""}]},{sectionId:"paid-courses",sectionLabel:"Paid Courses",sectionAriaLabel:"Best Paid Courses",links:[{href:"https://www.jschallenger.com/",label:"JS Challenger"},{href:"https://firt.dev/vanilla-js/",label:"Vanilla-JS, You Might Not Need a Framework"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"",label:""}]},{sectionId:"practice",sectionLabel:"Practice",sectionAriaLabel:"Practice",links:[{href:"https://runjs.app/play",label:"Run JS"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${o}
      </style>
      <wc-page-header
        category="Javascript"
        page="Resources"
        aria-label="Javascript Resources"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,a(this.shadowRoot,e)}}customElements.define("wc-js-resources",n);export{n as default};
