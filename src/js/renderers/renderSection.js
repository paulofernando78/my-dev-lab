const style = /* css */ `
  wc-section {
    margin-bottom: 50px;
  }

  .preview {
    background-color: #fff;
    color: #000;
    border: 1px solid;
    border-radius: var(--border-radius);
    padding: 5px 5px 5px 5px
  }
  
  .card-img {
    padding: 5px;
    overflow: hidden;
  }
  
  .card-img img {
    border-radius: var(--border-radius);
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
          ${section.cardCodes ? section.cardCodes.map((cardCode, index) => /* html */ `    
            <wc-wrapper>
              <wc-card-code
                ${cardCode.cardLabel ? `cardLabel="${cardCode.cardLabel}"` : ""}
                cardLabelIcon="/assets/images/icons/code.svg"
                id="${section.sectionId}-card-${index}">
                ${
                  (cardCode.type ?? "code") === "snippet"
                    ? /* image + text mode */ /* html */ `
                      ${cardCode.image ? /* html */`<div class="card-img"><img src="${cardCode.image}" alt="snippet" class="img-radius"/></div>` : ""}
                    `
                    : /* html */ `
                      <wc-code language="${cardCode.language}">
                        ${cardCode.code ?? ""}
                      </wc-code>
                    `
                }
              </wc-card-code>
              ${
                (cardCode.type ?? "code") === "snippet"
                  ? /* Code + text mode */ /* html */ `
                  
                    <wc-card-icon variant="description">
                      ${cardCode.description ?? ""}
                    </wc-card-icon>
                
                  `
                  : /* code + preview mode */ /* html */ `
                    <wc-card-icon variant="preview">
                      <div class="preview">
                        ${cardCode.preview ? cardCode.preview() : ""}
                      </div>
                    </wc-card-icon>
                
                `
              }
            </wc-wrapper>
            ${cardCode.sandbox ? cardCode.sandbox.map((config, index) => /* html */ `
              <wc-sandbox
                id="${section.sectionId}-sandbox-${index}"
                ${config.html ? "html" : ""}
                ${config.css ? "css" : ""}
                ${config.js ? "js" : ""}
              ></wc-sandbox>
              `
              ,).join("")
              : "" }
            `
            ,).join("")
          : "" }
          
          ${section.links ? /* html */`
            <wc-links data-links="${encodeURIComponent(JSON.stringify(section.links))}"></wc-links>`
          : "" }
        </wc-section>
      `,
    )
    .join("");
}
