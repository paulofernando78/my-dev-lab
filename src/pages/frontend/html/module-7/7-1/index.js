export const section71 = {
    sectionId: "accessibility",
    sectionLabel: "Accessibility",
    description: /* html */ `
      <p>Accessibility (a11y) means building web pages that everyone can use, including people who rely on screen readers, keyboard navigation, or other assistive technologies.</p>
    `,
    subSections: [
      {
        subSectionId: "semantic-html",
        subSectionLabel: "Semantic HTML",
        description: /* html */ `
          <p>Using the right HTML elements for the right purpose is the foundation of accessibility. Screen readers rely on semantic elements to understand page structure.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
          ` }
        ]
      },
      {
        subSectionId: "aria",
        subSectionLabel: "ARIA",
        description: /* html */ `
          <p>ARIA (Accessible Rich Internet Applications) attributes add extra meaning to elements when semantic HTML alone isn't enough.</p>
          <ul>
            <li><code>aria-label</code> — provides an accessible name for an element</li>
            <li><code>aria-hidden</code> — hides decorative elements from screen readers</li>
            <li><code>aria-expanded</code> — indicates if a collapsible element is open or closed</li>
            <li><code>role</code> — defines the purpose of an element</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<button aria-label="Close menu">X</button>
<img src="decoration.png" aria-hidden="true">
<nav role="navigation" aria-label="Main">
          ` }
        ]
      },
      {
        subSectionId: "alt-text",
        subSectionLabel: "Alt Text",
        description: /* html */ `
          <p>The <code>alt</code> attribute on images describes the image for screen readers and displays when the image fails to load.</p>
          <ul>
            <li>Descriptive images should have meaningful alt text</li>
            <li>Decorative images should use <code>alt=""</code> so screen readers skip them</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<!-- descriptive -->
<img src="dog.jpg" alt="Golden retriever playing in the park">

<!-- decorative -->
<img src="divider.png" alt="">
          ` }
        ]
      },
      {
        subSectionId: "keyboard-navigation",
        subSectionLabel: "Keyboard Navigation",
        description: /* html */ `
          <p>All interactive elements should be reachable and usable with a keyboard alone. Native HTML elements like <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, and <code>&lt;input&gt;</code> handle this automatically.</p>
          <ul>
            <li><code>tabindex="0"</code> — makes a non-interactive element focusable</li>
            <li><code>tabindex="-1"</code> — removes an element from tab order</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<div tabindex="0" role="button">Click me</div>
          ` }
        ]
      },
    ],
  };
