export const eventFlow = {
  subSectionId: "event-propagation",
  subSectionLabel: "Event Propagation",
  description: /* html */ `
    <p>Event propagation describes the journey an event takes through the DOM tree, from the root to the target element and back.</p>
  `,
  topics: [
    //! Bubbling & Capturing
    {
      topicId: "bubbling-capturing",
      topicLabel: "Bubbling & Capturing",
      description: /* html */ `
        <p>When an event fires, it travels through the DOM in three phases: <strong>capturing</strong> (from the root down to the target), the <strong>target</strong> phase, and <strong>bubbling</strong> (from the target back up to the root). By default, most event listeners use the bubbling phase. Use <code>stopPropagation()</code> to prevent further propagation.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! stopPropagation()
    {
      topicId: "stop-propagation",
      topicLabel: "stopPropagation()",
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
