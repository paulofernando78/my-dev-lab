export const section21 = {
        sectionId: "text-and-content-structure",
        sectionLabel: "Text and Content Structure",
        description: /* html */ `
          <p>HTML provides elements that define the structure and organization of textual content on a webpage.</p>
          <p>Elements such as <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> and <code>&lt;p&gt;</code> help organize information into meaningful sections and paragraphs.</p>
          <p>This structure improves readability for users and helps search engines and assistive technologies understand the content of the page.</p>
          `,
        subSections: [
          {
            subSectionId: "headings",
            subSectionLabel: "Headings",
            description: /* html */ `
              <p>Headings define the structure and hierarchy of a page.</p>
              <p>They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
              <p>Search engines and assistive technologies use headings to understand the structure of the document.</p>
            `,
            topics: [
              {
                topicId: "heading-levels",
                topicLabel: "Heading Levels",
                description: /* html */ `
                  <p>Headings should be used in order to reflect the structure of the content, not just to make text look bigger.</p>
                  <p>A page normally starts with one <code>&lt;h1&gt;</code>, then uses <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, and so on for nested sections.</p>
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-html-module-2-headings></wc-html-module-2-headings>
                `,
                sandbox: [
                  {
                    html: true,
                  },
                ],
              },
            ],
          },
          {
            subSectionId: "paragraph",
            subSectionLabel: "Paragraph",
            description: /* html */ `
              <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
              <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
              <p>Paragraphs are used to group related sentences into blocks of content.</p>
            `,
            topics: [
              {
                topicId: "paragraph-basics",
                topicLabel: "Paragraph Basics",
                description: /* html */ `
                  <p>Paragraphs group related sentences into readable blocks of text.</p>
                  <p>Use a new paragraph when the idea changes, instead of using multiple line breaks for spacing.</p>
                `,
                notes: /* html */ `
                  <p>Browsers add vertical spacing around paragraphs automatically, so you do not need extra empty tags between them.</p>
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `
<p>This is a paragraph.</p>
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-html-module-2-paragraph></wc-html-module-2-paragraph>
                `,
                sandbox: [
                  {
                    html: true,
                  },
                ],
              },
            ],
          },
        ],
      };
