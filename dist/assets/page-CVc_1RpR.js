import{s as t}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as o,s}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./CardCode-DTGEN7ch.js";import"./Links-jNmpqXk5.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";const n=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",description:`
            <p>Description</p>
        `},{sectionId:"javascript",sectionLabel:"Javascript",cardCodes:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${n}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,e)}}customElements.define("wc-backend-node-js-module-1",c);export{c as default};
