---
name: Use wc-card-code inside descriptions
description: How to embed code examples inside description strings in this project
type: feedback
---

Use `<wc-card-code>` with `<wc-code>` inline inside `description` template strings — not `cardCodes` arrays or `<pre><code>` blocks.

```html
<wc-card-code
  cardLabel="JavaScript"
  cardLabelIcon="/assets/images/icons/code.svg"
>
  <wc-code language="js">
// code here
  </wc-code>
</wc-card-code>
```

**Why:** This is the project's component-based approach for code examples embedded in descriptions.

**How to apply:** Any time a code snippet belongs inside a `description: /* html */ \`...\`` field, use this pattern instead of `<pre><code>` or a `cardCodes` array.
