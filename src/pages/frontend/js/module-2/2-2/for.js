export const forLoop = {
  subSectionId: "for-loop",
  subSectionLabel: "for",
  description: /* html */ `
    <p>The <code>for</code> loop repeats a block of code a known number of times. It combines initialization, a condition check, and an update expression into a single line, making it the most common loop for iterating over sequences.</p>

    <p>The loop runs while the condition is <code>true</code>. When the condition becomes <code>false</code>, the loop stops, and JavaScript continues with the next line after the loop.</p>
  `,
  topics: [
    {
      topicId: "for-loop",
      topicLabel: "for loop",
      description: /* html */ `
        <p>The <code>for</code> loop has three parts separated by semicolons: an <strong>initializer</strong> (runs once before the loop starts), a <strong>condition</strong> (checked before each iteration), and an <strong>update</strong> (runs after each iteration).</p>

          <wc-code language="js">
for (initializer; condition; update) {
  // runs while condition is true
}
          </wc-code>
          `,
      notes: /* html */ `
          <span>i = index</span>
      `,
      cardCodes: [
        {
          cardLabel: "Javascript",
          language: "js",
          code: /* js */ `      
for (let i = 0; i < 3, i++) {
  console.log(i)
}
// It runs the block 3 times:
// let i = 0 starts i at 0
// i < 3 keeps looping while i is less than 3
// i++ adds 1 to i after each loop

// console.log(i) prints the current value of i
// So the loop executes with i = 0, then 1, then 2, and stops before 3.
        `,
        },
      ],
      sandbox: [
        {
          js: true,
          console: true,
        },
      ],
    },
    {
      topicId: "nested-for",
      topicLabel: "Nested for",
      description: /* html */ `
        <p>A <strong>nested <code>for</code></strong> loop places one loop inside another. The inner loop completes all its iterations for every single iteration of the outer loop — useful for working with grids, matrices, or combinations.</p>

          <wc-code language="js">
for (let i = 0; i < outer; i++) {
  for (let j = 0; j < inner; j++) {
    for (let k = 0; k < inner; k++) {
      // runs outer × inner times
    }
  }
}
          </wc-code>
      `,
      notes: /* html */ `
          <wc-list></wc-list>
      `,
    },
  ],
};
