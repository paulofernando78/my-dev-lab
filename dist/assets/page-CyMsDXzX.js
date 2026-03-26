import{s as t}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as o,s}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./CardCode-yhvPs5fJ.js";import"./Links-FCbr7Lwo.js";import"./Code-fMuPM1Lh.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const a=`
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
