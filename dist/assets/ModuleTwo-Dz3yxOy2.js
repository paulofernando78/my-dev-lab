import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as o,s}from"./renderSection-CSqRZScD.js";import"./CardIcon-BlOxVlIS.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const n=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",examples:[{type:"code",cardLabel:"CSS",language:"css",code:`

            `,preview:()=>`

            `,notes:`
              <p><code>fixed</code> and <code>absolute</code> are taken out of the normal document flow:</p>
              <p>They do not take up space in the layout.</p>
              <p>Other elements act as if they don’t exist in terms of positioning.</p>
              <p>You can't use margin/padding to push other content around them like you do with <code>static</code> or <code>relative</code> elements.</p>
            `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${n}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,e)}}customElements.define("wc-css-module-two",c);export{c as default};
