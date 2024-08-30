import { generateUUID } from "app/helpers";

describe("generateUUID Test", () => {
  describe("Edge case Handling", () => {
    test("for exactly 36 characters", () => {
      const numberOfUUIDs = 10000;
      let failed = false;
      for (let i = 0; i < numberOfUUIDs; i++) {
        const uuid = generateUUID();
        if (uuid.length !== 36) {
          failed = true;
          break;
        }
      }
      expect(failed).toBeFalsy;
    });
  });
  describe("Boundary Conditions", () => {
    test("Uniqueness Test", () => {
      const uuids = [];
      const numberOfUUIDs = 10000;
      for (let i = 0; i < numberOfUUIDs; i++) {
        const uuid = generateUUID();
        expect(uuids.includes(uuid)).toBe(false);
        uuids.push(uuid);
      }
    });
    test("for hyphen placement", () => {
      const uuid = generateUUID();
      expect(uuid[8]).toBe("-");
      expect(uuid[13]).toBe("-");
      expect(uuid[18]).toBe("-");
      expect(uuid[23]).toBe("-");
    });
    test("for format", () => {
      const uuid = generateUUID();
      const regex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      expect(regex.test(uuid)).toBeTruthy;
    });
  });

  describe("Return Type Verification", () => {
    test("Check for String", () => {
      expect(typeof generateUUID()).toBe("string");
      expect(typeof generateUUID()).toBe("string");
      expect(typeof generateUUID()).toBe("string");
      expect(typeof generateUUID()).toBe("string");
    });
  });
});
