import { windowGlobalEvents } from "./window-global-events.js";

export const section75 = {
  sectionId: "window-global-events",
  sectionLabel: "7.5 Window & Global Events",
  sectionAriaLabel: "7.5 Window & Global Events",
  description: /* html */ `
    <p>The browser exposes global events on the <code>window</code> object that fire in response to lifecycle and environment changes, such as page load, resize, and scroll.</p>
  `,
  subSections: [windowGlobalEvents],
};
