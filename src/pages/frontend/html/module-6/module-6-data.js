import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("form-structure", "6.1 Form Structure", [
    subSection("form-basics", "Form Basics", [
      topic("form-element", "<form>"),
      topic("action-method", "action and method"),
      topic("name-value-pairs", "How form data is structured"),
    ]),
    subSection("labels", "Labels", [
      topic("label-element", "<label>"),
      topic("for-and-id", "for and id"),
      topic("grouping-controls", "Grouping related controls"),
    ]),
  ]),
  section("common-form-controls", "6.2 Common Form Controls", [
    subSection("text-based-inputs", "Text-Based Inputs", [
      topic("text-email-password", "text, email, password"),
      topic("number-search", "number and search"),
      topic("placeholder-autocomplete", "placeholder and autocomplete"),
    ]),
    subSection("choice-and-selection", "Choice & Selection", [
      topic("radio-checkbox", "radio and checkbox"),
      topic("select-option", "<select> and <option>"),
      topic("textarea-file", "<textarea> and file inputs"),
    ]),
  ]),
  section("validation-attributes", "6.3 Validation & Attributes", [
    subSection("validation-basics", "Validation Basics", [
      topic("required", "required"),
      topic("min-max-step", "min, max, and step"),
      topic("minlength-maxlength-pattern", "minlength, maxlength, and pattern"),
    ]),
    subSection("control-states", "Control States", [
      topic("disabled-readonly", "disabled and readonly"),
      topic("checked-selected", "checked and selected"),
      topic("multiple-accept", "multiple and accept"),
    ]),
  ]),
  section("submission-grouping", "6.4 Submission & Grouping", [
    subSection("submission", "Submission", [
      topic("button-types", "Button types"),
      topic("get-vs-post", "GET vs POST"),
      topic("multipart-encoding", "multipart/form-data"),
    ]),
    subSection("grouping", "Grouping", [
      topic("fieldset", "<fieldset>"),
      topic("legend", "<legend>"),
      topic("building-a-complete-form", "Building a complete form"),
    ]),
  ]),
];
