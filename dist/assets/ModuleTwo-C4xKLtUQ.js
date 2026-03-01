import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as a,s as o}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const n=`

`;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"text",sectionLabel:"Text and Content Structure",sectionAriaLabel:"Text and Content Structure",examples:[{type:"code",cardLabel:"Headings",language:"html",code:`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
        `,preview:()=>`
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
        `},{cardLabel:"Paragraph",language:"html",code:`
<p>This is a paragraph.</p>
        `,preview:()=>`
              <p>This is a paragraph.</p>
        `},{cardLabel:"Textarea",language:"html",code:`
<textarea>Lorem ipsum...</textarea>
        `,preview:()=>`
              <textarea>Lorem ipsum...</textarea>
        `,notes:`
              <wc-text-block>
                <p>The <code>&lt;textarea&gt;</code> element is used for multi-line text input, such as comments, messages, or longer descriptions.</p>

                <p>Unlike <code>&lt;input&gt;</code> elements, a textarea does not use a <code>value</code> attribute. The initial text is written between the opening and closing tags.</p>

                <p>Common attributes include:</p>
                <ul>
                  <li><code>rows</code> and <code>cols</code> — define the visible size of the textarea</li>
                  <li><code>placeholder</code> — shows helper text when empty</li>
                  <li><code>maxlength</code> — limits the number of characters</li>
                  <li><code>readonly</code> and <code>disabled</code> — control user interaction</li>
                </ul>

                <p>Textareas are resizable by default in most browsers and can be controlled using CSS.</p>
              </wc-text-block>
        `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${n}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${a(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-html-module-two",s);export{s as default};
