export function normalizePage({ global, fullstackRoadmap, ai, misc }) {
  const normalizedGlobal = (global ?? []).map((p) => ({
    type: "global",
    title: p.label,
    href: p.href,
  }));

  const normalizedfullstackRoadmap = (fullstackRoadmap ?? [])
    .flatMap((section) => section.categories ?? [])
    .flatMap((category) =>
      (category.modules ?? []).map((m) => ({
        type: "module",
        title: m.module,
        module: m.module,
        href: m.href,
        category: category.category,
        icon: category.icon,
      })),
    )
    .filter((p) => p.href);

  const normalizedAi = (ai ?? [])
    .flatMap((section) => section.categories ?? [])
    .flatMap((category) =>
      (category.labels ?? []).map((l) => ({
        type: "ai",
        title: l.label,
        href: l.href,
        category: category.category,
        icon: category.icon,
      })),
    )
    .filter((p) => p.href);
    
  const normalizedMisc = (misc ?? [])
    .flatMap((section) => section.categories ?? [])
    .flatMap((category) =>
      (category.labels ?? []).map((l) => ({
        type: "misc",
        title: l.label,
        href: l.href,
        category: category.category,
        icon: category.icon,
      })),
    )
    .filter((p) => p.href);

  return [...normalizedGlobal, ...normalizedfullstackRoadmap, ...normalizedAi, ...normalizedMisc];
}
