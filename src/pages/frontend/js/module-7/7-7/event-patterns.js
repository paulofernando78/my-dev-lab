export const eventPatterns = {
  subSectionId: "common-patterns",
  subSectionLabel: "Common Patterns",
  subSectionAriaLabel: "Common Patterns",
  description: /* html */ `
    <p>These patterns represent best practices for working with events in scalable and performant JavaScript applications.</p>
  `,
  topics: [
    //! Event Delegation
    {
      topicId: "event-delegation",
      topicLabel: "Event Delegation",
      topicAriaLabel: "Event Delegation",
      description: /* html */ `
        <p>Event delegation is a technique where a single event listener is placed on a parent element to handle events for all its children. It works because of event bubbling, and is especially useful for dynamic content where child elements are added or removed at runtime.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! { once: true }
    {
      topicId: "once-option",
      topicLabel: "{ once: true }",
      topicAriaLabel: "once option",
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! Debounce & Throttle
    {
      topicId: "debounce-throttle",
      topicLabel: "Debounce & Throttle",
      topicAriaLabel: "Debounce and Throttle",
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
