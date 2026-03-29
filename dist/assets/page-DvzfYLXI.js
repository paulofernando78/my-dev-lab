import{s}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as t,s as o}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./CardCode-DTGEN7ch.js";import"./Links-jNmpqXk5.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";const a=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",description:`
          <p>...</p>
        `,sampleAnswer:`
          <p>...</p>
        `,notes:`
          <p>...</p>
        `},{sectionId:"html",sectionLabel:"HTML",cardCodes:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]},{sectionId:"css",sectionLabel:"CSS",cardCodes:[{type:"code",cardLabel:"CSS",language:"css",code:`
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
            `}]},{sectionId:"javascript",sectionLabel:"Javascript",cardCodes:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"snippet",sectionLabel:"Snippet",cardCodes:[{type:"snippet",cardLabel:"Snippet (Image + Text)",image:"/assets/images/semantic.jpg",description:`
              <p>Description</p>
            `}]},{sectionId:"links",sectionLabel:"Links",links:[{href:"www.google.com",label:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-ai-prompts-dev-prompts",n);export{n as default};
