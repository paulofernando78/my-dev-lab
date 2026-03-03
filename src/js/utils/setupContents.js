export function setupContents(root, sections) {
  const contentsEl = root.querySelector("wc-contents");

  contentsEl.contents = sections.map((section) => ({
    id: section.sectionId,
    sectionLabel: section.sectionLabel,
    content: (section.cardCodes || []).map((example, index) => ({
      id: example.sectionId || `${section.sectionId}-card-${index}`,
      subSectionLabel: example.cardLabel,
    })),
  }));

  contentsEl.render();
}
