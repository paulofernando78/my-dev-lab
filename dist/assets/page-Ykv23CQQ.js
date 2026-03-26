import{s as t}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as i,s as o}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./SubSection-DF8fSDKq.js";import"./Links-FCbr7Lwo.js";import"./Image-C4E2eAVl.js";import"./CardCode-yhvPs5fJ.js";import"./Code-fMuPM1Lh.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const s={sectionId:"basic-html",sectionLabel:"Basic HTML",sectionAriaLabel:"Basic HTML",description:`
          <p>This is the minimal structure of a valid HTML document.</p>
        `,imgs:[{imgSrc:"/assets/images/html/module-1/basic-structure.png",alt:"Basic Structure"}],subSections:[{subSectionId:"doc-type",subSectionLabel:"!DOCTYPE html",subSectionAriaLabel:"DOCTYPE",description:`
              <p>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser which version of HTML the document uses. In modern web development it indicates that the page follows the HTML5 standard.</p>
              <p>It must always appear as the very first line of the document so the browser renders the page in <strong>standards mode</strong> instead of compatibility mode.</p>
              <p>Without this declaration, browsers may apply legacy rendering rules which can cause layout and CSS inconsistencies.</p>
            `},{subSectionId:"html",subSectionLabel:"html",subSectionAriaLabel:"html",description:`
              <p>The <code>&lt;html&gt;</code> element is the <strong>root element</strong> of every HTML document. All other elements must be placed inside it.</p>
              <p>The <code>lang</code> attribute specifies the language of the page, which helps screen readers, translation tools, and search engines correctly interpret the content.</p>
            `},{subSectionId:"head",subSectionLabel:"head",subSectionAriaLabel:"head",description:`
              <p>The <code>&lt;head&gt;</code> element contains metadata and configuration for the document. Information inside the head is not rendered as visible page content.</p>
              <p>Typical elements placed inside the head include:</p>
              <ul>
                <li><code>&lt;meta&gt;</code> – metadata such as character encoding and viewport settings</li>
                <li><code>&lt;title&gt;</code> – the title shown in the browser tab</li>
                <li><code>&lt;link&gt;</code> – references to stylesheets or icons</li>
                <li><code>&lt;script&gt;</code> – JavaScript files</li>
              </ul>
            `},{subSectionId:"meta",subSectionLabel:"meta",subSectionAriaLabel:"meta",description:`
              <p>The <code>&lt;meta&gt;</code> element provides metadata about the HTML document. Metadata is information about the page rather than visible content.</p>
              <p>A common example is defining the character encoding:</p>
              <wc-code language="html"><meta charset="UTF-8"></wc-code>
              <p>This ensures the browser correctly interprets text characters.</p>
              <p>Another common meta tag is the viewport configuration used for responsive design:</p>
              <wc-code language="html"><meta name="viewport" content="width=device-width, initial-scale=1.0"></wc-code>
            `},{subSectionId:"title",subSectionLabel:"title",subSectionAriaLabel:"title",description:`
              <p>The <code>&lt;title&gt;</code> element defines the title of the document.</p>
              <p>This title appears in the browser tab, bookmarks, and search engine results.</p>
              <p>Every HTML document should include exactly one title element inside the <code>&lt;head&gt;</code>.</p>
              <wc-code language="html"><title>My First Web Page</title></wc-code>
            `},{subSectionId:"body",subSectionLabel:"body",subSectionAriaLabel:"body",description:`
              <p>The <code>&lt;body&gt;</code> element contains all the content that is visible in the browser.</p>
              <p>This includes text, headings, images, links, lists, forms, and any other elements that make up the page interface.</p>
              <p>Everything the user interacts with on the page lives inside the body.</p>
            `}]},e=[s];class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${i(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-frontend-html-module-1",n);export{n as default};
