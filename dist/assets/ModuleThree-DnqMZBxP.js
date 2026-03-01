import{s as l}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s as i}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const a=`
  ol, ul {
    
  }
`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"ordered-lists",sectionLabel:"Ordered Lists",sectionAriaLabel:"Ordered Lists",examples:[{cardLabel:"default (numbers)",language:"html",code:`
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,preview:()=>`
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
              </ol>
        `},{cardLabel:"letters",language:"html",code:`
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,preview:()=>`
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
              </ol>
        `},{cardLabel:"Unordered List",language:"html",code:`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
        `,preview:()=>`
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
        `}]},{sectionId:"unordered-lists",sectionLabel:"Unordered Lists",sectionAriaLabel:"Unordered Lists",examples:[{cardLabel:"Unordered List",language:"html",code:`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
        `,preview:()=>`
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
        `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",examples:[{cardLabel:"Default Link",language:"html",code:`
<a href="https://example.com">Visit example</a>
        `,preview:()=>`
              <a href="https://example.com">Visit example</a>
        `},{cardLabel:"Open in New Tab",language:"html",code:`
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open example
</a>
        `,preview:()=>`
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Open example
              </a>
        `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,i(this.shadowRoot,e)}}customElements.define("wc-html-module-three",r);export{r as default};
