import{s}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as t,s as o}from"./renderSection-DkGTr7g2.js";import"./CardCode-DTGEN7ch.js";import"./Links-jNmpqXk5.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";const a=`
  
`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"sites",sectionLabel:"Sites",links:[{href:"https://jsoncrack.com/",label:"JSON CRACK | Online JSON Viewer"}]},{sectionId:"paid-courses",sectionLabel:"Paid Courses",links:[{href:"https://www.jschallenger.com/",label:"JS Challenger"},{href:"https://firt.dev/vanilla-js/",label:"Vanilla-JS, You Might Not Need a Framework"},{href:"https://www.codingame.com/start/",label:"CodinGame | Programmig Challenges"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=lfmg-EJ8gm4",label:"Bro Code | JavaScript Full Course (12:00:00)"}]},{sectionId:"practice",sectionLabel:"Practice",links:[{href:"https://runjs.app/play",label:"Run JS"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${a}
      </style>
      <wc-page-header
        category="Javascript"
        page="Resources"
        aria-label="Javascript Resources"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-frontend-js-resources",r);export{r as default};
