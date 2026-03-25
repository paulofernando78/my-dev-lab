import{s as i}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as t,s as n}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Topic-ezzIs3LG.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./index-BlILq7lZ.js";const e=[{sectionId:"css-conditional-rendering",sectionLabel:"Conditional Rendering in CSS",sectionAriaLabel:"Conditional Rendering in CSS",description:`
      <p>CSS does not truly render elements conditionally in the same way JavaScript does.</p>
      <p>What CSS can do is change visibility, layout, or appearance based on state, selectors, media queries, or container conditions.</p>
    `,subSections:[{subSectionId:"show-hide",subSectionLabel:"Show and Hide",subSectionAriaLabel:"Show and Hide",topics:[{topicId:"display-none",topicLabel:"display: none",topicAriaLabel:"display none",description:`
              <p>CSS can hide an element so it is not displayed, but the element still exists in the HTML.</p>
            `,cardCodes:[{cardLabel:"CSS",language:"css",code:`
.is-hidden {
  display: none;
}
                `}]}]},{subSectionId:"state-based-styles",subSectionLabel:"State-Based Styles",subSectionAriaLabel:"State-Based Styles",topics:[{topicId:"selectors-and-queries",topicLabel:"Selectors and Queries",topicAriaLabel:"Selectors and Queries",description:`
              <p>CSS can react to conditions such as hover state, checked inputs, viewport size, or parent/child relationships.</p>
              <p>That is conditional styling, not true conditional element creation.</p>
            `,cardCodes:[{cardLabel:"CSS",language:"css",code:`
.menu {
  display: none;
}

#toggle:checked + .menu {
  display: block;
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}
                `}],notes:`
              <p>JavaScript decides whether something exists. CSS usually decides how an existing thing looks or whether it is visible.</p>
            `}]}]}];class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${i}
      </style>
      <wc-page-header
        category="CSS"
        page="Conditional Rendering"
        aria-label="Conditional Rendering"
      ></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${t(e)}</div>
    `,n(this.shadowRoot,e)}}customElements.define("wc-frontend-css-conditional-rendering",s);export{s as default};
