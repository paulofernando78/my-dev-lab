export const section61 = {
        sectionId: "forms",
        sectionLabel: "Forms",
        sectionAriaLabel: "Forms",
        description: /* html */ `
  <p>The <code>&lt;form&gt;</code> element groups input controls and allows users to submit data to a server.</p>

  <p>A form usually contains labels, input fields, and buttons. When the user submits the form, the browser sends the collected data to the URL specified in the <code>action</code> attribute.</p>

  <p>Forms are essential for many common interactions such as login pages, search bars, registration forms, and contact forms.</p>
`,
        subSections: [
          {
            subSectionId: "form-structure",
            subSectionLabel: "Form Structure",
            subSectionAriaLabel: "Form Structure",
            description: /* html */ `
              <p>A basic form starts with a <code>&lt;form&gt;</code> element and contains controls that the user can fill out.</p>
              <p>The <code>action</code> attribute tells the browser where to send the data, and <code>method</code> defines how it is sent.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<form action="/signup" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text">

  <button type="submit">Submit</button>
</form>
                `,
              },
            ],
          },
          {
            subSectionId: "form-accessibility",
            subSectionLabel: "Labels & Submission",
            subSectionAriaLabel: "Labels and Submission",
            description: /* html */ `
              <p>Every input should have a clear label so users and assistive technologies understand what information is expected.</p>
              <p>Buttons inside forms should use the right type, especially <code>type="submit"</code> for sending the form.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<form action="/contact" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email">

  <button type="submit">Send</button>
</form>
                `,
              },
            ],
          },
        ],
      };
