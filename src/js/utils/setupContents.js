export function setupContents(root, sections) {
  const contentsEl = root.querySelector("wc-contents");

  contentsEl.contents = sections.map((section) => ({
    id: section.sectionId,
    sectionLabel: section.sectionLabel,
  }));

  contentsEl.render();
}
