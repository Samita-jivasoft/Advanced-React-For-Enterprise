"use strict";

var _helpers = require("app/helpers");
/*==============isObject=====================*/
describe("IsObject Function", () => {
  describe("Valid Input", () => {
    test("for a valid object", () => {
      const validObject = {
        workflows: "Schedule a details",
        friendlyname: "Detail Schedule"
      };
      expect((0, _helpers.isObject)(validObject)).toBeTruthy();
    });
    test(" for numbers value", () => {
      const objectWithNumberValue = {
        number: 123
      };
      expect((0, _helpers.isObject)(objectWithNumberValue)).toBeTruthy();
    });
    test("for Objects with Functions", () => {
      const objectWithFunction = {
        functionF1: () => {}
      };
      expect((0, _helpers.isObject)(objectWithFunction)).toBeTruthy();
    });
  });
  describe("Invalid Inputs", () => {
    test("for Arrays", () => {
      const arrayObject = ["item1", "item2"];
      expect((0, _helpers.isObject)(arrayObject)).toBeFalsy();
    });
    test("for Strings", () => {
      const stringObject = "string";
      expect((0, _helpers.isObject)(stringObject)).toBeFalsy();
    });
    test("for Numbers", () => {
      const numberObject = 123;
      expect((0, _helpers.isObject)(numberObject)).toBeFalsy();
    });
    test("for Booleans", () => {
      const booleanObject = true;
      expect((0, _helpers.isObject)(booleanObject)).toBeFalsy();
    });
    test(" for null object", () => {
      const obj = null;
      expect((0, _helpers.isObject)(obj)).toBeFalsy();
    });
    test(" for closing quotes misplacement", () => {
      const objectWithMisplacement = '{ workflow: "Payment" }';
      expect((0, _helpers.isObject)(objectWithMisplacement)).toBeFalsy();
    });
  });
  describe("Edge Case Handling", () => {
    test("for empty object", () => {
      const emptyObject = {};
      expect((0, _helpers.isObject)(emptyObject)).toBeTruthy();
    });
    test("for Nested Objects", () => {
      const nestedObject = {
        key1: {
          key2: "value"
        }
      };
      expect((0, _helpers.isObject)(nestedObject)).toBeTruthy();
    });
  });
  describe("Error Handling", () => {
    test(" for undefined object", () => {
      const undefinedObject = undefined;
      expect((0, _helpers.isObject)(undefinedObject)).toBeFalsy();
    });
  });
  describe("Return Type Verification", () => {
    test("for return type verification", () => {
      const input = '{ "key": "value" }';
      const result = (0, _helpers.isObject)(input);
      expect(typeof result).toBe("boolean");
    });
  });
});

/*==============isJSON=====================*/
describe("isJSON function", () => {
  describe("Valid Input", () => {
    test("for a valid Json", () => {
      const validJSon = '{ "workflows": "Schedule a details", "friendlyname": "Detail Schedule"}';
      expect((0, _helpers.isJsonString)(validJSon)).toBe("true");
    });
    test("for null JSon", () => {
      const nullJson = null;
      expect((0, _helpers.isJsonString)(nullJson)).toBe("true");
    });
  });
  describe("Invalid JSOn", () => {
    test("for an invalid Json", () => {
      const invalidJson = '{key: "value"}';
      expect((0, _helpers.isJsonString)(invalidJson)).toBe("false");
    });
    test(" for commented JSOn", () => {
      const commentedJson = '{"workflows": "Schedule a details" /* This is schedule a details */, "friendlyname": "Detail Schedule"}';
      expect((0, _helpers.isJsonString)(commentedJson)).toBe("false");
    });
  });
  describe("Return Type Verification", () => {
    test(" for Return Type", () => {
      const invalidJson = '{ key: "value" }';
      const result = (0, _helpers.isJsonString)(invalidJson);
      expect(typeof result).toBe("string");
    });
  });
});