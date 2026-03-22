export const eventListeners = {
  subSectionId: "event-listeners",
  subSectionLabel: "Event Listeners",
  subSectionAriaLabel: "Event Listeners",
  description: /* html */ `
    <p>Event listeners allow you to respond to user actions and browser events by attaching callback functions to DOM elements.</p>
  `,
  topics: [
    //! addEventListener()
    {
      topicId: "add-event-listener",
      topicLabel: "addEventListener()",
      topicAriaLabel: "addEventListener()",
      description: /* html */ `
        <p>The <code>addEventListener()</code> method attaches an event handler to an element. It is the recommended way to listen for events, as it allows multiple handlers on the same element without overwriting each other.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! removeEventListener()
    {
      topicId: "remove-event-listener",
      topicLabel: "removeEventListener()",
      topicAriaLabel: "removeEventListener()",
      description: /* html */ `
        <p>The <code>removeEventListener()</code> method removes an event handler previously added with <code>addEventListener()</code>. The function reference must match exactly — anonymous functions cannot be removed.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! Event handler vs Event listener
    {
      topicId: "event-handler-vs-event-listener",
      topicLabel: "Event handler vs Event listener",
      topicAriaLabel: "Event handler vs Event listener",
      description: /* html */ `
        <p>An <strong>event handler</strong> is a property like <code>onclick</code> that can hold only one function at a time. An <strong>event listener</strong> uses <code>addEventListener()</code> and supports multiple callbacks for the same event without overwriting previous ones.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! Event object (event)
    {
      topicId: "event-object",
      topicLabel: "Event Object",
      topicAriaLabel: "Event Object",
      description: /* html */ `
        <p>When an event fires, the browser automatically passes an <strong>event object</strong> to the callback function. This object contains useful information such as the target element, mouse coordinates, and the key that was pressed.</p>
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
