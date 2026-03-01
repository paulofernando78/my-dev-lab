import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as s,s as o}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const n=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"html",sectionLabel:"HTML",sectionAriaLabel:"HTML block",examples:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${n}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${s(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-html-module-seven",a);export{a as default};
