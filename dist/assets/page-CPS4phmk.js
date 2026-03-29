import{s as e}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as l,s}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./SubSection-Dx3IDIH1.js";import"./Links-jNmpqXk5.js";import"./Image-BzCDZVMb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./Demo-Ciq0aQYx.js";import"./LessonNav-C8O3cQxq.js";const a={sectionId:"forms",sectionLabel:"Forms",description:`
  <p>The <code>&lt;form&gt;</code> element groups input controls and allows users to submit data to a server.</p>

  <p>A form usually contains labels, input fields, and buttons. When the user submits the form, the browser sends the collected data to the URL specified in the <code>action</code> attribute.</p>

  <p>Forms are essential for many common interactions such as login pages, search bars, registration forms, and contact forms.</p>
`,subSections:[{subSectionId:"form-structure",subSectionLabel:"Form Structure",description:`
              <p>A basic form starts with a <code>&lt;form&gt;</code> element and contains controls that the user can fill out.</p>
              <p>The <code>action</code> attribute tells the browser where to send the data, and <code>method</code> defines how it is sent.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<form action="/signup" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text">

  <button type="submit">Submit</button>
</form>
                `}]},{subSectionId:"form-accessibility",subSectionLabel:"Labels & Submission",description:`
              <p>Every input should have a clear label so users and assistive technologies understand what information is expected.</p>
              <p>Buttons inside forms should use the right type, especially <code>type="submit"</code> for sending the form.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<form action="/contact" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email">

  <button type="submit">Send</button>
</form>
                `}]}]},n={sectionId:"input-types",sectionLabel:"Input Types",description:`
  <p>The <code>&lt;input&gt;</code> element is one of the most important parts of HTML forms. By changing the <code>type</code> attribute, the same element can behave in many different ways.</p>

  <p>Each input type is designed for a specific kind of data — for example text, numbers, email addresses, or file uploads. Modern browsers also provide built‑in UI controls and validation depending on the type.</p>

  <p>Understanding the available input types helps you create forms that are easier to use, more accessible, and better suited for mobile devices.</p>
`,subSections:[{subSectionId:"text",subSectionLabel:"text",description:`
              <p>The most basic input type. Accepts any single-line text value such as names, usernames, or search queries.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<input type="text">
                `}],preview:`
              <wc-html-module-6-text></wc-html-module-6-text>
            `},{subSectionId:"email",subSectionLabel:"email",description:`
              <p>Validates that the value follows an email format (e.g. <code>user@example.com</code>). On mobile devices, it triggers a keyboard optimized for email input.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<input type="email" placeholder="joedoe@email.com">
                `}],preview:`
              <wc-html-module-6-email></wc-html-module-6-email>
            `},{subSectionId:"password",subSectionLabel:"password",description:`
              <p>Masks the characters as the user types, hiding sensitive input like passwords. The value is still sent as plain text unless the form uses HTTPS.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<input type="password" placeholder="1234...">
                `}],preview:`
              <wc-html-module-6-password></wc-html-module-6-password>
            `},{subSectionId:"number",subSectionLabel:"number",description:`
              <p>Only accepts numeric values. Renders with increment/decrement arrows and supports <code>min</code>, <code>max</code>, and <code>step</code> attributes to control the allowed range.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<input type="number" placeholder="Numbers only">
                `}],preview:`
              <wc-html-module-6-number></wc-html-module-6-number>
            `},{subSectionId:"radio",subSectionLabel:"radio",description:`
              <p>Allows the user to select <strong>one option</strong> from a group. All radio buttons in the same group must share the same <code>name</code> attribute — this is what links them together so selecting one deselects the others.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div class="flex-align-center">
  <input type="radio" name="same-name" value="option1" id="opt1">
  <label for="opt1">Option 1</label>
</div>
<div class="flex-align-center">
  <input type="radio" name="same-name" value="option2" id="opt2">
  <label for="opt2">Option 2</label>
</div>
                `}],preview:`
              <wc-html-module-6-radio></wc-html-module-6-radio>
            `},{subSectionId:"checkbox",subSectionLabel:"checkbox",description:`
              <p>Allows the user to toggle an option on or off. Unlike radio buttons, checkboxes are independent — <strong>multiple can be selected</strong> at the same time.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div class="flex-align-center">
  <input type="checkbox" name="subscribe" value="yes" id="subscribe"/>
  <label for="subscribe">Subscribe to newsletter</label>
