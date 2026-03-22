export const windowGlobalEvents = {
  subSectionId: "window-events",
  subSectionLabel: "Window Events",
  subSectionAriaLabel: "Window Events",
  description: /* html */ `
    <p>Window events fire at the global level, responding to browser lifecycle changes such as the page finishing loading, the viewport being resized, or the user scrolling.</p>
  `,
  topics: [
    //! DOMContentLoaded & load
    {
      topicId: "domcontentloaded-load",
      topicLabel: "DOMContentLoaded & load",
      topicAriaLabel: "DOMContentLoaded and load",
      description: /* html */ `
        <p><code>DOMContentLoaded</code> fires as soon as the HTML is fully parsed and the DOM is ready, without waiting for images or stylesheets. <code>load</code> fires only after all resources on the page have finished loading. Use <code>DOMContentLoaded</code> when you just need the DOM, and <code>load</code> when you need everything.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! resize & scroll
    {
      topicId: "resize-scroll",
      topicLabel: "resize & scroll",
      topicAriaLabel: "resize and scroll",
      description: /* html */ `
        <p>The <code>resize</code> event fires on the <code>window</code> object whenever the viewport dimensions change. The <code>scroll</code> event fires as the user scrolls the page, giving access to the current scroll position via <code>window.scrollY</code>. Both events can fire very frequently, so it is common to use debouncing or throttling for performance.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! beforeunload
    {
      topicId: "beforeunload",
      topicLabel: "beforeunload",
      topicAriaLabel: "beforeunload",
      description: /* html */ `
        <p>The <code>beforeunload</code> event fires just before the user leaves the page — closing the tab, navigating away, or refreshing. It can be used to show a confirmation dialog warning the user about unsaved changes. The browser controls the exact message shown to the user.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
  ],
};
