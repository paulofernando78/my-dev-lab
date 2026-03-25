import{s as t}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as o,s}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./CardCode-B2gB2WjZ.js";import"./Wrapper-CztuctmA.js";import"./Code-CJxCtOLx.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const a=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
        `},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",cardCodes:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,e)}}customElements.define("wc-backend-node-js-module-1",c);export{c as default};
