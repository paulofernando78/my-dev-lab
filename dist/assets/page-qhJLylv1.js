import{s as o}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as t,s as r}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Wrapper-CztuctmA.js";import"./Image-BIJaaz-z.js";import"./Topic-ezzIs3LG.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./Demo-ChAFW9Ct.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const s=`

`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){const e=[{sectionId:"Section",sectionLabel:"Section",sectionAriaLabel:"...",subSections:[{subSectionId:"sub-section",subSectionLabel:"Sub Section",subSectionAriaLabel:"...",topics:[{topicId:"topic",topicLabel:"Topic",topicAriaLabel:"...",description:`
                  ...
                `,notes:`
                  ...
                `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<h1>Hello World!</h1>
<div></div>
                `},{cardLabel:"CSS",language:"css",code:`
h1 {
  display: block;
  margin-bottom: 1rem
}

div {
  width: 50px;
  height: 50px;
  animation: roll 2s infinite alternate;
  margin-bottom: 10px
}

@keyframes roll {
  0% {
      transform: translateX(0) rotate(0deg);
      background-color: green;
      border-radius: 0
  }
  33% {
    transform: translateX(50px) rotate(360deg);
    background-color: red;
    border-radius: 0%
  }
  66% {
    transform: translateX(66px) rotate(0deg);
    background-color: orange;
    border-radius: 50%
  }
  100% {
    transform: translateX(100px) rotate(360deg);
    background-color: blue;
    border-radius: 0%
  }
}
                `},{cardLabel:"Javascript",language:"js",code:`
console.log("Hello World")
                `}],preview:`
                  <wc-demo></wc-demo>
                `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]}]},{sectionId:"resources",sectionLabel:"Resources",sectionAriaLabel:"Resources",links:[{href:"https://www.google.com/",label:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${s}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${t(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,r(this.shadowRoot,e)}}customElements.define("wc-playground",a);export{a as default};
