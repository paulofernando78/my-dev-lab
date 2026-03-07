const style = /* css */ `
  

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
  return sections
    .map(
      (section) => /* html */ `
    <style>
      ${style}
    </style>

    <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
      ${section.description ? /* html*/ `<wc-card-icon variant="description">${section.description}</wc-card-icon>` : ""}
      ${section.sampleAnswer ? /* html*/ `<wc-card-icon variant="sample-answer">${section.sampleAnswer}</wc-card-icon>` : ""}
      ${section.notes ? /* html*/ `<wc-card-icon variant="notes">${section.notes}</wc-card-icon>` : ""}

      ${section.imgs
        ? /* html */`
        <div class="imgs-wrapper">
        ${section.imgs ? section.imgs.map((img) => /* html */ `
            ${img.imgSrc ? /* html*/ `
              <wc-card-code
                CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
              </wc-card-code>
            ` : ""}
          `,).join("") : ""
        }
        </div>`
        :
        "" }
      
      ${section.subSections ? section.subSections.map((subSection) => /* html */ `
        <wc-sub-section
          id="${subSection.subSectionId}"
          label="${subSection.subSectionLabel}"
          aria-label="${subSection.subSectionAriaLabel}">

          ${subSection.description ? /* html*/ `<wc-card-icon variant="description">${subSection.description}</wc-card-icon>` : ""}
          ${subSection.notes ? /* html*/ `<wc-card-icon variant="notes">${subSection.notes}</wc-card-icon>` : ""}

          ${subSection.cardCodes
            ? /* html */ `
            
            ${subSection.imgs
            ? /* html */`
              <div class="imgs-wrapper">
              ${subSection.imgs ? section.imgs.map((img) => /* html */ `
                  ${img.imgSrc ? /* html*/ `
                    <wc-card-code
                      CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                      <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
                    </wc-card-code>
                  ` : ""}
                `,).join("") : ""
              }
              </div>`
              :
              "" }

            ${subSection.cardCodes
              ? /* html */ `
              <div class="cards-wrapper">
              ${subSection.cardCodes
                .filter((cardCode) => cardCode.code)
                .map(
                  (cardCode, index) => /* html */ `
                  <wc-card-code
                    ${cardCode.cardLabel ? `cardLabel="${cardCode.cardLabel}"` : ""}
                    cardLabelIcon="/assets/images/icons/code.svg"
                    id="${section.sectionId}-${subSection.subSectionId}-code-${index}">
                    <wc-code language="${cardCode.language}">
                      ${cardCode.code ?? ""}
                    </wc-code>
                  </wc-card-code>
                `,
                )
                .join("")}
            </div>
            `
              : ""
            }
            

          `
              : ""
          }
          
          ${subSection.preview ? /*html */`
              <wc-card-code cardLabelIcon="/assets/images/icons/preview.svg" cardLabel="Preview">
                <div class="preview-container">
                  ${subSection.preview ?? ""}
                </div>
              </wc-card-code>`
            : ""
          }
          
          ${subSection.sandbox
            ?
            subSection.sandbox.map((config, index) => /* html */ `
              <wc-sandbox
                id="${section.sectionId}-${subSection.subSectionId}-sandbox-${index}"
                ${config.html ? "html" : ""}
                ${config.css ? "css" : ""}
                ${config.js ? "js" : ""}
              >
              </wc-sandbox>
            `,
            ).join("")
            : ""
          }

        </wc-sub-section>
      `,
            ).join("")
          : ""
      }
          
      ${
        section.links
          ? /* html */ `
        <wc-links data-links="${encodeURIComponent(JSON.stringify(section.links))}"></wc-links>`
          : ""
      }
      </wc-section>
    `,
    )
    .join("");
}
