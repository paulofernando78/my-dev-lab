import{c as l}from"./index-WhkxeUrP.js";const d=`
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

`;function o(t=""){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.contents=[]}render(){const s=this.contents||[];this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${d}
      </style>
      <span class="contents-navbar-title">Table of Contents</span>
      <nav class="contents-navbar">
        <ul>
          ${s.map(a=>`
              <li class="section">
                  <a data-target="${a.id}">${o(a.sectionLabel)}</a>
                <ul>
                  ${a.content?a.content.filter(e=>e.subSectionLabel).map(e=>`
                        <li class="content">
                          <a data-target="${e.id}">${o(e.subSectionLabel)}</a>
                          <ul>
                            ${(e.topics||[]).map(c=>`
                              <li class="topic">
                                <a data-target="${c.id}">${o(c.topicLabel)}</a>
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
`;function g(t=""){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const s=this.getAttribute("label")??"";this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${m}
      </style>
      <section class="line-break">
        <span class="label">${g(s)}</span>
        <slot></slot>
      </section>
    `}}customElements.define("wc-section",b);function u(t,s){const a=t.querySelector("wc-contents");a.contents=s.map(e=>{const c=(e.subSections||[]).map(r=>({id:r.subSectionId,subSectionLabel:r.subSectionLabel||"Sub Section",topics:(r.topics||[]).map(i=>({id:i.topicId,topicLabel:i.topicLabel||"Topic"}))}));return{id:e.sectionId,sectionLabel:e.sectionLabel,content:c}}),a.render()}const $=".imgs-wrapper,.cards-wrapper{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:5px}.imgs-wrapper>:only-child,.cards-wrapper>:only-child{padding-inline:clamp(0px,calc(34vw - 160px),150px)}.preview-container{color:#000;background-color:#fff;border-radius:var(--border-radius);padding:5px}";function n(t=""){return String(t).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function v(t){return`
    <style>
      ${$}
    </style>

    <!--section -->
    ${t.map(s=>`
    <wc-section
      id="${n(s.sectionId)}"
      label="${n(s.sectionLabel)}"
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
            id="${n(a.subSectionId)}"
            label="${n(a.subSectionLabel)}"
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
                  id="${n(e.topicId)}"
                  label="${n(e.topicLabel)}"
                  class="line-break"
                  >
                  <!-- description -->
                  ${e.description?`<wc-card-icon variant="description">${e.description}</wc-card-icon>`:""}
                  <!-- notes -->
                  ${e.notes?`<wc-card-icon variant="notes">${e.notes}</wc-card-icon>`:""}

                  ${e.imgs?.length?`
                    <div class="imgs-wrapper">
                    ${e.imgs.map(c=>`
                        ${c.imgSrc?`
                          <wc-card-code
                            CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                            <wc-image src="${c.imgSrc}" alt="${c.alt??""}" class="card-img"></wc-image>
                          </wc-card-code>
                        `:""}
                      `).join("")}
                    </div>`:""}

                  <!-- languages -->
                  <div class="cards-wrapper">
                    ${e.cardCodes?e.cardCodes.map((c,r)=>`
                      <wc-card-code
                        cardLabel="${n(c.cardLabel)}"
                        cardLabelIcon="/assets/images/icons/code.svg"
                        id="${n(`${s.sectionId}-${e.topicId}-code-${r}`)}">
                          <wc-code language="${n(c.language)}">
                          ${c.code??""}
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
                  ${e.sandbox?e.sandbox.map((c,r)=>`
                    <wc-sandbox
                      id="${n(`${s.sectionId}-${e.topicId}-sandbox-${r}`)}"
                      ${c.html?"html":""}
                      ${c.css?"css":""}
                      ${c.js?"js":""}
                      ${c.console?"console":""}
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
