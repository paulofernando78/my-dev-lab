import{s as t}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as d,s as u}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./SubSection-DF8fSDKq.js";import"./Links-FCbr7Lwo.js";import"./Image-C4E2eAVl.js";import"./Topic-BbosjqFJ.js";import"./CardCode-yhvPs5fJ.js";import"./Code-fMuPM1Lh.js";import"./Demo-Ci2l3BAP.js";import"./LessonNav-Bi30Oqwd.js";import"./Spacer-MCI0SMHI.js";import"./index-CJbI1lfT.js";const p={subSectionId:"event-listeners",subSectionLabel:"Event Listeners",subSectionAriaLabel:"Event Listeners",description:`
    <p>Event listeners allow you to respond to user actions and browser events by attaching callback functions to DOM elements.</p>
  `,topics:[{topicId:"add-event-listener",topicLabel:"addEventListener()",topicAriaLabel:"addEventListener()",description:`
        <p>The <code>addEventListener()</code> method attaches an event handler to an element. It is the recommended way to listen for events, as it allows multiple handlers on the same element without overwriting each other.</p>
      `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
const button = document.querySelector("button")

button.addEventListener("EVENT_NAME", () => {
console.log("Something happened!")
})
          `}]},{topicId:"remove-event-listener",topicLabel:"removeEventListener()",topicAriaLabel:"removeEventListener()",description:`
        <p>The <code>removeEventListener()</code> method removes an event handler previously added with <code>addEventListener()</code>. The function reference must match exactly — anonymous functions cannot be removed.</p>
      `},{topicId:"event-handler-vs-event-listener",topicLabel:"Event handler vs Event listener",topicAriaLabel:"Event handler vs Event listener",description:`
        <p>An <strong>event handler</strong> is a property like <code>onclick</code> that can hold only one function at a time. An <strong>event listener</strong> uses <code>addEventListener()</code> and supports multiple callbacks for the same event without overwriting previous ones.</p>
      `,notes:`
      <p>There are 3 ways to handle events:</p>
      <ul>
        <li>
          <span>1. Inline HTML attribute</span>
          <wc-spacer></wc-spacer>
            <wc-code language="html">
<button onclick="myFunction()">Click</button>
            </wc-code>
        </li>
        <wc-spacer></wc-spacer>
        <li>
          <span> 2. DOM property (Event Handler)</span>
          <wc-spacer></wc-spacer>
            <wc-code language="js">
button.onclick = function() { ... }
            </wc-code>
        </li>
        <wc-spacer></wc-spacer>
        <p>Both above support only one function at a time — assigning another one overwrites the previous.</p>
        <li>
        <wc-spacer></wc-spacer>
        <span> 3. Event Listener</span>
        <wc-spacer></wc-spacer>
          <wc-code language="js">
button.addEventListener('click', function() { ... })
button.addEventListener('click', anotherFunction)
// stacks, does not overwrite
          </wc-code>
        </li>
      </ul>
      `},{topicId:"event-object",topicLabel:"Event Object",topicAriaLabel:"Event Object",description:`
        <p>When an event fires, the browser automatically passes an <strong>event object</strong> to the callback function. This object contains useful information such as the target element, mouse coordinates, and the key that was pressed.</p>
        <wc-code language="js">
element.addEventListener("click", (event) => {
  console.log(event.type)      // "click"
  console.log(event.target)    // the clicked element
  console.log(event.clientX)   // mouse X position
  console.log(event.key)       // key pressed (keydown)
})
        </wc-code>
      `}]},v={sectionId:"event-fundamentals",sectionLabel:"7.1 Event Fundamentals",sectionAriaLabel:"7.1 Event Fundamentals",description:`
    <p>Events are the foundation of interactivity in JavaScript. This section introduces how to attach and remove event listeners, understand the event object, and distinguish between event handlers and event listeners.</p>
  `,subSections:[p]},h={subSectionId:"click-events",subSectionLabel:"Click Events",subSectionAriaLabel:"Click Events",description:`
    <p>Mouse events allow you to respond to user interactions such as clicks and button presses.</p>
  `,topics:[{topicId:"click-event",topicLabel:"click",topicAriaLabel:"click",description:`
        <p>The <code>click</code> event is triggered when a user clicks on an element. It is one of the most commonly used events for creating interactivity.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<button>Button</button>
          `},{cardLabel:"Javascript",language:"js",code:`
          const button = document.querySelector("button")

button.addEventListener("click", (e) => {
console.log("clicked:", button)
})
          `}],preview:`
        <wc-js-m-7-2-click></wc-js-m-7-2-click>
        <wc-check-console></wc-check-console>
      `,sandbox:[{html:!0,js:!0,console:!0}]},{topicId:"mousedown-mouseup",topicLabel:"mousedown & mouseup",topicAriaLabel:"mousedown and mouseup",description:`
        <p>The <code>mousedown</code> event is triggered when the mouse button is pressed,
        and <code>mouseup</code> when it is released. These events are useful for detecting press and hold interactions.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<button>Button</button>
          `},{cardLabel:"Javascript",language:"js",code:`
const button = document.querySelector("button")

button.addEventListener("mousedown", () => {
  console.log("mousedown:", button)
})

button.addEventListener("mouseup", () => {
  console.log("mouseup:", button)
})          
          `}],preview:`
        <wc-js-m-7-2-mousedown-mouseup></wc-js-m-7-2-mousedown-mouseup>
        <wc-check-console></wc-check-console>
      `,sandbox:[{html:!0,js:!0,console:!0}]}]},b={subSectionId:"hover-events",subSectionLabel:"Hover Events",subSectionAriaLabel:"Hover Events",description:`
    <p>Hover events allow you to detect when the mouse enters or leaves an element.</p>
  `,topics:[{topicId:"mouseenter-mouseleave",topicLabel:"mouseenter & mouseleave",topicAriaLabel:"mouseenter and mouseleave",description:`
        <p>The <code>mouseenter</code> event is triggered when the mouse enters an element, and <code>mouseleave</code> when it leaves.
        These are commonly used for hover effects and UI interactions.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div></div>
        `},{cardLabel:"CSS",language:"css",code:`
div {
  width: 100px;
  height: 100px;
  background-color: black
}
        `},{cardLabel:"Javascript",language:"js",code:`
const div = document.querySelector("div")

div.addEventListener("mouseleave", () => {
  console.log("mouseleave:", div)
})

div.addEventListener("mouseenter", () => {
  console.log("mouseenter:", div)
})          
        `}],preview:`
        <wc-js-m-7-2-mouseenter-mouseleave></wc-js-m-7-2-mouseenter-mouseleave>
        <wc-check-console></wc-check-console>
      `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},m={subSectionId:"mouse-interactions",subSectionLabel:"Mouse Interactions",subSectionAriaLabel:"Mouse Interactions",description:`
    <p>Mouse interaction events track the movement and position of the cursor on the page, enabling dynamic and position-aware UI behaviors.</p>
  `,topics:[{topicId:"mousemove",topicLabel:"mousemove (Tracking Mouse Position)",topicAriaLabel:"mousemove (Tracking Mouse Position)",description:`
        <p>The <code>mousemove</code> event fires continuously as the mouse moves across the page. It provides the current cursor coordinates via <code>event.clientX</code> and <code>event.clientY</code>, making it useful for tracking mouse position in real time.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<span id="x"></span>
<span id="y"></span>
          `},{cardLabel:"CSS",language:"css",code:`
body {
  display: grid;
  place-items: center;
}

#x {
  align-self: end;
}

#y {
  align-self: start;
}
          `},{cardLabel:"Javascript",language:"js",code:`
const spanX = document.querySelector("#x")
const spanY = document.querySelector("#y")

window.addEventListener("mousemove", (event) => {
  spanX.textContent = "x: " + event.clientX
  spanY.textContent = "y: " + event.clientY

  console.log(event.clientX)
  console.log(event.clientY)
})
          `}],preview:`
        <wc-js-m-7-2-mousemove></wc-js-m-7-2-mousemove>
      `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"mousemove-circle",topicLabel:"mousemove (Tracking Mouse circle)",topicAriaLabel:"mousemove (Tracking Mouse circle)",cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div></div>
          `},{cardLabel:"CSS",language:"css",code:`
body {
  display: grid;
  place-items: center;
}

#x {
  align-self: end;
}

