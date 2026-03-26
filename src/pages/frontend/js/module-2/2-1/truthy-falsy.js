export const truthyFalsy = {
  subSectionId: "truthy-falsy",
  subSectionLabel: "Truthy & Falsy",
  subSectionAriaLabel: "Truthy and Falsy",
  description: /* html */ `
    <p>In JavaScript, every value is either <strong>truthy</strong> or <strong>falsy</strong>. When a value is used in a condition, JavaScript automatically converts it to a boolean.</p>

    <p>You can check any value using <code>Boolean(value)</code> or the double negation <code>!!value</code>.</p>
  `,
  topics: [
    //! Truthy Values
    {
      topicId: "truthy-values",
      topicLabel: "Truthy Values",
      topicAriaLabel: "Truthy Values",
      description: /* html */ `
        <p>A <strong>truthy</strong> value is any value that evaluates to <code>true</code> in a boolean context. Most values in JavaScript are truthy.</p>

        <p>Common truthy values:</p>

        <ul>
          <li>Non-empty strings — <code>"hello"</code></li>
          <li>Non-zero numbers — <code>1</code>, <code>-1</code>, <code>3.14</code></li>
          <li>Arrays — <code>[]</code> (even empty ones)</li>
          <li>Objects — <code>{}</code> (even empty ones)</li>
          <li><code>true</code></li>
        </ul>

        <wc-card-code
          cardLabel="JavaScript"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="js">
Boolean("hello")  // true
Boolean(1)        // true
Boolean([])       // true
Boolean({})       // true
          </wc-code>
        </wc-card-code>
      `,
      sandbox: [{ js: true, console: true }],
    },
    //! Falsy Values
    {
      topicId: "falsy-values",
      topicLabel: "Falsy Values",
      topicAriaLabel: "Falsy Values",
      description: /* html */ `
        <p>A <strong>falsy</strong> value is any value that evaluates to <code>false</code> in a boolean context. There are only a few falsy values in JavaScript:</p>

        <ul>
          <li><code>false</code></li>
          <li><code>0</code> and <code>-0</code></li>
          <li><code>""</code> — empty string</li>
          <li><code>null</code></li>
          <li><code>undefined</code></li>
          <li><code>NaN</code></li>
        </ul>

        <wc-card-code
          cardLabel="JavaScript"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="js">
Boolean(false)     // false
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
          </wc-code>
        </wc-card-code>
      `,
      sandbox: [{ js: true, console: true }],
    },
  ],
};
