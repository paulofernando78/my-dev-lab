import{s}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s as o}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const i=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",examples:[{type:"code",cardLabel:"CSS",language:"css",code:`
.box {
  background-color: blue;
  width: 100px;
  height: 100px
}
            `,preview:()=>`
              <div class="box">
              </div>
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"https://www.youtube.com/watch?v=radgOh1F8o0",label:"Austin Davis | CSS Positioning - The Only Guide You Will Ever Need"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${i}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-css-module-four",n);export{n as default};
