import {
  formatDate,
  formatIsoStringToMMDDYY,
  getUTCTime,
  returnDate,
  formatDatePart,
  makeIsoString,
  isValidISODate,
  boundDates,
  leadingZeros,
  setLocalISO,
} from "app/helpers";

/*==============formatDate=====================*/
describe("formatDate function", () => {
  const date = "2024-05-30T12:00:00Z";
  const badDate = "badDate";

  describe("Valid Input", () => {
    test("for Format 'date'", () => {
      const format = "date";
      const expectedOutput = 30;
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });
    test(" for Format 'year'", () => {
      const format = "year";
      const expectedOutput = 2024;
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });

    test(" for Format 'month'", () => {
      const format = "month";
      const expectedOutput = "May";
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });

    test("for Format 'daysOfWeekCondensed'", () => {
      const format = "daysOfWeekCondensed";
      const expectedOutput = "THU";
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });

    test("for Format 'dayOfWeek'", () => {
      const format = "dayOfWeek";
      const expectedOutput = "Thursday";
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });
  });
  describe("Invalid Input", () => {
    test("for Invalid Format", () => {
      const format = "invalidFormat";
      const expectedOutput = null;
      expect(formatDate(date, format)).toEqual(expectedOutput);
    });

    test("for Invalid Date Input", () => {
      const format = "date";
      const expectedOutput = NaN;
      expect(formatDate(badDate, format)).toEqual(expectedOutput);
    });
  });
});

/*==============formatIsoStringToMMDDYY=====================*/
describe("formatIsoStringToMMDDYY function", () => {
  test("for valid date input", () => {
    const isoString = "2024-05-30T12:00:00Z";
    const expectedOutput = "05/30/24";
    expect(formatIsoStringToMMDDYY(isoString)).toEqual(expectedOutput);
  });
  test("for invalid date input", () => {
    const isoString = "badString";
    const expectedOutput = "NaN/NaN/aN";
    expect(formatIsoStringToMMDDYY(isoString)).toEqual(expectedOutput);
  }); //Need to review this
});

