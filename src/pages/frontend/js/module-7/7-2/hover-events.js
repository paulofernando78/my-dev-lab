export const hoverEvents = {
  subSectionId: "hover-events",
  subSectionLabel: "Hover Events",
  subSectionAriaLabel: "Hover Events",
  description: /* html */ `
    <p>Hover events allow you to detect when the mouse enters or leaves an element.</p>
  `,
  topics: [
    //! mouseenter & mouseleave
    {
      topicId: "mouseenter-mouseleave",
      topicLabel: "mouseenter & mouseleave",
      topicAriaLabel: "mouseenter and mouseleave",
      description: /* html */ `
        <p>The <code>mouseenter</code> event is triggered when the mouse enters an element, and <code>mouseleave</code> when it leaves.
        These are commonly used for hover effects and UI interactions.</p>
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
