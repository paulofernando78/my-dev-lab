export function renderSections(sections) {
  return sections
    .map(
      (section) => /* html */ `
        <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
          ${section.description ? `<wc-description>${section.description}</wc-description>` : ""}
          ${section.examples ? section.examples.map((example, index) => /* html */ `
            <wc-card ${example.cardLabel ? `cardLabel="${example.cardLabel}"` : ""} id="${section.sectionId}-card-${index}">
              <wc-wrapper>
                <wc-code language="${example.language}">
                  ${example.code}
                </wc-code>
                <div>
                  ${example.preview()}
                </div>
              </wc-wrapper>
            </wc-card>
            ${example.notes ? `<wc-notes>${example.notes}</wc-notes>` : ""}
            `,
              ).join("") : ""}
            </wc-section>
          `,
    )
    .join("");
}
