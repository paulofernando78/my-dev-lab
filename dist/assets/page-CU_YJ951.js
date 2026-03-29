import{s as o}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as t,s as i}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./SubSection-Dx3IDIH1.js";import"./Links-jNmpqXk5.js";import"./Image-BzCDZVMb.js";import"./Topic-7L1nWIDb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./Demo-Ciq0aQYx.js";import"./LessonNav-C8O3cQxq.js";import"./Spacer-MCI0SMHI.js";const c=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){const e=[{sectionId:"the-event-loop",sectionLabel:"8.1 The Event Loop",subSections:[{subSectionId:"call-stack",subSectionLabel:"Call Stack",topics:[{topicId:"what-is-the-call-stack",topicLabel:"What is the Call Stack?"},{topicId:"how-the-stack-works",topicLabel:"How the Stack Works"}]},{subSectionId:"web-apis-task-queue",subSectionLabel:"Web APIs & Task Queue",topics:[{topicId:"web-apis",topicLabel:"Web APIs"},{topicId:"task-queue",topicLabel:"Task Queue"}]},{subSectionId:"event-loop",subSectionLabel:"The Event Loop",topics:[{topicId:"how-the-event-loop-works",topicLabel:"How the Event Loop Works"},{topicId:"sync-vs-async",topicLabel:"Sync vs Async"}]}]},{sectionId:"8-2-window-object",sectionLabel:"8.2 Window Object",description:`
          <p>
          The <code>window</code> object represents the browser window or tab in which a web page is loaded. It is the global object in the browser environment, giving scripts access to browser APIs such as <code>document</code>, <code>location</code>, <code>history</code>, and <code>screen</code>, as well as information about the viewport — its width, height, and scroll position.
          </p>
          <p>Because it is the global object, its properties and methods can be accessed without explicitly writing <code>window</code>. For example, <code>window.innerWidth</code> and <code>innerWidth</code> refer to the same value.</p>
        `,subSections:[{subSectionId:"window-properties",subSectionLabel:"Window Properties",description:`
                <p>
                  Window properties provide information about the current browser window and the user's viewport. 
                  They allow you to access values such as the width and height of the visible area of the page 
                  and the current scroll position.
                  </p>

                  <p>
                  These properties are commonly used to build responsive layouts, detect viewport changes, 
                  and react to user scrolling.
                </p>
              `,topics:[{topicId:"window",topicLabel:"window",description:`
  <p>
    The <code>window</code> object represents the browser window or tab where the current web page is loaded.
    It is the <strong>global object</strong> in the browser environment, which means that many variables,
    functions, and browser APIs are attached to it.
  </p>

  <p>
    Because <code>window</code> is the global object, its properties and methods can usually be accessed
    without writing <code>window</code>. For example:
    <code>window.innerWidth</code> and <code>innerWidth</code> refer to the same value.
  </p>

  <p>
    The <code>window</code> object provides access to important browser features such as:
  </p>

  <ul>
    <li><code>document</code> – the DOM of the page</li>
    <li><code>location</code> – information about the current URL</li>
    <li><code>history</code> – the browser session history</li>
    <li><code>innerWidth</code> and <code>innerHeight</code> – the viewport size</li>
    <li><code>scrollX</code> and <code>scrollY</code> – the current scroll position</li>
  </ul>

  <p>
    In practice, developers rarely interact with the <code>window</code> object directly,
    but many commonly used APIs are actually properties of <code>window</code>.
  </p>
