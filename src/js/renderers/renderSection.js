const style = /* css */ `
  wc-section {
    margin-bottom: 50px;
  }

  .imgs-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 3fr));
    gap: 10px
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

      <div class="imgs-wrapper">
        ${section.imgs ? section.imgs.map((img) => /* html */ `
            ${img.imgSrc ? /* html*/ `
              <wc-card-code CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image">
                <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
              </wc-card-code>
            ` : ""}
          `,).join("") : ""
        }
      </div>
      
      

      ${section.subSections ? section.subSections.map((subSection) => /* html */ `
        <wc-sub-section
          id="${subSection.subSectionId}"
          label="${subSection.subSectionLabel}"
          aria-label="${subSection.subSectionAriaLabel}">

          ${subSection.cardCodes ? /* html */ `
            <div class="imgs-wrapper">
              ${subSection.cardCodes
                .filter((cardCode) => cardCode.imgs)
                .map(
                  (cardCode, index) => /* html */ `

                  ${cardCode.imgs
                    .map(
                      (img, imgIndex) => /* html */ `
                    <wc-card-code
                      CardLabelIcon="/assets/images/icons/image.svg" CardLabel="Image""
                      id="${section.sectionId}-${subSection.subSectionId}-img-${index}-${imgIndex}">
                      <wc-image src="${img.imgSrc}" alt="${img.alt ?? ""}" class="card-img"></wc-image>
                    </wc-card-code>
                  `,
                    )
                    .join("")}
                  
                `,
                )
                .join("")}
            </div>

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
          
          <wc-card-code cardLabelIcon="/assets/images/icons/preview.svg" cardLabel="Preview">
            <div class="preview-container">
              ${subSection.preview ?? ""}
            </div>
          </wc-card-code>

          ${
            subSection.sandbox
              ? subSection.sandbox
                  .map(
                    (config, index) => /* html */ `
            <wc-sandbox
              id="${section.sectionId}-${subSection.subSectionId}-sandbox-${index}"
              ${config.html ? "html" : ""}
              ${config.css ? "css" : ""}
              ${config.js ? "js" : ""}
            >
            </wc-sandbox>
          `,
                  )
                  .join("")
              : ""
          }

        </wc-sub-section>
      `,
              )
              .join("")
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
