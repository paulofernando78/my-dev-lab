import { asyncFunctions } from "./async-functions.js";
import { awaitKeyword } from "./await.js";
import { tryCatchAsync } from "./try-catch-async.js";
import { asyncVsPromises } from "./async-vs-promises.js";

export const section95 = {
  sectionId: "async-await",
  sectionLabel: "9.5 async / await",
  sectionAriaLabel: "9.5 async await",
  subSections: [
    asyncFunctions,
    awaitKeyword,
    tryCatchAsync,
    asyncVsPromises,
  ],
};
