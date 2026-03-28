export const section41 = {
        sectionId: "tags",
        sectionLabel: "Tags",
        description: /* html */ `
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
        `,
        subSections: [
          {
            subSectionId: "header",
            subSectionLabel: "Header",
            description: /* html */ `
              <p>The <code>&lt;header&gt;</code> element represents introductory content for a page or section.</p>

              <p>It typically contains:</p>

              <ul>
              <li>Logo or site title</li>
              <li>Navigation menus</li>
              <li>Search bars</li>
              <li>Introductory headings</li>
              </ul>

              <p>A page may contain multiple headers, for example inside articles or sections.</p>
            `,
          },
          {
            subSectionId: "navigation",
            subSectionLabel: "Navigation",
            description: /* html */ `
              <p>The <code>&lt;nav&gt;</code> element defines a section that contains navigation links.</p>

              <p>It is commonly used for:</p>

              <ul>
              <li>Main site navigation</li>
              <li>Sidebar navigation</li>
              <li>Table of contents</li>
              </ul>

              <p>Not every group of links needs to be inside a <code>&lt;nav&gt;</code>. Only major navigation blocks should use it.</p>
            `,
          },
          {
            subSectionId: "main",
            subSectionLabel: "Main",
            description: /* html */ `
              <p>The <code>&lt;main&gt;</code> element represents the primary content of a webpage.</p>

              <p>It contains the most important information of the page and should be unique.</p>

              <ul>
                <li>There should only be <strong>one</strong> <code>&lt;main&gt;</code> element per page.</li>
                <li>It should not be inside <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, or <code>&lt;aside&gt;</code>.</li>
                <li>It usually contains articles, sections, or other core content.</li>
              </ul>

              <p>Assistive technologies use <code>&lt;main&gt;</code> to quickly jump to the main content of the page.</p>
            `,
          },
          {
            subSectionId: "section",
            subSectionLabel: "Section",
            description: /* html */ `
              <p>The <code>&lt;section&gt;</code> element represents a thematic grouping of content.</p>

              <p>Sections usually include a heading and group related information together.</p>

              <p>For example:</p>

              <ul>
              <li>Chapters of an article</li>
              <li>Different topics on a page</li>
              <li>Feature blocks</li>
              </ul>
            `,
          },
          {
            subSectionId: "article",
            subSectionLabel: "Article",
            description: /* html */ `
              <p>The <code>&lt;article&gt;</code> element represents independent, self-contained content.</p>

              <p>Examples include:</p>

              <ul>
              <li>Blog posts</li>
              <li>News articles</li>
              <li>Forum posts</li>
              <li>Product cards</li>
              </ul>

              <p>The key idea is that the content could be reused or distributed independently.</p>
            `,
          },
          {
            subSectionId: "aside",
            subSectionLabel: "Aside",
            description: /* html */ `
              <p>The <code>&lt;aside&gt;</code> element contains content that is related to the main content but not essential to it.</p>

              <p>Common examples include:</p>

              <ul>
              <li>Sidebars</li>
              <li>Related links</li>
              <li>Advertisements</li>
              <li>Additional information</li>
              </ul>
            `,
          },
          {
            subSectionId: "footer",
            subSectionLabel: "Footer",
            description: /* html */ `
              <p>The <code>&lt;footer&gt;</code> element represents the footer for a page or section.</p>

              <p>It commonly includes:</p>

              <ul>
              <li>Copyright information</li>
              <li>Contact links</li>
              <li>Privacy policies</li>
              <li>Social media links</li>
              </ul>

              <p>A page may contain multiple footers, for example inside articles or sections.</p>
            `,
          },
        ],
      };
