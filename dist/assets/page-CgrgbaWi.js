import{s as t}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as a,s as o}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Wrapper-CztuctmA.js";import"./Image-BIJaaz-z.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./Demo-ChAFW9Ct.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const s=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
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
            `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"www.google.com",title:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${s}
      </style>

      <wc-page-header
        category="Random"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="HTML"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="CSS"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="Javascript"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${a(e)}</div>
    `,o(this.shadowRoot,e)}}customElements.define("wc-git-module-one",i);export{i as default};
