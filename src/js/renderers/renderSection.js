const style = /* css */ `
  wc-section {
    margin-bottom: 50px;
  }
  
  .card__code-img {
    width: 50%;
    margin: 0 auto
  }

  .card-img {
    padding: 5px;
    overflow: hidden;
  }
  
  .card-img img {
    border-radius: var(--border-radius);
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px
  }

  @media (width < 900px) {
    .cards-wrapper {
    grid-template-columns: 1fr;
  }
  }
`;

export function renderSections(sections) {
  return sections.map((section) => /* html */ `
    <style>
      ${style}
    </style>
    <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
      ${section.description ? /* html*/ `<wc-card-icon variant="description">${section.description}</wc-card-icon>` : ""}
      ${section.sampleAnswer ? /* html*/ `<wc-card-icon variant="sample-answer">${section.sampleAnswer}</wc-card-icon>` : ""}
      ${section.notes ? /* html*/ `<wc-card-icon variant="notes">${section.notes}</wc-card-icon>` : ""}

      ${section.cardCodes ? /* html */ `

      ${section.cardCodes
        .filter((cardCode) => cardCode.image)
        .map(
          (cardCode, index) => /* html */ `
          <wc-card-code class="card__code-img"
            ${cardCode.cardLabel ? `cardLabel="${cardCode.cardLabel}"` : ""}
            id="${section.sectionId}-card-${index}">
            <div class="card-img">
              <img src="${cardCode.image}" alt="Snippet Image" />
            </div>
            ${cardCode.description ?? ""}
          </wc-card-code>
        `,
        )
        .join("")}

        <div class="cards-wrapper">
          ${section.cardCodes
            .filter((cardCode) => cardCode.code)
            .map((cardCode, index) => /* html */ `
              <wc-card-code
                ${cardCode.cardLabel ? `cardLabel="${cardCode.cardLabel}"` : ""}
                cardLabelIcon="/assets/images/icons/code.svg"
                id="${section.sectionId}-code-${index}">
                <wc-code language="${cardCode.language}">
                  ${cardCode.code ?? ""}
                </wc-code>
              </wc-card-code>
            `,
            ).join("")}
        </div>

      `: "" }
          
        ${section.demo}

        ${section.sandbox? section.sandbox.map((config, index) => /* html */ `
          <wc-sandbox
            id="${section.sectionId}-sandbox-${index}"
            ${config.html ? "html" : ""}
            ${config.css ? "css" : ""}
            ${config.js ? "js" : ""}
          >
          </wc-sandbox>
        `,
        )
        .join("")
        : "" }
          
        ${section.links ? /* html */ `
          <wc-links data-links="${encodeURIComponent(JSON.stringify(section.links))}"></wc-links>`
        : "" }
        </wc-section>
      `,
    )
    .join("");
}
