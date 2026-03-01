import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as s,s as o}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const a=`
  
`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"sites",sectionLabel:"Sites",sectionAriaLabel:"Sites",links:[{href:"https://www.joshwcomeau.com/",label:"Josh W. Comeau"},{href:"https://www.joshwcomeau.com/css/center-a-div/?from=newsletter",label:"Josh W. Comeau | How to center a DIV"},{href:"https://lea.verou.me/",label:"Lea Verou"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=kINNs4uYYnY&list=PLj-4DlPRT48kQD-jzqfkutO5OvMUXLcNP",label:"Lama Dev"},{href:"https://www.youtube.com/watch?v=ZPTVr2pS0XE",label:"Web Conferences Amsterdam | How to Teach CSS | Josh Comeau | CSS Day 2024"},{href:"https://www.youtube.com/watch?v=UFwu9gxMLvM",label:"Voicu Apostol | Design A 3D Button in Figma"}]},{sectionId:"practice",sectionLabel:"Practice",sectionAriaLabel:"Practice",links:[{href:"https://cssbattle.dev/",label:"CSS Battle"},{href:"https://flexboxfroggy.com",label:"Flexbox Froggy"},{href:"https://flukeout.github.io/",label:"CSS Diner"},{href:"https://cssgridgarden.com",label:"Grid Garden"},{href:"https://codepen.io/challenges",label:"CODEPEN Challenges"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${a}
      </style>
      <wc-page-header
        category="CSS"
        page="Resources"
        aria-label="CSS Resources"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${s(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-css-resources",c);export{c as default};
