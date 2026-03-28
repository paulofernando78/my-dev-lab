import styles from "./renderSection.css?inline"

const langLabelMap = { html: "HTML", css: "CSS", js: "Javascript" };

function escapeAttribute(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderSections(sections) {
  return /* html */ `
    <style>
      ${styles}
    </style>

    <!--section -->
    ${sections.map((section) => /* html */ `
    <wc-section
      id="${escapeAttribute(section.sectionId)}"
      label="${escapeAttribute(section.sectionLabel)}"
      class="line-break"
      >
      <!-- description -->
      ${section.description ? /* html*/ `<wc-card-icon variant="description">${section.description}</wc-card-icon>` : ""}
      <!-- sampleAnswer -->
      ${section.sampleAnswer ? /* html*/ `<wc-card-icon variant="sample-answer">${section.sampleAnswer}</wc-card-icon>` : ""}
      <!-- notes -->
      ${section.notes ? /* html*/ `<wc-card-icon variant="notes">${section.notes}</wc-card-icon>` : ""}
      <!-- imgs -->
      ${section.imgs?.length
        ? /* html */ 
        `
        <div class="imgs-wrapper">
        ${section.imgs.map((img) => /* html */
          `
            ${img.imgSrc
              ? /* html*/
              `
              <wc-card-code
                CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
              </wc-card-code>
              `
              :
              ""
            }
          `,
          ).join("")}
        </div>
        `
        :
        ""
      }
      
      <!-- subSections -->
      ${
        section.subSections
          ? section.subSections.map((subSection) => /* html */ `
          <wc-sub-section
            id="${escapeAttribute(subSection.subSectionId)}"
            label="${escapeAttribute(subSection.subSectionLabel)}"
            class="line-break"
            >
            <!-- description -->
            ${subSection.description ? /* html*/ `<wc-card-icon variant="description">${subSection.description}</wc-card-icon>` : ""}
            <!-- notes -->
            ${subSection.notes ? /* html*/ `<wc-card-icon variant="notes">${subSection.notes}</wc-card-icon>` : ""}

            ${subSection.imgs?.length
                    ? /* html */ `
                    <div class="imgs-wrapper">
                    ${subSection.imgs
                      .map(
                        (img) => /* html */ `
                        ${
                          img.imgSrc
                            ? /* html*/ `
                          <wc-card-code
                            CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                            <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
                          </wc-card-code>
                        `
                            : ""
                        }
                      `,
                      )
                      .join("")}
                    </div>`
                    :
                    ""
                  }

              <!-- topics -->
              ${subSection.topics
                ? subSection.topics.map((topic) => /* html */ `
                <wc-topic
                  id="${escapeAttribute(topic.topicId)}"
                  label="${escapeAttribute(topic.topicLabel)}"
                  class="line-break"
                  >
                  <!-- description -->
                  ${topic.description ? /* html*/ `<wc-card-icon variant="description">${topic.description}</wc-card-icon>` : ""}
                  <!-- notes -->
                  ${topic.notes ? /* html*/ `<wc-card-icon variant="notes">${topic.notes}</wc-card-icon>` : ""}

                  ${topic.imgs?.length
                    ? /* html */ `
                    <div class="imgs-wrapper">
                    ${topic.imgs
                      .map(
                        (img) => /* html */ `
                        ${
                          img.imgSrc
                            ? /* html*/ `
                          <wc-card-code
                            CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                            <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
                          </wc-card-code>
                        `
                            : ""
                        }
                      `,
                      )
                      .join("")}
                    </div>`
                    :
                    ""
                  }

                  <!-- languages -->
                  <div class="cards-wrapper">
                    ${topic.cardCodes
                      ?
                      topic.cardCodes.map((cardCode, index) => {
                        const language = Object.keys(cardCode)[0];
                        const code = cardCode[language];
                        return /* html */`
                      <wc-card-code
                        cardLabel="${langLabelMap[language] ?? language}"
                        cardLabelIcon="/assets/images/icons/code.svg"
                        id="${escapeAttribute(`${section.sectionId}-${topic.topicId}-code-${index}`)}">
                          <wc-code language="${escapeAttribute(language)}">
                          ${code ?? ""}
                          </wc-code>
                      </wc-card-code>
                      `;
                      }).join("") : ""}
                  </div>
                  <!-- preview  -->
                  ${topic.preview
                    ? /* html */
                    `
                    <wc-card-code
                      cardLabelIcon="/assets/images/icons/preview.svg" cardLabel="Preview">
                      <div class="preview-container">
                        ${topic.preview ?? ""}
                      </div>
                    </wc-card-code>
                    `
                    :
                    ""
                  }
                  <!-- sanbox -->
                  ${topic.sandbox
                    ?
                    topic.sandbox.map((config, index /* html */) =>
                    /* html */`
                    <wc-sandbox
                      id="${escapeAttribute(`${section.sectionId}-${topic.topicId}-sandbox-${index}`)}"
                      ${config.html ? "html" : ""}
                      ${config.css ? "css" : ""}
                      ${config.js ? "js" : ""}
                      ${config.console ? "console" : ""}
                    >
                    </wc-sandbox>
                    `,
                    ).join("")
                    : ""
                  }
                </wc-topic>
                
                  `,
                    ).join("")
                  :
                  ""
              }   
          </wc-sub-section>
      `,
              )
              .join("")
          : ""
      }
          
      <!-- links -->
      ${
        section.links
          ? /* html */ `
        <wc-links data-links="${encodeURIComponent(JSON.stringify(section.links))}"></wc-links>`
          : ""
      }
      </wc-section>
    `,
      )
      .join("")}
    `;
}
