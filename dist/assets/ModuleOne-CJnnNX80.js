import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as a,s as o}from"./renderSection-CSqRZScD.js";import"./CardIcon-BlOxVlIS.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const s=`
  h1, h2, h3, h4 {
    margin-bottom: 0.5rem
  }

  ol {
    padding-left: 1rem;
  }

  ul {
    padding-left: 1rem;
  }

  textarea, input {
    padding: 2px 4px
  }

  .radio, .checkbox {
    display: flex;
    gap: 20px
  }

  @media (width < 575px) {
    .wrapper {
      grid-template-columns: 1fr
    }
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"boilerplate",sectionLabel:"Basic HTML",sectionAriaLabel:"Basic HTML",examples:[{type:"snippet",cardLabel:"Boilerplate",image:"/assets/images/html/module-1/basic-structure.png",description:`
              <p>This is the minimal structure of a valid HTML document.</p>
              <p><mark>The <code>&lt;!doctype html&gt;</code> declaration</mark> tells the browser that the document uses HTML5.</p>
              <p>It must always be the first line of an HTML document to ensure standards mode rendering.</p>
              <p><mark>The <code>&lt;html&gt;</code> element</mark> is the root of the document and contains all other elements. The <code>lang</code> attribute defines the language of the page for accessibility and SEO.</p>
              <p><mark>The <code>&lt;head&gt;</code> contains metadata and configuration</mark> for the page. Content inside the head is not displayed directly in the browser.</p>
              <p><mark>The <code>&lt;body&gt;</code> contains all visible content</mark> of the webpage.</p>
            `}]}];this.shadowRoot.innerHTML=`
    <style>
      ${t}
      ${s}
    </style>
    
    <wc-page-header></wc-page-header>
    
    <wc-contents></wc-contents>

    <div class="line-break">
      ${a(e)}
    </div> 

    <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-html-module-one",n);export{n as default};
