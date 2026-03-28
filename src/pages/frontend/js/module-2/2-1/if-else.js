export const ifElse = {
  subSectionId: "if-else",
  subSectionLabel: "if • if  / else • if / else if / else",
  subSectionAriaLabel: "if • if  / else • if / else if / else",
  description: /* html */ `
    <p>The <code>if</code> statement is the most basic conditional. It runs a block of code only when a condition evaluates to <code>true</code>.</p>

    <p>You can chain additional conditions using <code>else if</code>, and provide a final fallback with <code>else</code> that runs when none of the conditions match.</p>

    

    <p>Only the first matching branch executes — the rest are skipped.</p>
  `,
  topics: [
    //! if
    {
      topicId: "if",
      topicLabel: "if",
      topicAriaLabel: "if",
      description: /* html */ `
        <p>The <code>if</code> statement runs a block of code only when its condition evaluates to <code>true</code>. If the condition is <code>false</code>, the block is skipped entirely.</p>
        
          <wc-code language="js">
if (condition) {
  // runs if condition is true
}
          </wc-code>
      `,
      sandbox: [
        {
          js: true,
          console: true,
        },
      ],
    },
    //! if + sum
    {
      topicId: "if-sum",
      topicLabel: "if + sum",
      topicAriaLabel: "if",
      description: /* html */ `
        <p>...</p>
        <wc-code language="js">
if (condition) {
  // runs if condition is true
}
        </wc-code>
      `,
      preview: /* html */ `
        <wc-if-sum></wc-if-sum>
                `,
      sandbox: [
        {
          js: true,
          console: true,
        },
      ],
    },
    //! if / else
    {
      topicId: "if-else",
      topicLabel: "if / else",
      topicAriaLabel: "if / else",
      description: /* html */ `
        <p>Adding <code>else</code> provides a fallback block that runs when the <code>if</code> condition is <code>false</code>. One of the two branches will always execute.</p>

          <wc-code language="js">
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
          </wc-code>
      `,
    },
    //! if / else if / else
    {
      topicId: "else-if-else",
      topicLabel: "else if / else",
      topicAriaLabel: "else if else",
      description: /* html */ `
        <p>Use <code>else if</code> to check additional conditions in sequence. Only the first matching branch executes — the rest are skipped. The final <code>else</code> is optional and acts as a catch-all.</p>

          <wc-code language="js">
if (condition) {
  // runs if condition is true
} else if (otherCondition) {
  // runs if otherCondition is true
} else {
  // runs if none of the above matched
}
          </wc-code>
      `,
    },
  ],
};
