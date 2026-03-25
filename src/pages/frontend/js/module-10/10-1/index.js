import { httpOverview } from "./http-overview.js";
import { httpMethods } from "./http-methods.js";
import { statusCodes } from "./status-codes.js";

export const section101 = {
  sectionId: "http-basics",
  sectionLabel: "10.1 HTTP Basics",
  sectionAriaLabel: "10.1 HTTP Basics",
  subSections: [httpOverview, httpMethods, statusCodes],
};
