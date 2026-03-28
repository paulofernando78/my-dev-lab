import { setTimeoutSection } from "./settimeout.js";
import { setIntervalSection } from "./setinterval.js";
import { timeoutVsInterval } from "./settimeout-vs-setinterval.js";

export const section93 = {
  sectionId: "timers",
  sectionLabel: "9.3 Timers",
  subSections: [
    setTimeoutSection,
    setIntervalSection,
    timeoutVsInterval,
  ],
};
