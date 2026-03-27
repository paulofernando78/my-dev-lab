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
      topicId: "values",
      topicLabel: "Values",
      topicAriaLabel: "Values",
      description: /* html */ `
        <p>A <strong>truthy</strong> value is any value that evaluates to <code>true</code> in a boolean context. Most values in JavaScript are truthy.</p>

        <p>A <strong>falsy</strong> value is any value that evaluates to <code>false</code> in a boolean context. There are only a few falsy values in JavaScript: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, and <code>NaN</code>.</p>

        <p>Common truthy/falsy values:</p>

        <wc-column header-1="Truthy" header-2="Falsy">
        <div slot="col-1">
          <wc-code language="js">
Boolean(true)

// Non-empty strings
Boolean("hello") // true

// Non-zero numbers 
Boolean(1) // true
Boolean(-1) // true
Boolean(3.14) // true

// Arrays (even empty ones)
Boolean([])

// Objects (even empty ones)
Boolean({})
</wc-code>
      </div>

      <div slot="col-2">
      <wc-code language="js">
Boolean(false)

// Empty strings
Boolean("") // false

// Zero number
Boolean(0) // false

// null / undefined / NaN
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
          </wc-code>
        </div>
      </wc-column>
      `,
      sandbox: [{ js: true, console: true }],
    },
  ],
};
