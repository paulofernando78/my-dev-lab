export function renderSections(sections) {
  return sections
    .map(
      (section) => /* html */ `
        <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
          ${section.description ? /* html*/ `<wc-card-icon variant="description">${section.description}</wc-card-icon>` : ""}
          ${section.sampleAnswer ? /* html*/ `<wc-card-icon variant="sample-answer">${section.sampleAnswer}</wc-card-icon>` : ""}
          ${section.notes ? /* html*/ `<wc-card-icon variant="notes">${section.notes}</wc-card-icon>` : ""}
          ${
            section.examples
              ? section.examples
                  .map(
                    (example, index) => /* html */ `
                <wc-card-code ${example.cardLabel ? `cardLabel="${example.cardLabel}"` : ""} id="${section.sectionId}-card-${index}">
                  ${
                    (example.type ?? "code") === "snippet"
                      ? /* image + text mode */ /* html */ `
                      <wc-wrapper>
                        <div>
                          <img src="${example.image}" alt="snippet"/>
                        </div>
                        <div class="line-break">
                          ${example.description ?? ""}
                        </div>
                      </wc-wrapper>
                      `
                      : /* code + preview mode */ /* html */ `
                      <wc-wrapper>
                        <wc-code language="${example.language}">
                          ${example.code}
                        </wc-code>
                        <div>
                          ${example.preview()}
                        </div>
                      </wc-wrapper>
                    `
                  }
                </wc-card-code>
                  ${
                    example.notes
                      ? /* html */ `
                      <wc-notes>${example.notes}</wc-notes>`
                      : ""
                  }
                  ${
                    example.sandbox
                      ? example.sandbox
                          .map(
                            (config, index) => /* html */ `
                <wc-sandbox id="${example.exampleId}-sandbox-${index}"
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
