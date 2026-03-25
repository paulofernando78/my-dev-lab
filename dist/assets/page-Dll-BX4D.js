import{s as e}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as o,s}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Wrapper-CztuctmA.js";import"./Image-BIJaaz-z.js";import"./Topic-ezzIs3LG.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./Demo-ChAFW9Ct.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const n={sectionId:"text-and-content-structure",sectionLabel:"Text and Content Structure",sectionAriaLabel:"Text and Content Structure",description:`
          <p>HTML provides elements that define the structure and organization of textual content on a webpage.</p>
          <p>Elements such as <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> and <code>&lt;p&gt;</code> help organize information into meaningful sections and paragraphs.</p>
          <p>This structure improves readability for users and helps search engines and assistive technologies understand the content of the page.</p>
          `,subSections:[{subSectionId:"headings",subSectionLabel:"Headings",subSectionAriaLabel:"Headings",description:`
              <p>Headings define the structure and hierarchy of a page.</p>
              <p>They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
              <p>Search engines and assistive technologies use headings to understand the structure of the document.</p>
            `,topics:[{topicId:"heading-levels",topicLabel:"Heading Levels",topicAriaLabel:"Heading Levels",description:`
                  <p>Headings should be used in order to reflect the structure of the content, not just to make text look bigger.</p>
                  <p>A page normally starts with one <code>&lt;h1&gt;</code>, then uses <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, and so on for nested sections.</p>
                `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
                `}],preview:`
                  <wc-html-module-2-headings></wc-html-module-2-headings>
                `,sandbox:[{html:!0}]}]},{subSectionId:"paragraph",subSectionLabel:"Paragraph",subSectionAriaLabel:"Paragraph",description:`
              <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
              <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
              <p>Paragraphs are used to group related sentences into blocks of content.</p>
            `,topics:[{topicId:"paragraph-basics",topicLabel:"Paragraph Basics",topicAriaLabel:"Paragraph Basics",description:`
                  <p>Paragraphs group related sentences into readable blocks of text.</p>
                  <p>Use a new paragraph when the idea changes, instead of using multiple line breaks for spacing.</p>
                `,notes:`
                  <p>Browsers add vertical spacing around paragraphs automatically, so you do not need extra empty tags between them.</p>
                `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<p>This is a paragraph.</p>
                `}],preview:`
                  <wc-html-module-2-paragraph></wc-html-module-2-paragraph>
                `,sandbox:[{html:!0}]}]}]},a=[n];class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      `}}customElements.define("wc-html-module-2-headings",r);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <p>This ia a paragraph.</p>
      `}}customElements.define("wc-html-module-2-paragraph",i);const d=`

`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${d}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(a)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,a)}}customElements.define("wc-frontend-html-module-2",c);export{c as default};