`,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
console.log(window);
                `}],sandbox:[{js:!0,console:!0}]},{topicId:"window-innerWidth",topicLabel:"window.innerWidth",description:`
                  <p><code>window.innerWidth</code> returns the width of the browser viewport in pixels.</p>
                  <p><code>window.innerHeight</code> returns the height of the browser viewport in pixels.</p>
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);
                `}],sandbox:[{js:!0,console:!0}]},{topicId:"window-scroll-x-scroll-y",topicLabel:"window.scrollX & scrollY",description:`
  <p>
    <code>window.scrollX</code> and <code>window.scrollY</code> return the number of pixels that the document
    has been scrolled horizontally and vertically.
  </p>

  <p>
    <code>scrollX</code> represents the horizontal scroll position (left ↔ right),
    while <code>scrollY</code> represents the vertical scroll position (top ↕ bottom).
  </p>

  <p>
    These properties are commonly used when reacting to user scrolling, such as
    implementing sticky elements, scroll animations, or detecting how far the user
    has moved down the page.
  </p>
`,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
window.addEventListener("scroll", () => {
  console.log("X:", window.scrollX)
  console.log("Y:", window.scrollY)
})
                `}],sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},{subSectionId:"window-methods",subSectionLabel:"Window Methods",description:`
                ...
              `,topics:[{topicId:"window-alert",topicLabel:"window.alert()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"window-open()",topicLabel:"window.open( )",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"window-scrollTo()",topicLabel:"window.scrollTo( )",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"window-scrollBy()",topicLabel:"window.scrollBy( )",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]}]},{sectionId:"history-api",sectionLabel:"8.3 History API",description:`
          <p>...</p>
        `,subSections:[{subSectionId:"history-properties",subSectionLabel:"History Properties",description:`
                ...
              `,topics:[{topicId:"history-length",topicLabel:"history.length",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"history-state",topicLabel:"history.state",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]},{subSectionId:"navigation-methods",subSectionLabel:"Navigation Methods",description:`
                ...
              `,topics:[{topicId:"history-back()",topicLabel:"history.back()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"history-forward()",topicLabel:"history.forward()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"history-go()",topicLabel:"history.go()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]},{subSectionId:"pushstate-replacestate",subSectionLabel:"pushState / replaceState",description:`
                ...
              `,topics:[{topicId:"history-pushState()",topicLabel:"history.pushState()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"history-replaceState()",topicLabel:"history.replaceState()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"popstate-event",topicLabel:"popstate event",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]}]},{sectionId:"location-object",sectionLabel:"8.4 Location Object",description:`
          <p>...</p>
        `,subSections:[{subSectionId:"location-properties",subSectionLabel:"Location Properties",description:`
                ...
              `,topics:[{topicId:"location-href",topicLabel:"location.href",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"location-pathname",topicLabel:"location.pathname",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"location-search",topicLabel:"location.search",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"location-hash",topicLabel:"location.hash",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]},{subSectionId:"location-methods",subSectionLabel:"Location Methods",description:`
                ...
              `,topics:[{topicId:"location-reload()",topicLabel:"location.reload()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"location-assign()",topicLabel:"location.assign()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]},{topicId:"location-replace()",topicLabel:"location.replace()",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]}]},{sectionId:"content-editable",sectionLabel:"8.5 ContentEditable",description:`
          <p>...</p>
        `,subSections:[{subSectionId:"using-contenteditable",subSectionLabel:"Using contenteditable",description:`
                ...
              `,topics:[{topicId:"contenteditable-attribute",topicLabel:"contenteditable attribute",description:`
                  ...
                `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div contenteditable="true">Edit me</div>
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0}]},{topicId:"element-contentEditable",topicLabel:"element.contentEditable",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{js:!0}]}]},{subSectionId:"reading-edited-content",subSectionLabel:"Reading Edited Content",description:`
                ...
              `,topics:[{topicId:"reading-textcontent",topicLabel:"Reading with textContent",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,js:!0}]},{topicId:"reading-innerhtml",topicLabel:"Reading with innerHTML",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,js:!0}]}]},{subSectionId:"controlling-with-javascript",subSectionLabel:"Controlling with Javascript",description:`
                ...
              `,topics:[{topicId:"enabling-via-js",topicLabel:"Enabling via Javascript",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,js:!0}]},{topicId:"is-content-editable",topicLabel:"element.isContentEditable",description:`
                  ...
                `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,js:!0}]}]}]},{sectionId:"design-mode",sectionLabel:"8.6 Design Mode",description:`
          <p>The <code>document.designMode</code> property in HTML allows for making the entire document editable within the browser. This property can be set to either "on" or "off".</p>
        `,subSections:[{subSectionId:"enabling-design-mode",subSectionLabel:"Enabling Design Mode",topics:[{topicId:"document-designMode",topicLabel:'document.designMode = "on" / "off"',cardCodes:[{cardLabel:"Javascript",language:"js",code:`
document.designMode = "on";
                `}]}]}]}];this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${c}
      </style>

      <wc-page-header
        category="Javascript"
        page="Module 8"
        unit="Core Language"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,i(this.shadowRoot,e)}}customElements.define("wc-frontend-js-module-8",s);export{s as default};
