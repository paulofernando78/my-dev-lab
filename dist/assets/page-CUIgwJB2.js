import{s}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as t,s as o}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./CardCode-B2gB2WjZ.js";import"./Wrapper-CztuctmA.js";import"./Code-CJxCtOLx.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const a=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
          <p>...</p>
        `,sampleAnswer:`
          <p>...</p>
        `,notes:`
          <p>...</p>
        `},{sectionId:"html",sectionLabel:"HTML",sectionAriaLabel:"HTML block",cardCodes:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",cardCodes:[{type:"code",cardLabel:"CSS",language:"css",code:`
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
            `}]},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",cardCodes:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"snippet",sectionLabel:"Snippet",sectionAriaLabel:"...",cardCodes:[{type:"snippet",cardLabel:"Snippet (Image + Text)",image:"/assets/images/semantic.jpg",description:`
              <p>Description</p>
            `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"www.google.com",label:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-boilerplate",i);export{i as default};
