import { formatToSentenceCase, capitalize, getIconInitials } from "app/helpers";

/*==============formatToSentenceCase=====================*/
describe("formatToSentenceCase", () => {
  describe("Valid Input", () => {
    test("for special characters", () => {
      expect(formatToSentenceCase("welcome!")).toBe("Welcome!");
    });
  });
  describe("Handling Invalid Input", () => {
    test("for an null input", () => {
      expect(formatToSentenceCase(null)).toBe("");
    });

    test("for an undefined input", () => {
      expect(formatToSentenceCase(undefined)).toBe("");
    });

    test("for a non-string input", () => {
      expect(formatToSentenceCase(123)).toBe("");
    });
  });

  describe("Edge case Handling", () => {
    test("for an empty input", () => {
      expect(formatToSentenceCase("")).toBe("");
    });

    test("for multiple words", () => {
      expect(formatToSentenceCase("this is a test")).toBe("This is a test.");
    });
  });
  describe("Return Type Verification", () => {
    test("formatToSentenceCase should return a string for invalid input", () => {
      expect(typeof formatToSentenceCase(null)).toBe("string");
      expect(typeof formatToSentenceCase("Welcome!")).toBe("string");
    });
  });
});
/*==============capitalize===============================*/
describe("capitalize", () => {
  describe("Valid Input", () => {
    test("for the special characters", () => {
      expect(capitalize("test, Test!")).toBe("Test, Test!");
    });
    test("for a single string", () => {
      expect(capitalize("test")).toBe("Test");
    });
    test("for an already capitalized string", () => {
      expect(capitalize("Test")).toBe("Test");
    });
  });
  describe("Handling Invalid Input", () => {
    test("for the null characters", () => {
      expect(capitalize(null)).toBe("");
    });
    test("for non-string characters", () => {
      expect(capitalize(123)).toBe("");
    });
  });
  describe("Edge Case Handling", () => {
    test("for an empty input", () => {
      expect(capitalize("")).toBe("");
    });
    test("for multiple word input", () => {
      expect(capitalize("welcome to extra duty")).toBe("Welcome to extra duty");
    });
  });

  describe("Error Handling", () => {
    test("for undefined input", () => {
      expect(capitalize(undefined)).toBe("");
    });
  });

  describe("Return Type Verification", () => {
    test("capitalize should return a string for invalid input", () => {
      expect(typeof capitalize(null)).toBe("string");
      expect(typeof capitalize("Testing")).toBe("string");
    });
  });
});

/*==============getIconInitials==========================*/
describe("getIconInitials", () => {
  describe("Valid Input", () => {
    test("for special characters", () => {
      expect(getIconInitials("John, Doe")).toBe("JD");
    });

    test("for single-letter names", () => {
      expect(getIconInitials("A B")).toBe("AB");
    });
  });

  describe("Handling Invalid Input", () => {
    test("for null inout", () => {
      expect(getIconInitials(null)).toBe("");
    });
  });
  describe("Edge Case Handling ", () => {
    test("for an empty input", () => {
      expect(getIconInitials("")).toBe("");
    });
    test("for a single word", () => {
      expect(getIconInitials("John")).toBe("  J  ");
    });

    test("for multiple words", () => {
      expect(getIconInitials("John Doe Doe")).toBe("JD");
    });
  });
  describe("Error Handling", () => {
    test("for undefined inout", () => {
      expect(getIconInitials(undefined)).toBe("");
    });
  });
  describe("Return Type Verification", () => {
    test("getIconInitials should return a string for invalid input", () => {
      expect(typeof getIconInitials("tesing")).toBe("string");
      expect(typeof getIconInitials(undefined)).toBe("string");
    });
  });
});
