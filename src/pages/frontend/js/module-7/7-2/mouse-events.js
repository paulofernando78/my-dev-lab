export const mouseEvents = {
  subSectionId: "click-events",
  subSectionLabel: "Click Events",
  subSectionAriaLabel: "Click Events",
  description: /* html */ `
    <p>Mouse events allow you to respond to user interactions such as clicks and button presses.</p>
  `,
  topics: [
    //! click
    {
      topicId: "click-event",
      topicLabel: "click",
      topicAriaLabel: "click",
      description: /* html */ `
        <p>The <code>click</code> event is triggered when a user clicks on an element. It is one of the most commonly used events for creating interactivity.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ ``,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! mousedown & mouseup
    {
      topicId: "mousedown-mouseup",
      topicLabel: "mousedown & mouseup",
      topicAriaLabel: "mousedown and mouseup",
      description: /* html */ `
        <p>The <code>mousedown</code> event is triggered when the mouse button is pressed,
        and <code>mouseup</code> when it is released. These events are useful for detecting press and hold interactions.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ ``,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
  ],
};
