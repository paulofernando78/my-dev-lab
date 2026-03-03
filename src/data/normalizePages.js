// Unified Page Registry

// DATA (roadmap / ai / misc)
//         ↓
// normalizePages  ← (adapter layer)
//         ↓
// UI (PageHeader / LessonNav / Router)

export function normalizePage({ global, tools, design, fullstackRoadmap, ai, misc }) {
  function normalizeSections(data, itemKey, type) {
    return (data ?? [])
      .flatMap((section) => section.categories ?? [])
      .flatMap((category) =>
        (category[itemKey] ?? []).map((item) => ({
          type,
          title: item.module ?? item.label,
          module: item.module ?? undefined,
          href: item.href,
          category: category.category,
          icon: category.icon,
        })),
      )
      .filter((p) => p.href);
  }

  const normalizedGlobal = (global ?? []).map((p) => ({
    type: "global",
    title: p.label ?? p.module,
    href: p.href,
  }));

  const normalizedFullstackRoadmap = normalizeSections(
    fullstackRoadmap,
    "modules",
    "module",
  );

  const normalizedTools = normalizeSections(tools, "labels", "misc");

  const normalizedDesign = normalizeSections(design, "labels", "design");
 
  const normalizedAi = normalizeSections(ai, "labels", "ai");

  const normalizedMisc = normalizeSections(misc, "labels", "misc");

  return [
    ...normalizedGlobal,
    ...normalizedTools,
    ...normalizedDesign,
    ...normalizedFullstackRoadmap,
    ...normalizedAi,
    ...normalizedMisc,
  ];
}
