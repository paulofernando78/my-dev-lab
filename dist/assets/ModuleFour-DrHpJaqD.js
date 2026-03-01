import{s as a}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as i,s as t}from"./renderSection-CSqRZScD.js";import"./LessonNav-BMvgDSVs.js";import"./index-Dc8t_vK0.js";const o=`

`;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"media",sectionLabel:"Media & Embedded Content",sectionAriaLabel:"Media and Embedded Content",examples:[{cardLabel:"Image",language:"html",code:`
<img src="image.jpg" alt="Description">
        `,preview:()=>`
<img src="/assets/images/semantic.jpg" alt="Example image">
        `},{cardLabel:"Figure & Figcaption",language:"html",code:`
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image description</figcaption>
</figure>
        `,preview:()=>`
<figure>
  <img src="/assets/images/semantic.jpg" alt="Example image">
  <figcaption>Image description</figcaption>
</figure>
        `},{cardLabel:"Audio",language:"html",code:`
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
        `,preview:()=>`
<audio controls></audio>
        `},{cardLabel:"Video",language:"html",code:`
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
        `,preview:()=>`
<video controls width="320"></video>
        `},{cardLabel:"Iframe",language:"html",code:`
<iframe src="https://example.com"></iframe>
        `,preview:()=>`
<iframe src="https://example.com" width="300" height="150"></iframe>
        `}]}];this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${o}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${i(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,t(this.shadowRoot,e)}}customElements.define("wc-html-module-four",s);export{s as default};
