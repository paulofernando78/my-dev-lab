import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as a,s as l}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const n=`

`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"forms",sectionLabel:"Forms & Input Types",sectionAriaLabel:"Forms and Input Types",examples:[{cardLabel:"text",language:"html",code:`
          <input type="text">
          `,preview:()=>`
          <input type="text">
          `},{cardLabel:"password",language:"html",code:`
          <input type="password">
          `,preview:()=>`
          <input type="password" placeholder="•••••">
          `},{cardLabel:"search",language:"html",code:`
          <input type="search">
          `,preview:()=>`
          <input type="search">
          `},{cardLabel:"date",language:"html",code:`
          <input type="date">
          `,preview:()=>`
          <input type="date">
          `},{cardLabel:"month",language:"html",code:`
          <input type="month">
          `,preview:()=>`
          <input type="month">
          `},{cardLabel:"week",language:"html",code:`
          <input type="week">
          `,preview:()=>`
          <input type="week">
          `},{cardLabel:"time",language:"html",code:`
          <input type="time">
          `,preview:()=>`
          <input type="time">
          `},{cardLabel:"number",language:"html",code:`
          <input type="number">
          `,preview:()=>`
          <input type="number" placeholder="12345">
          `},{cardLabel:"phone",language:"html",code:`
          <input type="phone">
          `,preview:()=>`
          <label for="phone">Phone No.</label>
          <input type="phone" placeholder="999-9999" id="phone">
          `},{cardLabel:"email",language:"html",code:`
          <input type="email">
          `,preview:()=>`
          <input type="email" placeholder="john@email.com">
          `},{cardLabel:"url",language:"html",code:`
          <input type="url">
          `,preview:()=>`
          <input type="url">
          `},{cardLabel:"radio",language:"html",code:`
          <input type="radio">
          `,preview:()=>`
              <div class="radio">
                <div class="flex">
                  <input type="radio" name="radio" id="radio-1">
                  <label for="radio-1">Item 1</label>
                </div>
                <div class="flex">
                  <input type="radio" name="radio" id="radio-2">
                  <label for="radio-2">Item 2</label>
                </div>
              </div>  
          `},{cardLabel:"checkbox",language:"html",code:`
          <input type="text">
          `,preview:()=>`
              <div class="checkbox">
                <div class="flex">
                  <input type="checkbox" id="checkbox-1">
                  <label for="checkbox-1">Item 1</label>
                </div>
                <div class="flex">
                  <input type="checkbox" id="checkbox-2">
                  <label for="checkbox-2">Item 2</label>
                </div>
              </div>  
          `},{cardLabel:"color",language:"html",code:`
          <input type="color">
          `,preview:()=>`
          <input type="color">
          `},{cardLabel:"range",language:"html",code:`
          <input type="range">
          `,preview:()=>`
          <input type="range">
          `},{cardLabel:"file",language:"html",code:`
          <input type="file">
          `,preview:()=>`
          <input type="file">
          `},{cardLabel:"reset",language:"html",code:`
          <input type="reset">
          `,preview:()=>`
          <input type="reset">
          `},{cardLabel:"button",language:"html",code:`
          <input type="button" value="Click me!">
          `,preview:()=>`
          <input type="button" value="Click me!">
          `,notes:`
          <div class=line-break>
            <p><strong>&lt;input type="button"&gt;</strong> is an older way to create buttons in HTML. It was originally designed for simple form actions.</p>
            <p>Unlike the <strong>&lt;button&gt;</strong> element, an input button cannot contain HTML content. Its label must be defined using the <code>value</code> attribute.</p>
            <p>Because of this limitation, modern web development usually prefers the <strong>&lt;button&gt;</strong> element, which allows text, icons, and other HTML elements inside.</p>
            <p>Today, <code>&lt;input type="button"&gt;</code> is mainly used in legacy code or very simple cases.</p>
          </div>
`},{cardLabel:"submit",language:"html",code:`
          <input type="submit">
          `,preview:()=>`
          <input type="submit">
          `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${n}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${a(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,l(this.shadowRoot,e)}}customElements.define("wc-html-module-six",i);export{i as default};
