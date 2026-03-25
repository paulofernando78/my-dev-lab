import{s as t}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as i,s as o}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Wrapper-CztuctmA.js";import"./Image-BIJaaz-z.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./Links-BGN6UMut.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const n={sectionId:"tags",sectionLabel:"Tags",sectionAriaLabel:"Tags",description:`
          <p>HTML provides several semantic elements that define the structure of a webpage. These elements describe the role of each part of the layout instead of just grouping content.</p>

          <p>Common semantic layout elements include:</p>

          <ul>
            <li><code>&lt;header&gt;</code></li>
            <li><code>&lt;nav&gt;</code></li>
            <li><code>&lt;main&gt;</code></li>
            <li><code>&lt;section&gt;</code></li>
            <li><code>&lt;article&gt;</code></li>
            <li><code>&lt;aside&gt;</code></li>
            <li><code>&lt;footer&gt;</code></li>
          </ul>

          <p>Each element communicates the purpose of its content to browsers, developers, and assistive technologies.</p>
        `,subSections:[{subSectionId:"header",subSectionLabel:"Header",subSectionAriaLabel:"Header",description:`
              <p>The <code>&lt;header&gt;</code> element represents introductory content for a page or section.</p>

              <p>It typically contains:</p>

              <ul>
              <li>Logo or site title</li>
              <li>Navigation menus</li>
              <li>Search bars</li>
              <li>Introductory headings</li>
              </ul>

              <p>A page may contain multiple headers, for example inside articles or sections.</p>
            `},{subSectionId:"navigation",subSectionLabel:"Navigation",subSectionAriaLabel:"Navigation",description:`
              <p>The <code>&lt;nav&gt;</code> element defines a section that contains navigation links.</p>

              <p>It is commonly used for:</p>

              <ul>
              <li>Main site navigation</li>
              <li>Sidebar navigation</li>
              <li>Table of contents</li>
              </ul>

              <p>Not every group of links needs to be inside a <code>&lt;nav&gt;</code>. Only major navigation blocks should use it.</p>
            `},{subSectionId:"main",subSectionLabel:"Main",subSectionAriaLabel:"Main",description:`
              <p>The <code>&lt;main&gt;</code> element represents the primary content of a webpage.</p>

              <p>It contains the most important information of the page and should be unique.</p>

              <ul>
                <li>There should only be <strong>one</strong> <code>&lt;main&gt;</code> element per page.</li>
                <li>It should not be inside <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, or <code>&lt;aside&gt;</code>.</li>
                <li>It usually contains articles, sections, or other core content.</li>
              </ul>

              <p>Assistive technologies use <code>&lt;main&gt;</code> to quickly jump to the main content of the page.</p>
            `},{subSectionId:"section",subSectionLabel:"Section",subSectionAriaLabel:"Section",description:`
              <p>The <code>&lt;section&gt;</code> element represents a thematic grouping of content.</p>

              <p>Sections usually include a heading and group related information together.</p>

              <p>For example:</p>

              <ul>
              <li>Chapters of an article</li>
              <li>Different topics on a page</li>
              <li>Feature blocks</li>
              </ul>
            `},{subSectionId:"article",subSectionLabel:"Article",subSectionAriaLabel:"Article",description:`
              <p>The <code>&lt;article&gt;</code> element represents independent, self-contained content.</p>

              <p>Examples include:</p>

              <ul>
              <li>Blog posts</li>
              <li>News articles</li>
              <li>Forum posts</li>
              <li>Product cards</li>
              </ul>

              <p>The key idea is that the content could be reused or distributed independently.</p>
            `},{subSectionId:"aside",subSectionLabel:"Aside",subSectionAriaLabel:"Aside",description:`
              <p>The <code>&lt;aside&gt;</code> element contains content that is related to the main content but not essential to it.</p>

              <p>Common examples include:</p>

              <ul>
              <li>Sidebars</li>
              <li>Related links</li>
              <li>Advertisements</li>
              <li>Additional information</li>
              </ul>
            `},{subSectionId:"footer",subSectionLabel:"Footer",subSectionAriaLabel:"Footer",description:`
              <p>The <code>&lt;footer&gt;</code> element represents the footer for a page or section.</p>

              <p>It commonly includes:</p>

              <ul>
              <li>Copyright information</li>
              <li>Contact links</li>
              <li>Privacy policies</li>
              <li>Social media links</li>
              </ul>

              <p>A page may contain multiple footers, for example inside articles or sections.</p>
            `}]},a={sectionId:"layouts",sectionLabel:"Layouts",sectionAriaLabel:"Layouts",description:`
          <p>Semantic layouts help both humans and machines understand how the page is organized.</p>
        `,subSections:[{subSectionId:"basic",subSectionLabel:"Basic",subSectionAriaLabel:"Basic",description:`
    <p>This is the most common semantic page structure.</p>

    <p>It separates the page into clear regions such as header, navigation, main content, and footer.</p>

    <p><strong>Good for:</strong></p>
    <ul>
      <li>Simple websites</li>
      <li>Landing pages</li>
      <li>Small projects</li>
    </ul>
  `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<header>
  <h1>Website Title</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">Articles</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Main Article</h2>
    <p>This is the main content of the page.</p>
  </article>

  <aside>
    <h3>Related</h3>
    <p>Additional information or links.</p>
  </aside>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>
                `}]},{subSectionId:"article-layout",subSectionLabel:"Article Layout",subSectionAriaLabel:"Article Layout",description:`
              <p>This layout is commonly used for blogs and news websites.</p>

              <p>The main content is placed inside an <code>&lt;article&gt;</code> element, while related information appears in an <code>&lt;aside&gt;</code>.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Blogs</li>
                <li>News websites</li>
                <li>Content-focused pages</li>
              </ul>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<header>
  <h1>Blog</h1>
</header>

<main>
  <article>
    <h2>Post Title</h2>
    <p>Post content...</p>
  </article>

  <aside>
    <p>Related posts</p>
  </aside>
</main>

<footer>
  <p>© Blog</p>
</footer>
                `}]},{subSectionId:"documentation-layout",subSectionLabel:"Documentation Layout",subSectionAriaLabel:"Documentation Layout",description:`
              <p>This layout is common in developer documentation and course websites.</p>

              <p>A sidebar navigation is placed next to the main article content.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Documentation sites</li>
                <li>Course platforms</li>
                <li>Knowledge bases</li>
              </ul>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<header>
  <h1>Documentation</h1>
</header>

<main>
  <nav>
    <ul>
      <li>Introduction</li>
      <li>Installation</li>
    </ul>
  </nav>

  <article>
    <h2>Getting Started</h2>
    <p>Documentation content...</p>
  </article>
</main>

<footer>
  <p>Docs</p>
</footer>
                `}]},{subSectionId:"dashboard-layout",subSectionLabel:"Dashboard Layout",subSectionAriaLabel:"Dashboard Layout",description:`
              <p>This layout is often used in web applications and admin panels.</p>

              <p>A sidebar contains navigation while the main area displays application content.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Admin panels</li>
                <li>Dashboards</li>
                <li>Web applications</li>
              </ul>
            `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<header>
  <h1>Dashboard</h1>
</header>

<main>
  <aside>
    <p>Menu</p>
  </aside>

  <section>
    <h2>Analytics</h2>
  </section>
</main>

<footer>
  <p>Admin</p>
</footer>
                `}]}]},s={sectionId:"why",sectionLabel:"Why is it important?",sectionAriaLabel:"Why is it important?",description:`
          <p><strong>Semantic HTML tags</strong> describe the meaning and purpose of content, not just its appearance. They help browsers, search engines, and assistive technologies understand the structure of a page.</p>

          <p>For example, using <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> clearly communicates the role of each part of the page.</p>
          <p>This improves:</p>

          <ul>
            <li><strong>Accessibility</strong> - Screen readers can navigate the page structure more easily.</li>
            <li><strong>SEO</strong> - Search engines better understand the content hierarchy.</li>
            <li><strong>Maintainability</strong> - Developers can read and understand the layout faster.</li>
          </ul>

          <p>Using semantic elements instead of generic containers like <code>&lt;div&gt;</code> makes your HTML more meaningful and future-proof.</p>
        `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}]},e=[n,a,s],l=`

`;class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${l}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${i(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-frontend-html-module-4",c);export{c as default};
