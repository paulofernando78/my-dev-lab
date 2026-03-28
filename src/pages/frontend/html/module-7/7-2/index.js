export const section72 = {
    sectionId: "seo",
    sectionLabel: "SEO",
    description: /* html */ `
      <p>SEO (Search Engine Optimization) helps search engines understand and rank your page. Good HTML structure is the foundation of good SEO.</p>
    `,
    subSections: [
      {
        subSectionId: "meta-tags",
        subSectionLabel: "Meta Tags",
        description: /* html */ `
          <p>Meta tags in the <code>&lt;head&gt;</code> provide information to search engines and social media platforms.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<meta name="description" content="Learn HTML from scratch">
<meta name="keywords" content="HTML, CSS, web development">
<meta property="og:title" content="My Page">
<meta property="og:description" content="Page description">
          ` }
        ]
      },
      {
        subSectionId: "headings-structure",
        subSectionLabel: "Headings Structure",
        description: /* html */ `
          <p>Search engines use heading hierarchy to understand content structure. There should be only one <code>&lt;h1&gt;</code> per page, followed by <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> in order.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>
          ` }
        ]
      },
      {
        subSectionId: "semantic-seo",
        subSectionLabel: "Semantic & SEO",
        description: /* html */ `
          <p>Semantic elements also help SEO by giving search engines context about your content.</p>
          <ul>
            <li><code>&lt;article&gt;</code> — signals standalone content worth indexing</li>
            <li><code>&lt;nav&gt;</code> — identifies navigation links</li>
            <li><code>&lt;main&gt;</code> — marks the primary content of the page</li>
            <li><code>&lt;time datetime="2024-01-01"&gt;</code> — provides machine-readable dates</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<time datetime="2024-01-01">January 1st, 2024</time>
          ` }
        ]
      },
    ],
  };
