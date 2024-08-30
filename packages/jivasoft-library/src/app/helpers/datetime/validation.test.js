import { isValidISODate, validateDates, isValidPart } from "app/helpers";

/*==============validateDates=====================*/
describe("validateDates function", () => {
  describe("Valid Input", () => {
    test("for no missing times", () => {
      const array = [
        { starttime: "2024-05-30T08:00:00", endtime: "2024-05-30T12:00:00" },
        { starttime: "2024-05-31T10:00:00", endtime: "2024-05-31T14:00:00" },
      ];
      const expectedOutput = false;
      expect(validateDates(array)).toBe(expectedOutput);
    });

    test("for missing start time", () => {
      const array = [
        { starttime: "2024-05-30T08:00:00", endtime: "2024-05-30T12:00:00" },
        { endtime: "2024-05-31T14:00:00" },
      ];
      const expectedOutput = "Enter start and end times for the selected dates";
      expect(validateDates(array)).toBe(expectedOutput);
    });

    test("for Missing end time", () => {
      const array = [
        { starttime: "2024-05-30T08:00:00" },
        { starttime: "2024-05-31T10:00:00", endtime: "2024-05-31T14:00:00" },
      ];
      const expectedOutput = "Enter start and end times for the selected dates";
      expect(validateDates(array)).toBe(expectedOutput);
    });

    test("for missing start and end time", () => {
      const array = [
        { starttime: "2024-05-30T08:00:00" },
        { endtime: "2024-05-31T14:00:00" },
      ];
      const expectedOutput = "Enter start and end times for the selected dates";
      expect(validateDates(array)).toBe(expectedOutput);
    });
  });

  describe("Invalid Input", () => {
    test("for empty array", () => {
      const array = [];
      const expectedOutput = false;
      expect(validateDates(array)).toBe(expectedOutput);
    });
    test("for invalid input", () => {
      const invalidInput = [
        { startime: "2024-05-30T08:00:00", endtime: "2024-05-30T12:00:00" }, // Misspelled "starttime"
        { starttime: "2024-05-31T10:00:00", endtime: "2024-05-31T14:00:00" },
      ];
      const expectedOutput = "Enter start and end times for the selected dates";
      expect(validateDates(invalidInput)).toBe(expectedOutput);
    });
  });

  describe("Error handling", () => {
    test("for invalid input", () => {
      const invalidInput = [
        { starttime: "2024-05-30T08:00:00", endtime: "2024-05-30T12:00:00" },
        { starttime: "2024-05-31T10:00:00" }, //  endtime is missing
        { endtime: "2024-05-31T14:00:00" }, // starttime is missing
        { starttime: "2024-05-30T08:00:00" }, // endtime is missing
      ];

      expect(() => {
        validateDates(invalidInput);
      }).not.toThrow();
    });
  });
});

/*==============isValidPart=====================*/
describe("isValidPart function", () => {
  describe("Valid input", () => {
    test("for Valid month and day", () => {
      const validDate = "05/30";
      expect(isValidPart(validDate)).toBeTruthy();
    });
    test("for Leap year", () => {
      const leapYear = "02/29";
      expect(isValidPart(leapYear)).toBeTruthy();
    });
    test("for Feb with 30 days", () => {
      const badFeb = "02/30";
      expect(isValidPart(badFeb)).toBeFalsy();
    });
  });
  describe("Invalid Input", () => {
    test("for Invalid month", () => {
      const invalidMonth = "23/12";
      expect(isValidPart(invalidMonth)).toBeFalsy();
    });

    test("for Invalid day", () => {
      const invalidDay = "04/36";
      expect(isValidPart(invalidDay)).toBeFalsy();
    });

    test("for Invalid Format", () => {
      const invalidFormat = "5/2";
      expect(isValidPart(invalidFormat)).toBeFalsy();
    });
  });
});
