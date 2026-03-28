import { clickEvents } from "./click-events.js";
import { hoverEvents } from "./hover-events.js";
import { mouseInteractions } from "./mouse-interactions.js";

export const section72 = {
  sectionId: "mouse-events",
  sectionLabel: "7.2 Mouse Events",
  description: /* html */ `
    <p>Mouse events let you detect and respond to user interactions with the pointer, including clicks, button presses, hover states, and cursor movement.</p>
  `,
  subSections: [
    clickEvents,
    hoverEvents,
    mouseInteractions],
};