#y {
  align-self: start;
}
          `},{cardLabel:"Javascript",language:"js",code:`
const spanX = document.querySelector("#x")
const spanY = document.querySelector("#y")

window.addEventListener("mousemove", (event) => {
  spanX.textContent = "x: " + event.clientX
  spanY.textContent = "y: " + event.clientY

  console.log(event.clientX)
  console.log(event.clientY)
})
          `}],preview:`
        <wc-js-m-7-2-mousemove-circle></wc-js-m-7-2-mousemove-circle>
        <wc-check-console></wc-check-console>
      `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},g={sectionId:"mouse-events",sectionLabel:"7.2 Mouse Events",sectionAriaLabel:"7.2 Mouse Events",description:`
    <p>Mouse events let you detect and respond to user interactions with the pointer, including clicks, button presses, hover states, and cursor movement.</p>
  `,subSections:[h,b,m]},w={subSectionId:"key-events",subSectionLabel:"Key Events",subSectionAriaLabel:"Key Events",description:`
    <p>Key events fire when the user interacts with the keyboard, giving you access to which key was pressed and when.</p>
  `,topics:[{topicId:"keydown-keyup",topicLabel:"keydown & keyup",topicAriaLabel:"keydown and keyup",description:`
        <p>The <code>keydown</code> event fires when a key is pressed down, and <code>keyup</code> fires when it is released. You can identify the pressed key using <code>event.key</code> (human-readable) or <code>event.code</code> (physical key position).</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"event-key-vs-code",topicLabel:"event.key vs event.code",topicAriaLabel:"event key vs event code",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},L={sectionId:"keyboard-events",sectionLabel:"7.3 Keyboard Events",sectionAriaLabel:"7.3 Keyboard Events",description:`
    <p>Keyboard events allow you to detect and respond to key presses from the user, enabling custom shortcuts, input handling, and interactive controls.</p>
  `,subSections:[w]},y={subSectionId:"form-input-events",subSectionLabel:"Form Input Events",subSectionAriaLabel:"Form Input Events",description:`
    <p>These core form events cover the most common ways users interact with inputs, selects, and form submissions.</p>
  `,topics:[{topicId:"form-events-core",topicLabel:"submit, input & change",topicAriaLabel:"submit input change",description:`
        <p>The <code>submit</code> event fires when a form is submitted. The <code>input</code> event fires on every keystroke or value change in real time, while <code>change</code> fires only when the element loses focus after its value has changed.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"focus-blur",topicLabel:"focus & blur",topicAriaLabel:"focus and blur",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"prevent-default",topicLabel:"preventDefault()",topicAriaLabel:"preventDefault",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},f={sectionId:"form-events",sectionLabel:"7.4 Form Events",sectionAriaLabel:"7.4 Form Events",description:`
    <p>Form events fire in response to user interactions with form elements, allowing you to validate input, track changes, and handle form submissions.</p>
  `,subSections:[y]},k={subSectionId:"window-events",subSectionLabel:"Window Events",subSectionAriaLabel:"Window Events",description:`
    <p>Window events fire at the global level, responding to browser lifecycle changes such as the page finishing loading, the viewport being resized, or the user scrolling.</p>
  `,topics:[{topicId:"domcontentloaded-load",topicLabel:"DOMContentLoaded & load",topicAriaLabel:"DOMContentLoaded and load",description:`
        <p><code>DOMContentLoaded</code> fires as soon as the HTML is fully parsed and the DOM is ready, without waiting for images or stylesheets. <code>load</code> fires only after all resources on the page have finished loading. Use <code>DOMContentLoaded</code> when you just need the DOM, and <code>load</code> when you need everything.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"resize-scroll",topicLabel:"resize & scroll",topicAriaLabel:"resize and scroll",description:`
        <p>The <code>resize</code> event fires on the <code>window</code> object whenever the viewport dimensions change. The <code>scroll</code> event fires as the user scrolls the page, giving access to the current scroll position via <code>window.scrollY</code>. Both events can fire very frequently, so it is common to use debouncing or throttling for performance.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"beforeunload",topicLabel:"beforeunload",topicAriaLabel:"beforeunload",description:`
        <p>The <code>beforeunload</code> event fires just before the user leaves the page — closing the tab, navigating away, or refreshing. It can be used to show a confirmation dialog warning the user about unsaved changes. The browser controls the exact message shown to the user.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},S={sectionId:"window-global-events",sectionLabel:"7.5 Window & Global Events",sectionAriaLabel:"7.5 Window & Global Events",description:`
    <p>The browser exposes global events on the <code>window</code> object that fire in response to lifecycle and environment changes, such as page load, resize, and scroll.</p>
  `,subSections:[k]},E={subSectionId:"event-propagation",subSectionLabel:"Event Propagation",subSectionAriaLabel:"Event Propagation",description:`
    <p>Event propagation describes the journey an event takes through the DOM tree, from the root to the target element and back.</p>
  `,topics:[{topicId:"bubbling-capturing",topicLabel:"Bubbling & Capturing",topicAriaLabel:"Bubbling and Capturing",description:`
        <p>When an event fires, it travels through the DOM in three phases: <strong>capturing</strong> (from the root down to the target), the <strong>target</strong> phase, and <strong>bubbling</strong> (from the target back up to the root). By default, most event listeners use the bubbling phase. Use <code>stopPropagation()</code> to prevent further propagation.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"stop-propagation",topicLabel:"stopPropagation()",topicAriaLabel:"stopPropagation",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},C={sectionId:"event-flow",sectionLabel:"7.6 Event Flow",sectionAriaLabel:"7.6 Event Flow",description:`
    <p>Understanding how events travel through the DOM is essential for building predictable and efficient event-driven applications.</p>
  `,subSections:[E]},j={subSectionId:"common-patterns",subSectionLabel:"Common Patterns",subSectionAriaLabel:"Common Patterns",description:`
    <p>These patterns represent best practices for working with events in scalable and performant JavaScript applications.</p>
  `,topics:[{topicId:"once-option",topicLabel:"{ once: true }",topicAriaLabel:"once option",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"event-delegation",topicLabel:"Event Delegation",topicAriaLabel:"Event Delegation",description:`
        <p>Event delegation is a technique where a single event listener is placed on a parent element to handle events for all its children. It works because of event bubbling, and is especially useful for dynamic content where child elements are added or removed at runtime.</p>
      `,cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"debounce-throttle",topicLabel:"Debounce & Throttle",topicAriaLabel:"Debounce and Throttle",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}],preview:"<wc-></wc->",sandbox:[{html:!0,css:!0,js:!0,console:!0}]}]},M={sectionId:"event-patterns",sectionLabel:"7.7 Event Patterns",sectionAriaLabel:"7.7 Event Patterns",description:`
    <p>Common event patterns are reusable techniques for handling events efficiently and cleanly across real-world applications.</p>
  `,subSections:[j]},T={sectionId:"resources",sectionLabel:"Resources",sectionAriaLabel:"Resources",links:[{href:"https://www.google.com/",label:"link"}]},l=[v,g,L,f,S,C,M,T],x=`
  div {
    margin-top: 1.5rem
  }
`;class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${x}
      </style>
      <div class="flex-align-center">
        <wc-icon name="attention"></wc-icon>
        <span>Check console</span>
      </div>
      `}}customElements.define("wc-check-console",I);class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector("button");e.addEventListener("click",()=>{console.log("clicked",e)})}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <button>Button</button>
    `}}customElements.define("wc-js-m-7-2-click",A);class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector("button");e.addEventListener("mousedown",()=>{console.log("mousedown:",e)}),e.addEventListener("mouseup",()=>{console.log("mouseup:",e)})}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <button>Button</button>
    `}}customElements.define("wc-js-m-7-2-mousedown-mouseup",H);const J=":host{display:block}div{width:100px;height:100px;background-color:#000}";let R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector("div");e.addEventListener("mouseleave",()=>{console.log("mouseleave:",e)}),e.addEventListener("mouseenter",()=>{console.log("mouseenter:",e)})}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${J}
      </style>
      <div></div>
    `}};customElements.define("wc-js-m-7-2-mouseenter-mouseleave",R);const q=":host{display:block;height:150px}.preview{min-height:160px;display:grid;place-items:center}#x{align-self:end}#y{align-self:start}";class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector(".preview"),n=this.shadowRoot.querySelector("#x"),a=this.shadowRoot.querySelector("#y");e.addEventListener("mousemove",s=>{const c=e.getBoundingClientRect(),i=Math.floor(s.clientX-c.left),r=Math.floor(s.clientY-c.top);n.textContent="x: "+i,a.textContent="y: "+r,console.log(n),console.log(a)})}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${q}
      </style>
      <div class="preview">
        <span id="x"></span>
        <span id="y"></span>
      </div>
    `}}customElements.define("wc-js-m-7-2-mousemove",D);const $=".preview{position:relative;width:100%;height:200px;overflow:hidden;cursor:none}.circle{position:absolute;translate:-50% -50%;width:16px;height:16px;background-color:red;border-radius:50%;pointer-events:none}";class X extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector(".preview"),n=this.shadowRoot.querySelector(".circle");function a(s){const c=e.getBoundingClientRect(),i=s.clientX-c.left,r=s.clientY-c.top;n.style.left=i+"px",n.style.top=r+"px",console.log(n)}e.addEventListener("mousemove",a)}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${$}
      </style>
      <div class="preview">
        <div class="circle"></div>
      </div>
    `}}customElements.define("wc-js-m-7-2-mousemove-circle",X);class Y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${d(l)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,u(this.shadowRoot,l)}}customElements.define("wc-frontend-js-module-7",Y);export{Y as default};
