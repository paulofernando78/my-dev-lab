export function setupContents(root, sections) {
  const contentsEl = root.querySelector("wc-contents");

  contentsEl.contents = sections.map((section) => {


    const subSections = (section.subSections || []).map((subSection) => ({
      id: subSection.subSectionId,
      subSectionLabel: subSection.subSectionLabel || "Sub Section",
      
      topics: (subSection.topics || []).map((topic) => ({
        id: topic.topicId,
        topicLabel: topic.topicLabel || "Topic",
      })),
    }));

    return {
      id: section.sectionId,
      sectionLabel: section.sectionLabel,
      
      content: subSections,
    };
  });

  contentsEl.render();
}