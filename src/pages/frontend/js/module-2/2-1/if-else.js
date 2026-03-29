export const ifElse = {
  subSectionId: "if-else",
  subSectionLabel: "if • if  / else • if / else if / else",
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
    //! if / else
    {
      topicId: "if-else",
      topicLabel: "if / else",
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
    //! if + sum
    {
      topicId: "add-apples",
      topicLabel: "add apples",
      cardCodes: [
        {
          cardLabel: "HTML",
          language: "html",
          code: /* html */ `
<div>
  <span>Apples on sale.</span>
  <span>Max 5 per person.</span>
  <div class="inner-container">
    <image
      src="/assets/images/apple.png"
      alt="apple icon"
      class="apple"
    ></image>
    <button>Add</button>
    <div id="counter">0</div>
  </div>
  <span id="msg"></span>
</div>
      `,
        },
        {
          cardLabel: "CSS",
          language: "css",
          code: /* css */ `
.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: max-content;
  margin-block: 1rem;
  padding-inline: 1rem;
}

.apple {
  width: 24px;
}

span {
  display: block;
}

button {
  width: max-content;
}
  
          `,
        },
        {
          cardLabel: "Javascript",
          language: "js",
          code: /* js */ `
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", () => {
    const counter = document.querySelector("#counter");
    const total = Number(counter.textContent) + 1;
    if (total <= 5) {
      counter.textContent = total;
    } else {
      const msg = document.querySelector("#msg");
      msg.innerText = "You've reached max items per person."
    }
  });
}         
          `,
        },
      ],
      preview: /* html */ `
        <wc-if-sum></wc-if-sum>
                `,
      sandbox: [
        {
          html: true,
          css: true,
          js: true,
          console: true,
        },
      ],
    },
    //! if / else if / else
    {
      topicId: "if-else-if-else",
      topicLabel: "if / else if / else",
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
