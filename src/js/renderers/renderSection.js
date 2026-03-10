const style = /* css */ `
  wc-section, wc-sub-section {
    margin-top: 1.5rem
  }

  .imgs-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 3fr));
    gap: 10px;
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px
  }

  .preview-container {
    color: #000;
    background-color: #fff;
    border-radius: var(--border-radius);
    padding: 5px
  }

  @media (width < 900px) {
    .cards-wrapper {
    grid-template-columns: 1fr;
  }
  }
`;

export function renderSections(sections) {
  return /* html */ `
    <style>
      ${style}
    </style>

    <!--section -->
    ${sections
      .map(
        (section) => /* html */ `
    <wc-section
      id="${section.sectionId}"
      label="${section.sectionLabel}"
      aria-label="${section.sectionAriaLabel}"
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
          ? /* html */ `
          <div class="imgs-wrapper">
          ${section.imgs
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
      
      <!-- subSections -->
      ${
        section.subSections
          ? section.subSections.map((subSection) => /* html */ `
          <wc-sub-section
            id="${subSection.subSectionId}"
            label="${subSection.subSectionLabel}"
            aria-label="${subSection.subSectionAriaLabel}"
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
                  id="${topic.topicId}"
                  label="${topic.topicLabel}"
                  aria-label="${topic.topicAriaLabel}"
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
                      topic.cardCodes.map((cardCode, index) => /* html */
                      `
                      <wc-card-code
                        cardLabel="${cardCode.cardLabel}"
                        cardLabelIcon="/assets/images/icons/code.svg"
                        id="${section.sectionId}-${topic.topicId}-code-${index}">
                          <wc-code language="${cardCode.language}">
                          ${cardCode.code ?? ""}
                          </wc-code>
                      </wc-card-code>
                      `,
                      ).join("") : ""}
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
                      id="${section.sectionId}-${topic.topicId}-sandbox-${index}"
                      ${config.html ? "html" : ""}
                      ${config.css ? "css" : ""}
                      ${config.js ? "js" : ""}
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
