import{s as t}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as a,s as i}from"./renderSection-CSqRZScD.js";import"./Card-ejHzky1x.js";import"./index-Dc8t_vK0.js";const s=`
  .organisms-header {
    background-color: #EEEEEE;
    padding: 5px
  }
  
  .organisms-nav {
    display: flex;
    gap:12px;
  }

  .template-header, .template-footer {
    background:#ddd; height:40px;
    display: grid;
    display: grid;
  }

  .template-main {
    display:grid; grid-template-columns:2fr 1fr;
    gap:8px;
  }

  .template-section, .template-aside {
    background:#eee;
    height:80px;
  }

  .template-header, .template-section, .template-aside, .template-footer {
    display: grid;
    place-items: center;
    border-radius: 5px;
    border: 2px solid var(--slate-4)
  }

  .template-header, .template-section, .template-aside {
    margin-bottom: 8px;
  }
 
`;class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What is Atomic Design?",description:`
            <p><strong>Atomic Design</strong> is a methodology for building user interfaces by breaking them into small, reusable components.</p>

            <p>Instead of designing entire pages at once, interfaces are built from small pieces that combine together to form larger structures.</p>
        `},{sectionId:"why",sectionLabel:"Why use it?",sectionAriaLabel:"Why use Atomic Design",description:`
            <p>Atomic Design helps create consistent interfaces, improves reusability, and makes large applications easier to maintain.</p>

            <p>By separating UI into clear layers, teams can scale design systems more easily.</p>
        `},{sectionId:"atoms",sectionLabel:"Atoms",sectionAriaLabel:"Atoms in Atomic Design",description:`
            <p>Atoms are the smallest building blocks of an interface. They cannot be broken down further without losing meaning.</p>

            <p>Examples include buttons, inputs, labels, and icons.</p>
        `,examples:[{cardLabel:"button",language:"html",code:`
<button>Click me!</button>
            `,preview:()=>`
              <button>Click me!</button>
            `},{cardLabel:"input",language:"html",code:`
              <input type="text" placeholder="Write something here.."/>
            `,preview:()=>`
              <input type="text" placeholder="Write something here.."/>
            `}]},{sectionId:"molecules",sectionLabel:"Molecules",sectionAriaLabel:"Molecules in Atomic Design",description:`
            <p>Molecules are groups of atoms working together as a single functional unit.</p>

            <p>For example, a search bar made of an input and a button.</p>
        `,examples:[{cardLabel:"Search bar",language:"html",code:`
<div>
  <input type="text" placeholder="Search..." />
  <button>Search</button>
</div>
            `,preview:()=>`
              <div style="flex">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
              </div>
            `}]},{sectionId:"organisms",sectionLabel:"Organisms",sectionAriaLabel:"Organisms in Atomic Design",description:`
            <p>Organisms are complex components made from molecules and atoms combined together.</p>

            <p>Examples include headers, navigation bars, or cards with multiple elements.</p>
        `,examples:[{cardLabel:"Header",language:"html",code:`
<header>
  <h1>Logo</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>
            `,preview:()=>`
              <header class="organisms-header">
                <strong>Logo</strong>
                <nav style="organisms-nav">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </nav>
              </header>
            `}]},{sectionId:"templates",sectionLabel:"Templates",sectionAriaLabel:"Templates in Atomic Design",description:`
            <p>Templates define page structure and layout without real content.</p>

            <p>They focus on placement and composition rather than final data.</p>
        `,examples:[{cardLabel:"Page template",language:"html",code:`
<header></header>
<main>
  <section></section>
  <aside></aside>
</main>
<footer></footer>
            `,preview:()=>`
              <div>
                <div class="template-header">Header</div>
                <div class="template-main">
                  <div class="template-section">Section</div>
                  <div class="template-aside">Aside</div>
                </div>
                <div class="template-footer">Footer</div>
              </div>
            `}]},{sectionId:"pages",sectionLabel:"Pages",sectionAriaLabel:"Pages in Atomic Design",description:`
            <p>Pages are specific instances of templates filled with real content.</p>

            <p>This is where the final UI appears to users.</p>
        `}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${s}
      </style>

      <wc-page-header
        category="Architecture"
        page="Atomic Design"
        aria-label="Atomic Design"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${a(e)}</div>
    `,i(this.shadowRoot,e)}}customElements.define("wc-atomic-design",o);export{o as default};
