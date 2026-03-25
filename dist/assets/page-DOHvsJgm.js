import{s}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as a,s as n}from"./renderSection-DMH7LDba.js";import"./Card-BHALqW25.js";import"./Wrapper-CztuctmA.js";import"./Code-CJxCtOLx.js";import"./index-BlILq7lZ.js";const o=`

`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=[{sectionId:"template-literals",sectionLabel:"Template Literals",sectionAriaLabel:"...",cardCodes:[{cardLabel:"true",language:"js",showItem2:!0,code:`
const showItem2 = true

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
            `,preview:e=>`
              <span>Item 1</span>
              ${e?"<span>Item 2</span>":""}
            `},{cardLabel:"false",language:"js",showItem2:!1,code:`
const showItem2 = false

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
        `,preview:e=>`
          <span>Item 1</span>
          ${e?"<span>Item 2</span>":""}
        `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${o}
      </style>

      <wc-page-header
        category="Javascript"
        page="Conditional Rendering"
        aria-label="Conditional Rendering"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${a(t)}</div>
    `,n(this.shadowRoot,t)}}customElements.define("wc-frontend-js-conditional-rendering",r);export{r as default};
