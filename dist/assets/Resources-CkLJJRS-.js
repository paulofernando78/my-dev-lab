import{s as o}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as s,s as t}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const r=`
  
`;class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"sites",sectionLabel:"Sites",sectionAriaLabel:"Sites",links:[{href:"https://developer.mozilla.org/en-US/",label:"MDN Web Docs | HTML: HyperText Markup Language | MDN"},{href:"https://www.landingfolio.com/",label:"Landing Folio | The Best Landing Page Design Inspiration, Templates and More"},{href:"https://drive.google.com/drive/u/0/folders/1A7hWfkd7FAP1ukkw2l404C2wk0NsbmeR",label:"Daily Dev | Where developers suffer together"},{href:"https://drive.google.com/drive/u/0/folders/1A7hWfkd7FAP1ukkw2l404C2wk0NsbmeR",label:"Google Drive | PDF Books"}]},{sectionId:"free-courses",sectionLabel:"Free Courses",sectionAriaLabel:"Free Courses",links:[{href:"https://www.freecodecamp.org/",label:"Free Code Camp"},{href:"https://www.theodinproject.com/",label:"The Odin Project"},{href:"https://exercism.org/",label:"Exercism"}]},{sectionId:"paid-courses",sectionLabel:"Paid Courses",sectionAriaLabel:"Best Paid Courses",links:[{href:"https://www.coursera.org/professional-certificates/meta-front-end-developer/",label:"Coursera | Meta Front-End Developer"},{href:"https://web.dev/",label:"Web Dev | Google Chrome Developers"},{href:"https://frontendmasters.com/",label:"Frontend Masters"},{href:"https://www.boot.dev/",label:"Boot.Dev"},{href:"https://scrimba.com/home",label:"Scrimba"},{href:"https://www.origamid.com/",label:"Origamid | BR"}]},{sectionId:"youtube-channels",sectionLabel:"Youtube Channels",sectionAriaLabel:"Youtube Channels",links:[{href:"https://www.youtube.com/watch?v=zutb5Clb_0Y",label:"Future Fullstack | HTML Full Course Tutorial for Beginners - Learn EVERYTHING You Need to Know in Detail (5:25: 52)"},{href:"https://www.youtube.com/watch?v=G3e-cpL7ofc",label:"SuperSimpleDev | HTML & CSS Full Course - Beginner to Pro (6:31:23)"}]},{sectionId:"practice",sectionLabel:"Practice",sectionAriaLabel:"Practice",links:[{href:"https://codepen.io/",label:"CodePen"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${r}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${s(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,t(this.shadowRoot,e)}}customElements.define("wc-resources",l);export{l as default};
