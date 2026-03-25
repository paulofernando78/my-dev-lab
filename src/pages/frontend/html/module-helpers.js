export function topic(topicId, topicLabel) {
  return {
    topicId,
    topicLabel,
    topicAriaLabel: topicLabel,
  };
}

export function subSection(subSectionId, subSectionLabel, topics) {
  return {
    subSectionId,
    subSectionLabel,
    subSectionAriaLabel: subSectionLabel,
    topics,
  };
}

export function section(sectionId, sectionLabel, subSections) {
  return {
    sectionId,
    sectionLabel,
    sectionAriaLabel: sectionLabel,
    subSections,
  };
}
