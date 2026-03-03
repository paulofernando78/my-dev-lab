const style = /* css */ `
  .preview {
    background-color: #fff;
    color: #000;
    border: 1px solid;
    border-radius: var(--border-radius);
    padding: 1px 5px 5px 5px
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
          ${section.list ? /* html*/ `<wc-card-icon variant="list">${section.list}</wc-card-icon>` : ""}
          ${
            section.cardCodes
              ? section.cardCodes
                  .map(
                    (cardCode, index) => /* html */ `
                
                <wc-wrapper>
                  <wc-card-code
                    ${cardCode.cardLabel ? `cardLabel="${cardCode.cardLabel}"` : ""}
                    cardLabelIcon="/assets/images/icons/text.svg"
                    id="${section.sectionId}-card-${index}">
                    ${
                      cardCode.image
                        ? /* html */ `
                      <div>
                        <img src="${cardCode.image}" alt="snippet"/>
                      </div>
                      `
                        : /* html */ `
                    <wc-code language="${cardCode.language}">
                      ${cardCode.code}
                    </wc-code>
                    `
                    }
                
                  </wc-card-code>
                    ${
                      (cardCode.type ?? "code") === "snippet"
                        ? /* image + text mode */ /* html */ `
                        
                          <div class="line-break">
                            ${cardCode.description ?? ""}
                          </div>
                      
                        `
                        : /* code + preview mode */ /* html */ `
                     
                          <wc-preview>
                            ${cardCode.preview()}
                          </wc-preview>
                     
                      `
                    }
                </wc-wrapper>




                  
                  ${
                    cardCode.notes
                      ? /* html */ `
                      <wc-notes>${cardCode.notes}</wc-notes>`
                      : ""
                  }
                  ${
                    cardCode.sandbox
                      ? cardCode.sandbox
                          .map(
                            (config, index) => /* html */ `
                <wc-sandbox id="${section.sectionId}-sandbox-${index}"
                  ${config.html ? "html" : ""}
                  ${config.css ? "css" : ""}
                  ${config.js ? "js" : ""}
                ></wc-sandbox>
                `,
                          )
                          .join("")
                      : ""
                  }
                  `,
                  )
                  .join("")
              : ""
          }
          
          <wc-links
            data-links="${encodeURIComponent(JSON.stringify(section.links))}">
          </wc-links>
        </wc-section>
      `,
    )
    .join("");
}
