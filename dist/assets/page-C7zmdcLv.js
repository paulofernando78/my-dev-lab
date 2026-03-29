import{s as o}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as s,s as c}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./SubSection-Dx3IDIH1.js";import"./Links-jNmpqXk5.js";import"./Image-BzCDZVMb.js";import"./Topic-7L1nWIDb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";import"./Spacer-MCI0SMHI.js";import"./ifSum-CAJQOuwG.js";const a={subSectionId:"truthy-falsy",subSectionLabel:"Truthy & Falsy",description:`
    <p>In JavaScript, every value is either <strong>truthy</strong> or <strong>falsy</strong>. When a value is used in a condition, JavaScript automatically converts it to a boolean.</p>

    <p>You can check any value using <code>Boolean(value)</code> or the double negation <code>!!value</code>.</p>
  `,topics:[{topicId:"values",topicLabel:"Values",description:`
        <p>A <strong>truthy</strong> value is any value that evaluates to <code>true</code> in a boolean context. Most values in JavaScript are truthy.</p>

        <p>A <strong>falsy</strong> value is any value that evaluates to <code>false</code> in a boolean context. There are only a few falsy values in JavaScript: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, and <code>NaN</code>.</p>

        <p>Common truthy/falsy values:</p>

        <wc-column header-1="Truthy" header-2="Falsy">
        <div slot="col-1">
          <wc-code language="js">
Boolean(true)

// Non-empty strings
Boolean("hello") // true

// Non-zero numbers 
Boolean(1) // true
Boolean(-1) // true
Boolean(3.14) // true

// Arrays (even empty ones)
Boolean([])

// Objects (even empty ones)
Boolean({})
</wc-code>
      </div>

      <div slot="col-2">
      <wc-code language="js">
Boolean(false)

// Empty strings
Boolean("") // false

// Zero number
Boolean(0) // false

// null / undefined / NaN
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
          </wc-code>
        </div>
      </wc-column>
      <p>Now practice it by writing different values. Follow the example below.</p>
      <wc-code language="js">
const result = Boolean(value);
console.log(result)
      </wc-code>
      <p>It's also possible to write:</p>
        <wc-code language="js">
const result = value;
console.log(Boolean(result))
        </wc-code>
      `,sandbox:[{js:!0,console:!0}]}]},l={subSectionId:"if-else",subSectionLabel:"if • if  / else • if / else if / else",description:`
    <p>The <code>if</code> statement is the most basic conditional. It runs a block of code only when a condition evaluates to <code>true</code>.</p>

    <p>You can chain additional conditions using <code>else if</code>, and provide a final fallback with <code>else</code> that runs when none of the conditions match.</p>

    

    <p>Only the first matching branch executes — the rest are skipped.</p>
  `,topics:[{topicId:"if",topicLabel:"if",description:`
        <p>The <code>if</code> statement runs a block of code only when its condition evaluates to <code>true</code>. If the condition is <code>false</code>, the block is skipped entirely.</p>
        
          <wc-code language="js">
