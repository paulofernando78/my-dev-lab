import { forLoop } from "./for.js";
import { whileLoops } from "./while.js";
import { breakContinue } from "./break-continue.js";
import { forOfForIn } from "./for-of-for-in.js";

export const section22 = {
  sectionId: "loops",
  sectionLabel: "2.2 Loops",
  sectionAriaLabel: "2.2 Loops",
  subSections: [
    forLoop,
    whileLoops,
    breakContinue,
    forOfForIn,
  ],
};
