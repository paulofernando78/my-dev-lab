export const section85 = {
  sectionId: "svg-animation",
  sectionLabel: "8.5 SVG Animation",
  subSections: [
    {
      subSectionId: "motion-basics",
      subSectionLabel: "Motion Basics",
      topics: [
        {
          topicId: "animate",
          topicLabel: "<animate>",
        },
        {
          topicId: "animatetransform",
          topicLabel: "<animateTransform>",
        },
        {
          topicId: "animatemotion",
          topicLabel: "<animateMotion>",
        },
      ],
    },
    {
      subSectionId: "motion-paths",
      subSectionLabel: "Motion Paths",
      topics: [
        {
          topicId: "mpath",
          topicLabel: "<mpath>",
        },
        {
          topicId: "animation-along-a-path",
          topicLabel: "Animation Along a Path",
          description: /* html */ `
            <p>SVG allows elements to move along complex paths using <code>&lt;animateMotion&gt;</code>. Instead of animating with simple x and y values, we define a <code>&lt;path&gt;</code> and attach it to the animation using <code>&lt;mpath&gt;</code>.</p>
            <p>The moving element follows the exact shape of the path, which is useful for motion graphics and interactive UI patterns.</p>
          `,
          cardCodes: [
            {
              cardLabel: "HTML",
              language: "html",
              code: /* html */ `
<div class="wrapper">
  <svg viewBox="0 0 800 200">
    <path
      id="path"
      d="M0,100 C100,20 200,180 300,100 S500,20 600,100 S700,180 800,100"
      fill="none"
      stroke="black"
      stroke-width="2"
    />

    <circle r="15" fill="red">
      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
        <mpath href="#path"></mpath>
      </animateMotion>
    </circle>
  </svg>
</div>
              `,
            },
          ],
          preview: /* html */ `
            <wc-css-svg-custom-path></wc-css-svg-custom-path>
          `,
          sandbox: [
            {
              html: true,
            },
          ],
        },
      ],
    },
  ],
};
