export function renderSections(sections) {
  return sections
    .map(
      (section) => /* html */ `
        <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
          ${section.description ? `<wc-description>${section.description}</wc-description>` : ""}
          ${section.examples ? section.examples.map((example, index) => /* html */ `
            <wc-card ${example.cardLabel ? `cardLabel="${example.cardLabel}"` : ""} id="${section.sectionId}-card-${index}">

            
            ${(example.type ?? "code") === "snippet"
              // if type missing → use "code" then compare to "snippet" 
              ?
              /* image + text mode */ /* html */
              `
              <wc-wrapper>
                <div>
                  <img src="${example.image}" alt="snippet"/>
                </div>
                <div class="line-break">
                  ${example.description ?? ""}
                </div>
              </wc-wrapper>
              `
              :
              /* code + preview mode */ /* html */
              `
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
            </wc-card>
            
            ${example.notes ? /* html */`
              <wc-notes>${example.notes}</wc-notes>
              ` : ""}
            `,
              ).join("") : ""}
        </wc-section>
      `,
    )
    .join("");
}