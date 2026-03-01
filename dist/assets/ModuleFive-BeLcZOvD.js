import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as s,s as n}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const a=`

`;class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"semantic-layout",sectionLabel:"Semantic Layout",sectionAriaLabel:"Semantic Layout",description:`
          <wc-text-block>
            <p><strong>Semantic HTML tags</strong> describe the meaning and purpose of content, not just its appearance. They help browsers, search engines, and assistive technologies understand the structure of a page.</p>

            <p>Instead of using generic containers like <code>&lt;div&gt;</code>, semantic elements clearly define sections such as headers, main content, articles, sidebars, and footers.</p>
          </wc-text-block> 
        `,examples:[{language:"html",code:`
<header></header>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
<div></div>
          `,preview:()=>`
              <img src="/assets/images/semantic.jpg"/>
          `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${a}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${s(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,n(this.shadowRoot,e)}}customElements.define("wc-html-module-five",o);export{o as default};
