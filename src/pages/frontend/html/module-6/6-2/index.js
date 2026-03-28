export const section62 = {
        sectionId: "input-types",
        sectionLabel: "Input Types",
        description: /* html */ `
  <p>The <code>&lt;input&gt;</code> element is one of the most important parts of HTML forms. By changing the <code>type</code> attribute, the same element can behave in many different ways.</p>

  <p>Each input type is designed for a specific kind of data — for example text, numbers, email addresses, or file uploads. Modern browsers also provide built‑in UI controls and validation depending on the type.</p>

  <p>Understanding the available input types helps you create forms that are easier to use, more accessible, and better suited for mobile devices.</p>
`,

        subSections: [
          {
            subSectionId: "text",
            subSectionLabel: "text",
            description: /* html */ `
              <p>The most basic input type. Accepts any single-line text value such as names, usernames, or search queries.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="text">
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-text></wc-html-module-6-text>
            `,
          },
          {
            subSectionId: "email",
            subSectionLabel: "email",
            description: /* html */ `
              <p>Validates that the value follows an email format (e.g. <code>user@example.com</code>). On mobile devices, it triggers a keyboard optimized for email input.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="email" placeholder="joedoe@email.com">
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-email></wc-html-module-6-email>
            `,
          },
          {
            subSectionId: "password",
            subSectionLabel: "password",
            description: /* html */ `
              <p>Masks the characters as the user types, hiding sensitive input like passwords. The value is still sent as plain text unless the form uses HTTPS.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="password" placeholder="1234...">
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-password></wc-html-module-6-password>
            `,
          },
          {
            subSectionId: "number",
            subSectionLabel: "number",
            description: /* html */ `
              <p>Only accepts numeric values. Renders with increment/decrement arrows and supports <code>min</code>, <code>max</code>, and <code>step</code> attributes to control the allowed range.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="number" placeholder="Numbers only">
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-number></wc-html-module-6-number>
            `,
          },
          {
            subSectionId: "radio",
            subSectionLabel: "radio",
            description: /* html */ `
              <p>Allows the user to select <strong>one option</strong> from a group. All radio buttons in the same group must share the same <code>name</code> attribute — this is what links them together so selecting one deselects the others.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<div class="flex-align-center">
  <input type="radio" name="same-name" value="option1" id="opt1">
  <label for="opt1">Option 1</label>
</div>
<div class="flex-align-center">
  <input type="radio" name="same-name" value="option2" id="opt2">
  <label for="opt2">Option 2</label>
</div>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-radio></wc-html-module-6-radio>
            `,
          },
          {
            subSectionId: "checkbox",
            subSectionLabel: "checkbox",
            description: /* html */ `
              <p>Allows the user to toggle an option on or off. Unlike radio buttons, checkboxes are independent — <strong>multiple can be selected</strong> at the same time.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<div class="flex-align-center">
  <input type="checkbox" name="subscribe" value="yes" id="subscribe"/>
  <label for="subscribe">Subscribe to newsletter</label>
</div>

<div class="flex-align-center">
  <input type="checkbox" name="terms" value="agreed" id="terms"/>
  <label for="terms">I agree to the terms</label>
</div>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-checkbox></wc-html-module-6-checkbox>
            `,
          },
          {
            subSectionId: "option",
            subSectionLabel: "option",
            description: /* html */ `
              <p>The <code>&lt;select&gt;</code> element creates a dropdown menu. Each <code>&lt;option&gt;</code> inside it represents a choice. The <code>name</code> attribute goes on <code>&lt;select&gt;</code> and the <code>value</code> on each <code>&lt;option&gt;</code>.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<select name="color" id="color">
  <option value="">-- Pick a color --</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
<label for="color">Color</label>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-option></wc-html-module-6-option>
            `,
          },
          {
            subSectionId: "file",
            subSectionLabel: "file",
            description: /* html */ `
              <p>Opens a file picker dialog, allowing the user to upload files. Use the <code>accept</code> attribute to restrict file types and <code>multiple</code> to allow more than one file. When used inside a form, the form must include <code>enctype="multipart/form-data"</code>.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="file">
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-file></wc-html-module-6-file>
            `,
          },
          {
            subSectionId: "textarea",
            subSectionLabel: "textarea",
            description: /* html */ `
              <p>A multiline text input, ideal for longer content like messages or comments.</p>
              <p>Supports the following attributes:</p>
              
              <ul>
                <li><code>rows</code> — visible height in lines</li>
                <li><code>cols</code> — visible width in characters</li>
                <li><code>maxlength</code> — max characters allowed</li>
                <li><code>resize</code> — controlled via CSS</li>
              </ul>
            `,
            notes: /* html */ `
              <p>unlike <code>&lt;input&gt;</code>, the default value goes between the tags, not in <code>value</code>:</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<textarea></textarea>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-6-textarea></wc-html-module-6-textarea>
            `,
            sandbox: [
              {
                html: true,
              },
            ],
          },
        ],
      };