/*==============getUTCTime=====================*/
describe("getUTCTime function", () => {
  test("for 24-Hour Format", () => {
    const isoString = "2024-05-30T12:00:00Z";
    const expectedOutput = "12:00";
    expect(getUTCTime(isoString)).toEqual(expectedOutput);
  });

  test("for 12-Hour Format [AM]", () => {
    const isoString = "2024-05-30T08:30:45Z";
    const expectedOutput = "08:30 AM";
    expect(getUTCTime(isoString, true)).toEqual(expectedOutput);
  });

  test(" for 12-Hour Format [PM]", () => {
    const isoString = "2024-05-30T18:00:00Z";
    const expectedOutput = "06:00 PM";
    expect(getUTCTime(isoString, true)).toEqual(expectedOutput);
  });

  test("for 12-Hour Format [Midnight]", () => {
    const isoString = "2024-05-30T00:00:00Z";
    const expectedOutput = "12:00 AM";
    expect(getUTCTime(isoString, true)).toEqual(expectedOutput);
  });

  test("for 12-Hour Format [Noon]", () => {
    const isoString = "2024-05-30T12:00:00Z";
    const expectedOutput = "12:00 PM";
    expect(getUTCTime(isoString, true)).toEqual(expectedOutput);
  });
});
/*==============isValidISODate=====================*/
describe("isValidISO", () => {
  describe("for valid input", () => {
    test("for valid ISO 8601 date string", () => {
      const dateString = "2024-05-30T12:00:00Z";
      const expectedOutput = true;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
    test("for valid ISO 8601 date string with fractional seconds", () => {
      const dateString = "2024-05-30T12:00:00.123Z";
      const expectedOutput = true;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
    test("for valid ISO 8601 date string with timezone offset", () => {
      const dateString = "2024-05-30T12:00:00+02:00";
      const expectedOutput = true;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
  });
  describe("for invalid input", () => {
    test("returns false for invalid ISO 8601 date string", () => {
      const dateString = "2024-05-30 12:00:00";
      const expectedOutput = false;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
    test("for incomplete ISO 8601 date string", () => {
      const dateString = "2024-05-30T12:00";
      const expectedOutput = false;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
    test("for random string", () => {
      const dateString = "randomString";
      const expectedOutput = false;
      expect(isValidISODate(dateString)).toEqual(expectedOutput);
    });
  });
});
/*==============boundDates=====================*/
describe("boundDates function", () => {
  test("when within range", () => {
    const currentDate = new Date();
    const dateValue = new Date(currentDate);
    const validMinimum = 10;
    const validMaximum = 10;

    const expectedOutput = dateValue.toISOString();
    expect(boundDates(dateValue, validMinimum, validMaximum)).toEqual(
      expectedOutput
    );
  });
});

/*==============returnDate=====================*/
describe("returnDate function", () => {
  test("for YYYY-MM-DD", () => {
    const date = "2024-05-30";
    const expectedOutout = "05/30/2024";
    expect(returnDate(date)).toEqual(expectedOutout);
  });

  test("for YYYY/MM/DD", () => {
    const date = "2025/09/01";
    const expectedOutput = "09/01/2025";
    expect(returnDate(date)).toEqual(expectedOutput);
  });

  test.skip("for null Input", () => {
    const date = null; //or undefined
    expect(returnDate(date)).toBeNull();
  }); //Not handled

  test.skip("for MM/DD/YYYY", () => {
    const date = "09/01/2025";
    const expectedOutput = "/2/25/09/0";
    expect(returnDate(date)).toEqual(expectedOutput);
  }); //Prob need to handle such case : Not a valid date

  test.skip("for invalid", () => {
    const date = "123d";
    const expectedOutput = "//123d";
    expect(returnDate(date)).toEqual(expectedOutput);
  }); //Prob need to handle such case : Not a valid date
});

/*==============formatDatePart====================*/
describe("formatDatePart function", () => {
  test("for input as Date Only", () => {
    const date = "2024-05-30";
    const expectedOutput = new Date("2024-05-30T16:00:00Z");
    expect(formatDatePart(date)).toEqual(expectedOutput);
  });

  test("for Date and Time", () => {
    const date = "2024-05-30";
    const time = "02:30:45";
    const expectedOutput = new Date("2024-01-01T02:30:45.000Z");
    // const expectedOutput = new Date("2024-05-30T02:30:45.000Z");
    expect(formatDatePart(date, time)).toEqual(expectedOutput);
  }); //Needs Review

  test("Different date format", () => {
    const date = "2025/09/01";
    const time = "10:00:00";
    const expectedOutput = new Date("2025-01-01T10:00:00.000Z");
    //const expectedOutput = new Date("2025-09-01T10:00:00.000Z");
    expect(formatDatePart(date, time)).toEqual(expectedOutput);
  }); //Needs Review

  test("for time Only", () => {
    const date = " ";
    const time = "10:00:00";
    const expectedOutput = new Date("2001-01-01T10:00:00.000Z");
    expect(formatDatePart(date, time)).toEqual(expectedOutput);
  }); //Needs Review

  test.skip("for null ", () => {
    const date = null;
    const time = null;
    expect(formatDatePart(date, time)).toBeNull();
  }); //Needs Review
});

/*==============makeIsoString=====================*/
describe("makeIsoString function", () => {
  describe("Valid Input", () => {
    test("for 24-hour format", () => {
      const hours = "14";
      const minutes = "30";
      const AMorPM = "";
      const twelvehr = false;
      const expectedOutput = "2022-02-01T14:30:00.000Z";
      expect(makeIsoString(hours, minutes, AMorPM, twelvehr)).toEqual(
        expectedOutput
      );
    });

    test("for 12-hour format [AM]", () => {
      const hours = "10";
      const minutes = "15";
      const AMorPM = "AM";
      const twelvehr = true;
      const expectedOutput = "2022-02-01T10:15:00.000Z";
      expect(makeIsoString(hours, minutes, AMorPM, twelvehr)).toEqual(
        expectedOutput
      );
    });

    test("for 12-hour format [PM]", () => {
      const hours = "8";
      const minutes = "45";
      const AMorPM = "PM";
      const twelvehr = true;
      const expectedOutput = "2022-02-01T20:45:00.000Z";
      expect(makeIsoString(hours, minutes, AMorPM, twelvehr)).toEqual(
        expectedOutput
      );
    });
    test("for 12-hour format [midnight]", () => {
      const hours = "12";
      const minutes = "00";
      const AMorPM = "AM";
      const twelvehr = true;
      const expectedOutput = "2022-02-01T00:00:00.000Z";
      expect(makeIsoString(hours, minutes, AMorPM, twelvehr)).toEqual(
        expectedOutput
      );
    });
  });

  describe("Invalid Input", () => {
    test("for Invalid input", () => {
      const hours = "";
      const minutes = "";
      const AMorPM = "";
      const twelvehr = false;
      expect(makeIsoString(hours, minutes, AMorPM, twelvehr)).toBeNull();
    });
  });
});

/*==============leadingZeros=====================*/
describe("leadingZeros", () => {
  describe("Single Digit Input", () => {
    test("for the single-digit hours", () => {
      const setHours = jest.fn();
      const setMinutes = jest.fn();
      const event = { target: { value: "9", className: "hours" } };
      leadingZeros(event, setHours, setMinutes);
      expect(setHours).toHaveBeenCalledWith("09");
    });
    test("for the single-digit minutes", () => {
      const setHours = jest.fn();
      const setMinutes = jest.fn();
      const event = { target: { value: "7", className: "minutes" } };
      leadingZeros(event, setHours, setMinutes);
      expect(setMinutes).toHaveBeenCalledWith("07");
    });
  });
  describe("Double Digit input", () => {
    test("for the double-digit hours", () => {
      const setHours = jest.fn();
      const setMinutes = jest.fn();
      const event = { target: { value: "12", className: "hours" } };
      leadingZeros(event, setHours, setMinutes);
      expect(setHours).toHaveBeenCalledWith("12");
    });

    test("for the double-digit minutes", () => {
      const setHours = jest.fn();
      const setMinutes = jest.fn();
      const event = { target: { value: "45", className: "minutes" } };
      leadingZeros(event, setHours, setMinutes);
      expect(setMinutes).toHaveBeenCalledWith("45");
    });
  });
});
