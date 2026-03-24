export const formEvents = {
  subSectionId: "form-input-events",
  subSectionLabel: "Form Input Events",
  subSectionAriaLabel: "Form Input Events",
  description: /* html */ `
    <p>These core form events cover the most common ways users interact with inputs, selects, and form submissions.</p>
  `,
  topics: [
    //! submit, input & change
    {
      topicId: "form-events-core",
      topicLabel: "submit, input & change",
      topicAriaLabel: "submit input change",
      description: /* html */ `
        <p>The <code>submit</code> event fires when a form is submitted. The <code>input</code> event fires on every keystroke or value change in real time, while <code>change</code> fires only when the element loses focus after its value has changed.</p>
      `,
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! focus & blur
    {
      topicId: "focus-blur",
      topicLabel: "focus & blur",
      topicAriaLabel: "focus and blur",
      cardCodes: [
        { cardLabel: "HTML", language: "html", code: /* html */ `` },
        { cardLabel: "CSS", language: "css", code: /* css */ `` },
        { cardLabel: "Javascript", language: "js", code: /* js */ `` },
      ],
      preview: /* html */ `<wc-></wc->`,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! preventDefault()
    {
      topicId: "prevent-default",
      topicLabel: "preventDefault()",
      topicAriaLabel: "preventDefault",
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
