import { section92 } from "./9-2/index.js";
import { section93 } from "./9-3/index.js";
import { section94 } from "./9-4/index.js";
import { section95 } from "./9-5/index.js";
import { resources } from "./resources.js";

const callbacks = {
  ...section92,
  sectionLabel: "9.2 Callbacks",
  sectionAriaLabel: "9.2 Callbacks",
};

const timers = {
  ...section93,
  sectionLabel: "9.1 Timers",
  sectionAriaLabel: "9.1 Timers",
};

const promises = {
  ...section94,
  sectionLabel: "9.3 Promises",
  sectionAriaLabel: "9.3 Promises",
};

const asyncAwait = {
  ...section95,
  sectionLabel: "9.4 async / await",
  sectionAriaLabel: "9.4 async await",
};

export const sections = [
  timers,
  callbacks,
  promises,
  asyncAwait,
  resources,
];
