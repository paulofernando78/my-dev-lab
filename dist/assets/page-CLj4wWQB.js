import{s as e}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as o,s}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./SubSection-Dx3IDIH1.js";import"./Links-jNmpqXk5.js";import"./Image-BzCDZVMb.js";import"./Topic-7L1nWIDb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./Demo-Ciq0aQYx.js";import"./LessonNav-C8O3cQxq.js";const n={sectionId:"text-and-content-structure",sectionLabel:"Text and Content Structure",description:`
          <p>HTML provides elements that define the structure and organization of textual content on a webpage.</p>
          <p>Elements such as <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> and <code>&lt;p&gt;</code> help organize information into meaningful sections and paragraphs.</p>
          <p>This structure improves readability for users and helps search engines and assistive technologies understand the content of the page.</p>
          `,subSections:[{subSectionId:"headings",subSectionLabel:"Headings",description:`
              <p>Headings define the structure and hierarchy of a page.</p>
              <p>They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
              <p>Search engines and assistive technologies use headings to understand the structure of the document.</p>
            `,topics:[{topicId:"heading-levels",topicLabel:"Heading Levels",description:`
                  <p>Headings should be used in order to reflect the structure of the content, not just to make text look bigger.</p>
                  <p>A page normally starts with one <code>&lt;h1&gt;</code>, then uses <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, and so on for nested sections.</p>
                `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
                `}],preview:`
                  <wc-html-module-2-headings></wc-html-module-2-headings>
                `,sandbox:[{html:!0}]}]},{subSectionId:"paragraph",subSectionLabel:"Paragraph",description:`
              <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
              <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
              <p>Paragraphs are used to group related sentences into blocks of content.</p>
            `,topics:[{topicId:"paragraph-basics",topicLabel:"Paragraph Basics",description:`
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
      `}}customElements.define("wc-html-module-2-headings",r);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <p>This ia a paragraph.</p>
      `}}customElements.define("wc-html-module-2-paragraph",d);const i=`

`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${i}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${o(a)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,a)}}customElements.define("wc-frontend-html-module-2",c);export{c as default};
