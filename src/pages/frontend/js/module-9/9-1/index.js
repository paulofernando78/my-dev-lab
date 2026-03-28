import { callStack } from "./call-stack.js";
import { taskQueue } from "./task-queue.js";
import { eventLoop } from "./event-loop.js";

export const section91 = {
  sectionId: "the-event-loop",
  sectionLabel: "9.1 The Event Loop",
  subSections: [
    callStack,
    taskQueue,
    eventLoop,
  ],
};
