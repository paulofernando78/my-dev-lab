export const section42 = {
        sectionId: "layouts",
        sectionLabel: "Layouts",
        sectionAriaLabel: "Layouts",
        description: /* html */ `
          <p>Semantic layouts help both humans and machines understand how the page is organized.</p>
        `,
        subSections: [
          {
            subSectionId: "basic",
            subSectionLabel: "Basic",
            subSectionAriaLabel: "Basic",
            description: /* html */ `
    <p>This is the most common semantic page structure.</p>

    <p>It separates the page into clear regions such as header, navigation, main content, and footer.</p>

    <p><strong>Good for:</strong></p>
    <ul>
      <li>Simple websites</li>
      <li>Landing pages</li>
      <li>Small projects</li>
    </ul>
  `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
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
                `,
              },
            ],
          },
          {
            subSectionId: "article-layout",
            subSectionLabel: "Article Layout",
            subSectionAriaLabel: "Article Layout",
            description: /* html */ `
              <p>This layout is commonly used for blogs and news websites.</p>

              <p>The main content is placed inside an <code>&lt;article&gt;</code> element, while related information appears in an <code>&lt;aside&gt;</code>.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Blogs</li>
                <li>News websites</li>
                <li>Content-focused pages</li>
              </ul>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
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
                `,
              },
            ],
          },
          {
            subSectionId: "documentation-layout",
            subSectionLabel: "Documentation Layout",
            subSectionAriaLabel: "Documentation Layout",
            description: /* html */ `
              <p>This layout is common in developer documentation and course websites.</p>

              <p>A sidebar navigation is placed next to the main article content.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Documentation sites</li>
                <li>Course platforms</li>
                <li>Knowledge bases</li>
              </ul>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
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
                `,
              },
            ],
          },
          {
            subSectionId: "dashboard-layout",
            subSectionLabel: "Dashboard Layout",
            subSectionAriaLabel: "Dashboard Layout",
            description: /* html */ `
              <p>This layout is often used in web applications and admin panels.</p>

              <p>A sidebar contains navigation while the main area displays application content.</p>

              <p><strong>Good for:</strong></p>
              <ul>
                <li>Admin panels</li>
                <li>Dashboards</li>
                <li>Web applications</li>
              </ul>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
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
                `,
              },
            ],
          },
        ],
      };
