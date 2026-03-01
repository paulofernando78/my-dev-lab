import{s}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s as o}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const a=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",examples:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${a}
      </style>

      <wc-page-header
        category="Javascript"
        page="Module 9"
        unit="Asynchronous JS"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-js-module-nine",n);export{n as default};