</div>

<div class="flex-align-center">
  <input type="checkbox" name="terms" value="agreed" id="terms"/>
  <label for="terms">I agree to the terms</label>
</div>
                `}],preview:`
              <wc-html-module-6-checkbox></wc-html-module-6-checkbox>
            `},{subSectionId:"option",subSectionLabel:"option",description:`
              <p>The <code>&lt;select&gt;</code> element creates a dropdown menu. Each <code>&lt;option&gt;</code> inside it represents a choice. The <code>name</code> attribute goes on <code>&lt;select&gt;</code> and the <code>value</code> on each <code>&lt;option&gt;</code>.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<select name="color" id="color">
  <option value="">-- Pick a color --</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
<label for="color">Color</label>
                `}],preview:`
              <wc-html-module-6-option></wc-html-module-6-option>
            `},{subSectionId:"file",subSectionLabel:"file",description:`
              <p>Opens a file picker dialog, allowing the user to upload files. Use the <code>accept</code> attribute to restrict file types and <code>multiple</code> to allow more than one file. When used inside a form, the form must include <code>enctype="multipart/form-data"</code>.</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<input type="file">
                `}],preview:`
              <wc-html-module-6-file></wc-html-module-6-file>
            `},{subSectionId:"textarea",subSectionLabel:"textarea",description:`
              <p>A multiline text input, ideal for longer content like messages or comments.</p>
              <p>Supports the following attributes:</p>
              
              <ul>
                <li><code>rows</code> — visible height in lines</li>
                <li><code>cols</code> — visible width in characters</li>
                <li><code>maxlength</code> — max characters allowed</li>
                <li><code>resize</code> — controlled via CSS</li>
              </ul>
            `,notes:`
              <p>unlike <code>&lt;input&gt;</code>, the default value goes between the tags, not in <code>value</code>:</p>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<textarea></textarea>
                `}],preview:`
              <wc-html-module-6-textarea></wc-html-module-6-textarea>
            `,sandbox:[{html:!0}]}]},i={sectionId:"resources",sectionLabel:"Resources",description:`
  <p>This section provides additional references and documentation to deepen your understanding of HTML forms and input elements.</p>
`,links:[{href:"/",label:"..."}]},o=[a,n,i],c=`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${c}
      </style>
      <label>Username:</label>
      <input type="text">
      `}}customElements.define("wc-html-module-6-text",r);const d=`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${d}
      </style>
      <label>Email:</label>
      <input type="email" placeholder="joedoe@email.com">
      `}}customElements.define("wc-html-module-6-email",m);const p=`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${p}
      </style>
      <label>Password:</label>
      <input type="Password" placeholder="1234...">
      `}}customElements.define("wc-html-module-6-password",u);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <input type="number" placeholder="Numbers only">
      `}}customElements.define("wc-html-module-6-number",h);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <div class="flex-align-center">
        <input type="radio" name="same-name" value="option1" id="opt1">
        <label for="opt1">Option 1</label>
      </div>
      <div class="flex-align-center">
        <input type="radio" name="same-name" value="option2" id="opt2">
        <label for="opt2">Option 2</label>
      </div>
      `}}customElements.define("wc-html-module-6-radio",b);class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <div class="flex-align-center">
        <input type="checkbox" name="subscribe" value="yes" id="subscribe"/>
        <label for="subscribe">Subscribe to newsletter</label>
      </div>

      <div class="flex-align-center">
        <input type="checkbox" name="terms" value="agreed" id="terms"/>
        <label for="terms">I agree to the terms</label>
      </div>
    `}}customElements.define("wc-html-module-6-checkbox",w);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <select name="color" id="color">
        <option value="">-- Pick a color --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <label for="color">Color</label>
    `}}customElements.define("wc-html-module-6-option",f);const g=`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${g}
      </style>
      <label for="avatar">Upload photo:</label>
      <input type="file" name="avatar" id="avatar" />
    `}}customElements.define("wc-html-module-6-file",y);const v=`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${v}
      </style>
      <label for="message">Leave your comments below:</label>
      <textarea name="message" id="message"></textarea>
    `}}customElements.define("wc-html-module-6-textarea",x);const L=`

`;class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${L}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${l(o)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,s(this.shadowRoot,o)}}customElements.define("wc-frontend-html-module-6",S);export{S as default};
