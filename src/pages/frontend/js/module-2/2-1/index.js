import { ifElse } from "./if-else.js";
import { truthyFalsy } from "./truthy-falsy.js";
import { ternary } from "./ternary.js";
import { switchStatement } from "./switch.js";
import { logicalOperators } from "./logical-operators.js";
import { nullishCoalescing } from "./nullish-coalescing.js";
import { optionalChaining } from "./optional-chaining.js";

export const section21 = {
  sectionId: "conditionals",
  sectionLabel: "2.1 Conditionals",
  sectionAriaLabel: "2.1 Conditionals",
  description: /* html */ `
    <p>Conditionals allow a program to make decisions and execute different code based on whether a condition is <code>true</code> or <code>false</code>.</p>

    <p>Instead of running the same code every time, conditionals let you control the flow of your program depending on the data or state at that moment.</p>

    <p>JavaScript provides several ways to write conditionals:</p>

    <ul>
      <li><code>if / else</code> — runs a block of code if a condition is met</li>
      <li><strong>Ternary operator</strong> — a shorthand for simple if/else expressions</li>
      <li><code>switch</code> — matches a value against multiple cases</li>
      <li><strong>Logical operators</strong> — combine or short-circuit conditions</li>
      <li><strong>Nullish coalescing</strong> — provides a fallback for <code>null</code> or <code>undefined</code> values</li>
      <li><strong>Optional chaining</strong> — safely accesses nested properties that may not exist</li>
    </ul>
  `,
  subSections: [
    ifElse,
    truthyFalsy,
    ternary,
    switchStatement,
    logicalOperators,
    nullishCoalescing,
    optionalChaining,
  ],
};