if (condition) {
  // runs if condition is true
}
          </wc-code>
      `,sandbox:[{js:!0,console:!0}]},{topicId:"if-else",topicLabel:"if / else",description:`
        <p>Adding <code>else</code> provides a fallback block that runs when the <code>if</code> condition is <code>false</code>. One of the two branches will always execute.</p>

          <wc-code language="js">
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
          </wc-code>
      `},{topicId:"add-apples",topicLabel:"add apples",cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div>
  <span>Apples on sale.</span>
  <span>Max 5 per person.</span>
  <div class="inner-container">
    <image
      src="/assets/images/apple.png"
      alt="apple icon"
      class="apple"
    ></image>
    <button>Add</button>
    <div id="counter">0</div>
  </div>
  <span id="msg"></span>
</div>
      `},{cardLabel:"CSS",language:"css",code:`
.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: max-content;
  margin-block: 1rem;
  padding-inline: 1rem;
}

.apple {
  width: 24px;
}

span {
  display: block;
}

button {
  width: max-content;
}
  
          `},{cardLabel:"Javascript",language:"js",code:`
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", () => {
    const counter = document.querySelector("#counter");
    const total = Number(counter.textContent) + 1;
    if (total <= 5) {
      counter.textContent = total;
    } else {
      const msg = document.querySelector("#msg");
      msg.innerText = "You've reached max items per person."
    }
  });
}         
          `}],preview:`
        <wc-if-sum></wc-if-sum>
                `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"if-else-if-else",topicLabel:"if / else if / else",description:`
        <p>Use <code>else if</code> to check additional conditions in sequence. Only the first matching branch executes — the rest are skipped. The final <code>else</code> is optional and acts as a catch-all.</p>

          <wc-code language="js">
if (condition) {
  // runs if condition is true
} else if (otherCondition) {
  // runs if otherCondition is true
} else {
  // runs if none of the above matched
}
          </wc-code>
      `}]},r={subSectionId:"ternary",subSectionLabel:"Ternary Operator",topics:[{topicId:"ternary-operator",topicLabel:"condition ? a : b"},{topicId:"ternary-vs-if-else",topicLabel:"Ternary vs if / else"}]},d={subSectionId:"switch",subSectionLabel:"switch",topics:[{topicId:"switch-statement",topicLabel:"switch statement"},{topicId:"fallthrough",topicLabel:"Fallthrough"}]},p={subSectionId:"logical-operators",subSectionLabel:"Logical Operators",topics:[{topicId:"logical-not",topicLabel:"! (NOT)"},{topicId:"logical-and",topicLabel:"&& (AND)"},{topicId:"logical-or",topicLabel:"|| (OR)"}]},u={subSectionId:"nullish-coalescing",subSectionLabel:"Nullish Coalescing (??)",topics:[{topicId:"nullish-coalescing-operator",topicLabel:"?? (Nullish Coalescing)"}]},h={subSectionId:"optional-chaining",subSectionLabel:"Optional Chaining (?.)",topics:[{topicId:"optional-chaining-operator",topicLabel:"?. (Optional Chaining)"},{topicId:"combining-nullish-optional",topicLabel:"Combining ?? and ?."}]},f={sectionId:"conditionals",sectionLabel:"2.1 Conditionals",description:`
    <p>Conditionals allow a program to make decisions and execute different code based on whether a condition is <code>true</code> or <code>false</code>.</p>

    <p>Instead of running the same code every time, conditionals let you control the flow of your program depending on the data or state at that moment.</p>

    <p>JavaScript provides several ways to write conditionals:</p>

    <ul>
      <li><code>if / else</code> — runs a block of code if a condition is met</li>
      <li><strong>Ternary operator</strong> — a shorthand for simple if/else expressions</li>
      <li><code>switch</code> — matches a value against multiple cases</li>
      <li><strong>Logical operators</strong> — combine or short-circuit conditions</li>
      <li><strong>Nullish coalescing</strong> — provides a fallback for <code>null</code> or <code>undefined</code> values</li>
      <li><strong>Optional chaining</strong> — safely accesses nested properties that may not exist</li>
    </ul>
  `,subSections:[a,l,r,d,p,u,h]},b={subSectionId:"for-loop",subSectionLabel:"for",description:`
    <p>The <code>for</code> loop repeats a block of code a known number of times. It combines initialization, a condition check, and an update expression into a single line, making it the most common loop for iterating over sequences.</p>

    <p>The loop runs while the condition is <code>true</code>. When the condition becomes <code>false</code>, the loop stops, and JavaScript continues with the next line after the loop.</p>
  `,topics:[{topicId:"for-loop",topicLabel:"for loop",description:`
        <p>The <code>for</code> loop has three parts separated by semicolons: an <strong>initializer</strong> (runs once before the loop starts), a <strong>condition</strong> (checked before each iteration), and an <strong>update</strong> (runs after each iteration).</p>

          <wc-code language="js">
for (initializer; condition; update) {
  // runs while condition is true
}
          </wc-code>
      `,cardCodes:[{cardLabel:"Javascript",language:"js",code:`
for (let i = 0; i < 3, i++) {
  console.log(i)
}
        `}],preview:`
        <wc-></wc->
      `,sandbox:[{js:!0}]},{topicId:"nested-for",topicLabel:"Nested for",description:`
        <p>A <strong>nested <code>for</code></strong> loop places one loop inside another. The inner loop completes all its iterations for every single iteration of the outer loop — useful for working with grids, matrices, or combinations.</p>

          <wc-code language="js">
for (let i = 0; i < outer; i++) {
  for (let j = 0; j < inner; j++) {
    // runs outer × inner times
  }
}
          </wc-code>
      `}]},g={subSectionId:"while-loops",subSectionLabel:"while / do...while",topics:[{topicId:"while",topicLabel:"while"},{topicId:"do-while",topicLabel:"do...while"},{topicId:"while-vs-do-while",topicLabel:"while vs do...while"},{topicId:"infinite-loops",topicLabel:"Infinite loops"}]},m={subSectionId:"break-continue",subSectionLabel:"break & continue",topics:[{topicId:"break",topicLabel:"break"},{topicId:"continue",topicLabel:"continue"}]},w={subSectionId:"for-of-for-in",subSectionLabel:"for...of / for...in",topics:[{topicId:"for-of",topicLabel:"for...of"},{topicId:"for-in",topicLabel:"for...in"},{topicId:"for-of-vs-for-in",topicLabel:"for...of vs for...in"}]},v={sectionId:"loops",sectionLabel:"2.2 Loops",subSections:[b,g,m,w]},y={sectionId:"resources",sectionLabel:"Resources",links:[]},e=[f,v,y],L=":host{display:block}.container{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:10px;padding:5px 8px 6px 5px;border:1px solid var(--slate-7);border-radius:5px}.container>div{min-width:0;overflow:auto}.header{display:block;margin:5px}";class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const i=this.getAttribute("header-1"),n=this.getAttribute("header-2");this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${L}
      </style>
      <div class="container">
        <div>
          <span class="header">${i}</span>
          <slot name="col-1"></slot>
        </div>
        <div>
          <span class="header">${n}</span>
          <slot name="col-2"></slot>
        </div>
      </div>
    `}}customElements.define("wc-column",I);class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${o}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${s(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,c(this.shadowRoot,e)}}customElements.define("wc-frontend-js-module-2",S);export{S as default};
