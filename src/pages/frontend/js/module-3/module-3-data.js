import { section14 } from "../module-1/1-4/index.js";
import { section15 } from "../module-1/1-5/index.js";
import { section31 } from "./3-1/index.js";
import { section32 } from "./3-2/index.js";
import { section33 } from "./3-3/index.js";
import { section34 } from "./3-4/index.js";
import { resources } from "./resources.js";

const [
  functionDeclaration,
  functionExpression,
  arrowFunctions,
  parametersReturn,
] = section14.subSections;

const functions = {
  ...section14,
  sectionLabel: "3.1 Functions",
  sectionAriaLabel: "3.1 Functions",
  subSections: [
    functionDeclaration,
    parametersReturn,
    functionExpression,
    arrowFunctions,
  ],
};

const scope = {
  ...section15,
  sectionLabel: "3.2 Scope",
  sectionAriaLabel: "3.2 Scope",
};

const parametersInvocation = {
  ...section31,
  sectionLabel: "3.3 Parameters & Invocation",
  sectionAriaLabel: "3.3 Parameters and Invocation",
};

const lexicalClosures = {
  ...section32,
  sectionLabel: "3.4 Lexical Scope & Closures",
  sectionAriaLabel: "3.4 Lexical Scope and Closures",
};

const higherOrderFunctions = {
  ...section33,
  sectionLabel: "3.5 Higher-Order Functions",
  sectionAriaLabel: "3.5 Higher-Order Functions",
};

const thisKeyword = {
  ...section34,
  sectionLabel: "3.6 this Keyword",
  sectionAriaLabel: "3.6 this Keyword",
};

export const sections = [
  functions,
  scope,
  parametersInvocation,
  lexicalClosures,
  higherOrderFunctions,
  thisKeyword,
  resources,
];
