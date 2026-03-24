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
        { cardLabel: "HTML", language: "html", code: /* html */ `
<div></div>
        `
        },
        { cardLabel: "CSS", language: "css", code: /* css */ `
div {
  width: 100px;
  height: 100px;
  background-color: black
}
        `
        },
        { cardLabel: "Javascript", language: "js", code: /* js */ `
const div = document.querySelector("div")

div.addEventListener("mouseleave", () => {
  console.log("mouseleave:", div)
})

div.addEventListener("mouseenter", () => {
  console.log("mouseenter:", div)
})          
        `
      },
      ],
      preview: /* html */ `
        <wc-js-m-7-2-mouseenter-mouseleave></wc-js-m-7-2-mouseenter-mouseleave>
        <wc-check-console></wc-check-console>
      `,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
  ],
};
