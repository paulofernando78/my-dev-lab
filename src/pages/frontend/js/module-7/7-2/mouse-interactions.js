export const mouseInteractions = {
  subSectionId: "mouse-interactions",
  subSectionLabel: "Mouse Interactions",
  subSectionAriaLabel: "Mouse Interactions",
  description: /* html */ `
    <p>Mouse interaction events track the movement and position of the cursor on the page, enabling dynamic and position-aware UI behaviors.</p>
  `,
  topics: [
    //! mousemove (Tracking Mouse Position)
    {
      topicId: "mousemove",
      topicLabel: "mousemove (Tracking Mouse Position)",
      topicAriaLabel: "mousemove (Tracking Mouse Position)",
      description: /* html */ `
        <p>The <code>mousemove</code> event fires continuously as the mouse moves across the page. It provides the current cursor coordinates via <code>event.clientX</code> and <code>event.clientY</code>, making it useful for tracking mouse position in real time.</p>
      `,
      cardCodes: [
        {
          cardLabel: "HTML",
          language: "html",
          code: /* html */ `
<span id="x"></span>
<span id="y"></span>
          `,
        },
        {
          cardLabel: "CSS",
          language: "css",
          code: /* css */ `
body {
  display: grid;
  place-items: center;
}

#x {
  align-self: end;
}

#y {
  align-self: start;
}
          `,
        },
        {
          cardLabel: "Javascript",
          language: "js",
          code: /* js */ `
const spanX = document.querySelector("#x")
const spanY = document.querySelector("#y")

window.addEventListener("mousemove", (event) => {
  spanX.textContent = "x: " + event.clientX
  spanY.textContent = "y: " + event.clientY

  console.log(event.clientX)
  console.log(event.clientY)
})
          `,
        },
      ],
      preview: /* html */ `
        <wc-js-m-7-2-mousemove></wc-js-m-7-2-mousemove>
      `,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    },
    //! mousemove (Tracking circle)
    {
      topicId: "mousemove-circle",
      topicLabel: "mousemove (Tracking Mouse circle)",
      topicAriaLabel: "mousemove (Tracking Mouse circle)",
      cardCodes: [
        {
          cardLabel: "HTML",
          language: "html",
          code: /* html */ `
<span id="x"></span>
<span id="y"></span>
          `,
        },
        {
          cardLabel: "CSS",
          language: "css",
          code: /* css */ `
body {
  display: grid;
  place-items: center;
}

#x {
  align-self: end;
}

#y {
  align-self: start;
}
          `,
        },
        {
          cardLabel: "Javascript",
          language: "js",
          code: /* js */ `
const spanX = document.querySelector("#x")
const spanY = document.querySelector("#y")

window.addEventListener("mousemove", (event) => {
  spanX.textContent = "x: " + event.clientX
  spanY.textContent = "y: " + event.clientY

  console.log(event.clientX)
  console.log(event.clientY)
})
          `,
        },
      ],
      preview: /* html */ `
        <wc-mousemove></wc-mousemove>
      `,
      sandbox: [{ html: true, css: true, js: true, console: true }],
    }
  ],
};
