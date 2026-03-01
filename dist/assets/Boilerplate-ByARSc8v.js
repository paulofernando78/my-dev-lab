import{s}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s as o}from"./renderSection-CSqRZScD.js";import"./CardIcon-BlOxVlIS.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const a=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
          <p>...</p>
        `,sampleAnswer:`
          <p>...</p>
        `,notes:`
          <p>...</p>
        `},{sectionId:"sandbox",sectionLabel:"Sandbox",sectionAriaLabel:"Sandbox",examples:[{type:"sandbox",cardLabel:"Sandbox"}]},{sectionId:"html",sectionLabel:"HTML",sectionAriaLabel:"HTML block",examples:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",examples:[{type:"code",cardLabel:"CSS",language:"css",code:`
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
            `}]},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",examples:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"snippet",sectionLabel:"Snippet",sectionAriaLabel:"...",examples:[{type:"snippet",cardLabel:"Snippet (Image + Text)",image:"/assets/images/semantic.jpg",description:`
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
    `,o(this.shadowRoot,e)}}customElements.define("wc-boilerplate",n);export{n as default};
