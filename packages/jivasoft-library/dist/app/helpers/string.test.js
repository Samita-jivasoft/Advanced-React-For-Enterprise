"use strict";

var _helpers = require("app/helpers");
/*==============formatToSentenceCase=====================*/
describe("formatToSentenceCase", () => {
  describe("Valid Input", () => {
    test("for special characters", () => {
      expect((0, _helpers.formatToSentenceCase)("welcome!")).toBe("Welcome!");
    });
  });
  describe("Handling Invalid Input", () => {
    test("for an null input", () => {
      expect((0, _helpers.formatToSentenceCase)(null)).toBe("");
    });
    test("for an undefined input", () => {
      expect((0, _helpers.formatToSentenceCase)(undefined)).toBe("");
    });
    test("for a non-string input", () => {
      expect((0, _helpers.formatToSentenceCase)(123)).toBe("");
    });
  });
  describe("Edge case Handling", () => {
    test("for an empty input", () => {
      expect((0, _helpers.formatToSentenceCase)("")).toBe("");
    });
    test("for multiple words", () => {
      expect((0, _helpers.formatToSentenceCase)("this is a test")).toBe("This is a test.");
    });
  });
  describe("Return Type Verification", () => {
    test("formatToSentenceCase should return a string for invalid input", () => {
      expect(typeof (0, _helpers.formatToSentenceCase)(null)).toBe("string");
      expect(typeof (0, _helpers.formatToSentenceCase)("Welcome!")).toBe("string");
    });
  });
});
/*==============capitalize===============================*/
describe("capitalize", () => {
  describe("Valid Input", () => {
    test("for the special characters", () => {
      expect((0, _helpers.capitalize)("test, Test!")).toBe("Test, Test!");
    });
    test("for a single string", () => {
      expect((0, _helpers.capitalize)("test")).toBe("Test");
    });
    test("for an already capitalized string", () => {
      expect((0, _helpers.capitalize)("Test")).toBe("Test");
    });
  });
  describe("Handling Invalid Input", () => {
    test("for the null characters", () => {
      expect((0, _helpers.capitalize)(null)).toBe("");
    });
    test("for non-string characters", () => {
      expect((0, _helpers.capitalize)(123)).toBe("");
    });
  });
  describe("Edge Case Handling", () => {
    test("for an empty input", () => {
      expect((0, _helpers.capitalize)("")).toBe("");
    });
    test("for multiple word input", () => {
      expect((0, _helpers.capitalize)("welcome to extra duty")).toBe("Welcome to extra duty");
    });
  });
  describe("Error Handling", () => {
    test("for undefined input", () => {
      expect((0, _helpers.capitalize)(undefined)).toBe("");
    });
  });
  describe("Return Type Verification", () => {
    test("capitalize should return a string for invalid input", () => {
      expect(typeof (0, _helpers.capitalize)(null)).toBe("string");
      expect(typeof (0, _helpers.capitalize)("Testing")).toBe("string");
    });
  });
});

/*==============getIconInitials==========================*/
describe("getIconInitials", () => {
  describe("Valid Input", () => {
    test("for special characters", () => {
      expect((0, _helpers.getIconInitials)("John, Doe")).toBe("JD");
    });
    test("for single-letter names", () => {
      expect((0, _helpers.getIconInitials)("A B")).toBe("AB");
    });
  });
  describe("Handling Invalid Input", () => {
    test("for null inout", () => {
      expect((0, _helpers.getIconInitials)(null)).toBe("");
    });
  });
  describe("Edge Case Handling ", () => {
    test("for an empty input", () => {
      expect((0, _helpers.getIconInitials)("")).toBe("");
    });
    test("for a single word", () => {
      expect((0, _helpers.getIconInitials)("John")).toBe("  J  ");
    });
    test("for multiple words", () => {
      expect((0, _helpers.getIconInitials)("John Doe Doe")).toBe("JD");
    });
  });
  describe("Error Handling", () => {
    test("for undefined inout", () => {
      expect((0, _helpers.getIconInitials)(undefined)).toBe("");
    });
  });
  describe("Return Type Verification", () => {
    test("getIconInitials should return a string for invalid input", () => {
      expect(typeof (0, _helpers.getIconInitials)("tesing")).toBe("string");
      expect(typeof (0, _helpers.getIconInitials)(undefined)).toBe("string");
    });
  });
});