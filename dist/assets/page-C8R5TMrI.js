import{s as t}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as i,s as o}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Topic-ezzIs3LG.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./index-BlILq7lZ.js";const e=[{sectionId:"html-conditional-rendering",sectionLabel:"Conditional Rendering in HTML",sectionAriaLabel:"Conditional Rendering in HTML",description:`
      <p>Plain HTML does not contain runtime conditional logic by itself. It defines static structure.</p>
      <p>If content appears conditionally in an HTML page, that decision usually comes from JavaScript, a template engine, or server-side rendering before the final markup reaches the browser.</p>
    `,subSections:[{subSectionId:"static-markup",subSectionLabel:"Static Markup",subSectionAriaLabel:"Static Markup",topics:[{topicId:"html-is-static",topicLabel:"HTML Is Static",topicAriaLabel:"HTML Is Static",description:`
              <p>HTML alone does not evaluate conditions like <code>if</code>, <code>else</code>, or ternaries.</p>
              <p>It only describes the elements that should exist in the document.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<section>
  <h1>Profile</h1>
  <p>This content is always present in the document.</p>
</section>
                `}]}]},{subSectionId:"where-conditions-happen",subSectionLabel:"Where Conditions Happen",subSectionAriaLabel:"Where Conditions Happen",topics:[{topicId:"template-server-js",topicLabel:"Template, Server, or JS",topicAriaLabel:"Template, Server, or JS",description:`
              <p>Conditional rendering usually happens before or around HTML generation.</p>
              <p>Examples include server templates, frameworks, or browser JavaScript that inserts or removes markup.</p>
            `,cardCodes:[{cardLabel:"Example",language:"html",code:`
<!-- final HTML after a condition was resolved -->
<section>
  <h1>Profile</h1>
  <p>Admin tools are visible.</p>
</section>
                `}],notes:`
              <p>The condition itself does not live in plain HTML. HTML only shows the result.</p>
            `}]}]}];class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <wc-page-header
        category="HTML"
        page="Conditional Rendering"
        aria-label="Conditional Rendering"
      ></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${i(e)}</div>
    `,o(this.shadowRoot,e)}}customElements.define("wc-frontend-html-conditional-rendering",n);export{n as default};
