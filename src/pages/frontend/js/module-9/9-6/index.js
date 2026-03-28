import { fetchBasics } from "./fetch-basics.js";
import { handlingResponses } from "./handling-responses.js";
import { fetchErrors } from "./fetch-errors.js";
import { fetchAsyncAwait } from "./fetch-async-await.js";

export const section96 = {
  sectionId: "fetch-api",
  sectionLabel: "9.6 Fetch API",
  subSections: [
    fetchBasics,
    handlingResponses,
    fetchErrors,
    fetchAsyncAwait,
  ],
};
