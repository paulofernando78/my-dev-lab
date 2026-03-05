export function setupContents(root, sections) {
  const contentsEl = root.querySelector("wc-contents");

  contentsEl.contents = sections.map((section) => {
    // Cards (exemplos de código)
    const cards = (section.cardCodes || []).map((example, index) => ({
      id: example.sectionId || `${section.sectionId}-card-${index}`,
      subSectionLabel: example.cardLabel || "Example",
    }));

    // Sandboxes (Practice)
    const sandboxes = (section.cardCodes || []).flatMap((example) =>
      (example.sandbox || []).map((_, sandboxIndex) => ({
        id: `${section.sectionId}-sandbox-${sandboxIndex}`,
        subSectionLabel:
          (example.sandbox || []).length > 1
            ? `Practice ${sandboxIndex + 1}`
            : "Practice",
      }))
    );

    return {
      id: section.sectionId,
      sectionLabel: section.sectionLabel,
      content: [...cards, ...sandboxes],
    };
  });

  contentsEl.render();
}