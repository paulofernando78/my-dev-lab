export const keyboardEvents = {
  subSectionId: "key-events",
  subSectionLabel: "Key Events",
  subSectionAriaLabel: "Key Events",
  description: /* html */ `
    <p>Key events fire when the user interacts with the keyboard, giving you access to which key was pressed and when.</p>
  `,
  topics: [
    //! keydown & keyup
    {
      topicId: "keydown-keyup",
      topicLabel: "keydown & keyup",
      topicAriaLabel: "keydown and keyup",
      description: /* html */ `
        <p>The <code>keydown</code> event fires when a key is pressed down, and <code>keyup</code> fires when it is released. You can identify the pressed key using <code>event.key</code> (human-readable) or <code>event.code</code> (physical key position).</p>
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
