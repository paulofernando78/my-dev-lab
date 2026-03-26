import{s}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as t,s as a}from"./renderSection-DyoUKUCK.js";import"./CardCode-yhvPs5fJ.js";import"./Links-FCbr7Lwo.js";import"./Code-fMuPM1Lh.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const o=`
  
`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"sites",sectionLabel:"Sites",sectionAriaLabel:"Sites",links:[{href:"https://jsoncrack.com/",label:"JSON CRACK | Online JSON Viewer"}]},{sectionId:"paid-courses",sectionLabel:"Paid Courses",sectionAriaLabel:"Best Paid Courses",links:[{href:"https://www.jschallenger.com/",label:"JS Challenger"},{href:"https://firt.dev/vanilla-js/",label:"Vanilla-JS, You Might Not Need a Framework"},{href:"https://www.codingame.com/start/",label:"CodinGame | Programmig Challenges"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=lfmg-EJ8gm4",label:"Bro Code | JavaScript Full Course (12:00:00)"}]},{sectionId:"practice",sectionLabel:"Practice",sectionAriaLabel:"Practice",links:[{href:"https://runjs.app/play",label:"Run JS"}]}];this.shadowRoot.innerHTML=`
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
    `,a(this.shadowRoot,e)}}customElements.define("wc-frontend-js-resources",r);export{r as default};
