import { fetchBasics } from "./fetch-basics.js";
import { handlingResponses } from "./handling-responses.js";
import { fetchWithAsyncAwait } from "./fetch-with-async-await.js";

export const section102 = {
  sectionId: "the-fetch-api",
  sectionLabel: "10.2 The Fetch API",
  subSections: [fetchBasics, handlingResponses, fetchWithAsyncAwait],
};
