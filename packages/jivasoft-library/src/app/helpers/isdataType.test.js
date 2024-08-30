import { isObject, isJsonString } from "app/helpers";
/*==============isObject=====================*/
describe("IsObject Function", () => {
  describe("Valid Input", () => {
    test("for a valid object", () => {
      const validObject = {
        workflows: "Schedule a details",
        friendlyname: "Detail Schedule",
      };
      expect(isObject(validObject)).toBeTruthy();
    });
    test(" for numbers value", () => {
      const objectWithNumberValue = { number: 123 };
      expect(isObject(objectWithNumberValue)).toBeTruthy();
    });
    test("for Objects with Functions", () => {
      const objectWithFunction = { functionF1: () => {} };
      expect(isObject(objectWithFunction)).toBeTruthy();
    });
  });

  describe("Invalid Inputs", () => {
    test("for Arrays", () => {
      const arrayObject = ["item1", "item2"];
      expect(isObject(arrayObject)).toBeFalsy();
    });

    test("for Strings", () => {
      const stringObject = "string";
      expect(isObject(stringObject)).toBeFalsy();
    });

    test("for Numbers", () => {
      const numberObject = 123;
      expect(isObject(numberObject)).toBeFalsy();
    });

    test("for Booleans", () => {
      const booleanObject = true;
      expect(isObject(booleanObject)).toBeFalsy();
    });
    test(" for null object", () => {
      const obj = null;
      expect(isObject(obj)).toBeFalsy();
    });

    test(" for closing quotes misplacement", () => {
      const objectWithMisplacement = '{ workflow: "Payment" }';
      expect(isObject(objectWithMisplacement)).toBeFalsy();
    });
  });

  describe("Edge Case Handling", () => {
    test("for empty object", () => {
      const emptyObject = {};
      expect(isObject(emptyObject)).toBeTruthy();
    });
    test("for Nested Objects", () => {
      const nestedObject = { key1: { key2: "value" } };
      expect(isObject(nestedObject)).toBeTruthy();
    });
  });
  describe("Error Handling", () => {
    test(" for undefined object", () => {
      const undefinedObject = undefined;
      expect(isObject(undefinedObject)).toBeFalsy();
    });
  });
  describe("Return Type Verification", () => {
    test("for return type verification", () => {
      const input = '{ "key": "value" }';
      const result = isObject(input);
      expect(typeof result).toBe("boolean");
    });
  });
});

/*==============isJSON=====================*/
describe("isJSON function", () => {
  describe("Valid Input", () => {
    test("for a valid Json", () => {
      const validJSon =
        '{ "workflows": "Schedule a details", "friendlyname": "Detail Schedule"}';
      expect(isJsonString(validJSon)).toBe("true");
    });

    test("for null JSon", () => {
      const nullJson = null;
      expect(isJsonString(nullJson)).toBe("true");
    });
  });

  describe("Invalid JSOn", () => {
    test("for an invalid Json", () => {
      const invalidJson = '{key: "value"}';
      expect(isJsonString(invalidJson)).toBe("false");
    });

    test(" for commented JSOn", () => {
      const commentedJson =
        '{"workflows": "Schedule a details" /* This is schedule a details */, "friendlyname": "Detail Schedule"}';
      expect(isJsonString(commentedJson)).toBe("false");
    });
  });

  describe("Return Type Verification", () => {
    test(" for Return Type", () => {
      const invalidJson = '{ key: "value" }';
      const result = isJsonString(invalidJson);
      expect(typeof result).toBe("string");
    });
  });
});
