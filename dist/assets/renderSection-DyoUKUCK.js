import{c as l}from"./index-CJbI1lfT.js";const d=`
  .contents-navbar {
    margin-block: 10px
  }

  .contents-navbar-title {
    font-weight: bold;
    text-transform: uppercase;
    display: block;
  }

  .contents-navbar ul {
    padding-inline-start: 1.6rem;
  }

  .contents-navbar a {
    font-size: 1rem;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .section::before,
  .content::before {
    transform: translateY(-2px)
  }

  .section::before,
  .content::before,
  .topic::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }


  .section::before {
    background: url("/assets/images/icons/section.svg");
    margin-right: 2px
  }

  .content::before {
    background: url("/assets/images/icons/sub-section.svg");
  }

  .topic::before {
    background: url("/assets/images/icons/topic.svg");
  }

`;function i(n=""){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.contents=[]}render(){const s=this.contents||[];this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${d}
      </style>
      <span class="contents-navbar-title">Table of Contents</span>
      <nav class="contents-navbar">
        <ul>
          ${s.map(a=>`
              <li class="section">
                  <a data-target="${a.id}">${i(a.sectionLabel)}</a>
                <ul>
                  ${a.content?a.content.filter(e=>e.subSectionLabel).map(e=>`
                        <li class="content">
                          <a data-target="${e.id}">${i(e.subSectionLabel)}</a>
                          <ul>
                            ${(e.topics||[]).map(t=>`
                              <li class="topic">
                                <a data-target="${t.id}">${i(t.topicLabel)}</a>
                              </li>
                            `).join("")}
                          </ul>
                        </li>
                      `).join(""):""}
                </ul>
              </li>
            `).join("")}
        </ul>
      </nav>
    `,this.shadowRoot.querySelectorAll("a[data-target]").forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.target;this.getRootNode().querySelector(`#${e}`)?.scrollIntoView({behavior:"smooth"})})})}}customElements.define("wc-contents",p);const m=`
  :host {
    scroll-margin-top: 5px
  }

  .label {
    background-color: var(--slate-6);
    color: white;
    border: 1px solid var(--slate-5);
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 1.1rem;
    font-weight: bold
  }
`;function g(n=""){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const s=this.getAttribute("label")??"",a=this.getAttribute("aria-label");this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${m}
      </style>
      <section ${a?`aria-label="${a}"`:""} class="line-break">
        <span class="label">${g(s)}</span>
        <slot></slot>
      </section>
    `}}customElements.define("wc-section",b);function u(n,s){const a=n.querySelector("wc-contents");a.contents=s.map(e=>{const t=(e.subSections||[]).map(r=>({id:r.subSectionId,subSectionLabel:r.subSectionLabel||"Sub Section",topics:(r.topics||[]).map(o=>({id:o.topicId,topicLabel:o.topicLabel||"Topic"}))}));return{id:e.sectionId,sectionLabel:e.sectionLabel,content:t}}),a.render()}const $=".imgs-wrapper{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:5px}.imgs-wrapper>:only-child{padding-inline:clamp(0px,calc(34vw - 160px),150px)}.cards-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}@media(max-width:1000px){.cards-wrapper{grid-template-columns:1fr}}.preview-container{color:#000;background-color:#fff;border-radius:var(--border-radius);padding:5px}";function c(n=""){return String(n).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function v(n){return`
    <style>
      ${$}
    </style>

    <!--section -->
    ${n.map(s=>`
    <wc-section
      id="${c(s.sectionId)}"
      label="${c(s.sectionLabel)}"
      aria-label="${c(s.sectionAriaLabel)}"
      class="line-break"
      >
      <!-- description -->
      ${s.description?`<wc-card-icon variant="description">${s.description}</wc-card-icon>`:""}
      <!-- sampleAnswer -->
      ${s.sampleAnswer?`<wc-card-icon variant="sample-answer">${s.sampleAnswer}</wc-card-icon>`:""}
      <!-- notes -->
      ${s.notes?`<wc-card-icon variant="notes">${s.notes}</wc-card-icon>`:""}
      <!-- imgs -->
      ${s.imgs?.length?`
        <div class="imgs-wrapper">
        ${s.imgs.map(a=>`
            ${a.imgSrc?`
              <wc-card-code
                CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                <wc-image src="${a.imgSrc}" alt="${a.alt??""}" class="card-img"></wc-image>
              </wc-card-code>
              `:""}
          `).join("")}
        </div>
        `:""}
      
      <!-- subSections -->
      ${s.subSections?s.subSections.map(a=>`
          <wc-sub-section
            id="${c(a.subSectionId)}"
            label="${c(a.subSectionLabel)}"
            aria-label="${c(a.subSectionAriaLabel)}"
            class="line-break"
            >
            <!-- description -->
            ${a.description?`<wc-card-icon variant="description">${a.description}</wc-card-icon>`:""}
            <!-- notes -->
            ${a.notes?`<wc-card-icon variant="notes">${a.notes}</wc-card-icon>`:""}

            ${a.imgs?.length?`
                    <div class="imgs-wrapper">
                    ${a.imgs.map(e=>`
                        ${e.imgSrc?`
                          <wc-card-code
                            CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                            <wc-image src="${e.imgSrc}" alt="${e.alt??""}" class="card-img"></wc-image>
                          </wc-card-code>
                        `:""}
                      `).join("")}
                    </div>`:""}

              <!-- topics -->
              ${a.topics?a.topics.map(e=>`
                <wc-topic
                  id="${c(e.topicId)}"
                  label="${c(e.topicLabel)}"
                  aria-label="${c(e.topicAriaLabel)}"
                  class="line-break"
                  >
                  <!-- description -->
                  ${e.description?`<wc-card-icon variant="description">${e.description}</wc-card-icon>`:""}
                  <!-- notes -->
                  ${e.notes?`<wc-card-icon variant="notes">${e.notes}</wc-card-icon>`:""}

                  ${e.imgs?.length?`
                    <div class="imgs-wrapper">
                    ${e.imgs.map(t=>`
                        ${t.imgSrc?`
                          <wc-card-code
                            CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                            <wc-image src="${t.imgSrc}" alt="${t.alt??""}" class="card-img"></wc-image>
                          </wc-card-code>
                        `:""}
                      `).join("")}
                    </div>`:""}

                  <!-- languages -->
                  <div class="cards-wrapper">
                    ${e.cardCodes?e.cardCodes.map((t,r)=>`
                      <wc-card-code
                        cardLabel="${c(t.cardLabel)}"
                        cardLabelIcon="/assets/images/icons/code.svg"
                        id="${c(`${s.sectionId}-${e.topicId}-code-${r}`)}">
                          <wc-code language="${c(t.language)}">
                          ${t.code??""}
                          </wc-code>
                      </wc-card-code>
                      `).join(""):""}
                  </div>
                  <!-- preview  -->
                  ${e.preview?`
                    <wc-card-code
                      cardLabelIcon="/assets/images/icons/preview.svg" cardLabel="Preview">
                      <div class="preview-container">
                        ${e.preview??""}
                      </div>
                    </wc-card-code>
                    `:""}
                  <!-- sanbox -->
                  ${e.sandbox?e.sandbox.map((t,r)=>`
                    <wc-sandbox
                      id="${c(`${s.sectionId}-${e.topicId}-sandbox-${r}`)}"
                      ${t.html?"html":""}
                      ${t.css?"css":""}
                      ${t.js?"js":""}
                      ${t.console?"console":""}
                    >
                    </wc-sandbox>
                    `).join(""):""}
                </wc-topic>
                
                  `).join(""):""}   
          </wc-sub-section>
      `).join(""):""}
          
      <!-- links -->
      ${s.links?`
        <wc-links data-links="${encodeURIComponent(JSON.stringify(s.links))}"></wc-links>`:""}
      </wc-section>
    `).join("")}
    `}export{v as r,u as s};
