import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

class CommonQuestionsAndAnswers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "q1",
        sectionLabel: "1. Tell me about yourself",
        description: /* html */ `
          <p>
            This question is used as an icebreaker and to evaluate how clearly you summarize your professional story.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            I’m a frontend developer focused on building structured and accessible web applications using modern JavaScript and Web Components. Recently, I’ve been developing a personal learning platform where I apply SPA architecture, component design, and performance best practices. I enjoy solving problems by designing clean, maintainable systems and continuously improving my skills through real-world projects.
          </p>
        `,
        notes: /* html */ `
          <ul>
            <li>Keep it under 60 seconds</li>
            <li>Focus on professional experience</li>
            <li>Avoid personal life details</li>
          </ul>
      `,
      },
      {
        sectionId: "q2",
        sectionLabel: "2. Why do you want to work here?",
        description: /* html */ `
          <p>
            This question evaluates your motivation and whether you researched the company and understand its values and goals.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            I’m interested in this company because of its focus on building quality
            products and using modern technologies. I value environments that
            encourage learning, collaboration, and clean architecture. From what
            I’ve learned about your team, I believe my approach to structured
            development and continuous improvement aligns well with your goals.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Show that you researched the company</li>
            <li>Connect your goals with the company’s mission</li>
            <li>Avoid generic answers</li>
          </ul>
        `,
      },
      {
        sectionId: "q3",
        sectionLabel: "3. What are your strengths?",
        description: /* html */ `
          <p>
            The interviewer wants to understand what you do best and how your strengths contribute to the role.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            One of my main strengths is organization and architectural thinking.
            I like structuring applications in a way that makes them scalable and
            maintainable. I’m also persistent when solving problems and enjoy
            understanding concepts deeply instead of relying on quick fixes.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Choose strengths relevant to the job</li>
            <li>Provide concrete examples</li>
            <li>Avoid vague adjectives</li>
          </ul>
        `,
      },
      {
        sectionId: "q4",
        sectionLabel: "4. What is your biggest weakness?",
        description: /* html */ `
          <p>
            This question assesses self-awareness and your ability to improve over time.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            Earlier in my learning process, I sometimes spent too much time refining
            details before moving forward. I’ve improved this by adopting an
            iterative approach — focusing first on delivering a working solution
            and then improving it step by step.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Be honest but strategic</li>
            <li>Show improvement actions</li>
            <li>Avoid critical weaknesses for the role</li>
          </ul>
        `,
      },
      {
        sectionId: "q5",
        sectionLabel: "5. Why should we hire you?",
        description: /* html */ `
          <p>
            This question evaluates your value proposition and how well you match the company’s needs.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            I bring strong fundamentals combined with practical project experience.
            I focus on writing maintainable code, understanding browser behavior,
            and building structured interfaces. I’m motivated, adaptable, and eager
            to grow while contributing positively to the team.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Highlight relevant skills</li>
            <li>Connect experience to job requirements</li>
            <li>Show enthusiasm and confidence</li>
          </ul>
        `,
      },
      {
        sectionId: "q6",
        sectionLabel: "6. Describe a challenge you faced",
        description: /* html */ `
          <p>
            Interviewers use this question to understand your problem-solving process and resilience.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            While building a SPA project, I faced challenges coordinating navigation,
            routing, and component state. I solved this by centralizing the data
            structure into a single source of truth and restructuring the
            architecture. This improved maintainability and made future features
            easier to implement.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Use the STAR method (Situation, Task, Action, Result)</li>
            <li>Focus on your actions</li>
            <li>Explain the outcome clearly</li>
          </ul>
        `,
      },
      {
        sectionId: "q7",
        sectionLabel: "7. Where do you see yourself in five years?",
        description: /* html */ `
          <p>
            This question evaluates ambition, planning, and alignment with the company’s long-term opportunities.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            I see myself growing into a senior developer role with strong
            architectural skills, contributing to complex projects and mentoring
            others while continuing to deepen my technical knowledge.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Show growth mindset</li>
            <li>Align goals with the field</li>
            <li>Avoid unrealistic expectations</li>
          </ul>
        `,
      },
      {
        sectionId: "q8",
        sectionLabel: "8. Do you have any questions for us?",
        description: /* html */ `
          <p>
            This question measures curiosity and engagement. Asking thoughtful questions shows genuine interest.
          </p>
        `,
        sampleAnswer: /* html */ `
          <p>
            Yes. I’d like to know how the team approaches code reviews and knowledge
            sharing, and what success looks like for someone in this role during the first six months.
          </p>
  `,
        notes: /* html */ `
          <ul>
            <li>Ask about team processes</li>
            <li>Clarify expectations for the role</li>
            <li>Avoid questions easily answered on the website</li>
          </ul>
        `,
      },
      {
        sectionId: "youtube",
        sectionLabel: "Youtube",
        links: [
          {
            href: "https://www.youtube.com/@TheCompaniesExpert",
            label: "The Companies Expert",
          },
          {
            href: "https://www.youtube.com/watch?v=QqyRKAkbmoA",
            label:
              "Hackeando a Carreira | 5 COISAS QUE VOCÊ NUNCA DEVE FALAR NA ENTREVISTA DE EMPREGO",
          },
          {
            href: "https://www.youtube.com/watch?v=biGUPJy92Z0",
            label:
              "Fernanda Kipper | NÃO VÁ para sua ENTREVISTA DEV JUNIOR sem saber essas perguntas",
          },
        ],
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define(
  "wc-misc-jobs-common-questions-and-answers",
  CommonQuestionsAndAnswers,
);
export default CommonQuestionsAndAnswers;
