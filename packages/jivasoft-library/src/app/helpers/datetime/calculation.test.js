import {
  extractMonthYear,
  isToday,
  findEarliestDate,
  findLatestDate,
  getDisplayTime,
  fillDates,
  getMinDays,
} from "app/helpers";

/*==============extractMonthYear=====================*/
describe("extractMonthYear function", () => {
  describe("Valid Inputs", () => {
    test("for Valid Date String input", () => {
      expect(extractMonthYear("2023-12-31")).toEqual({ month: 11, year: 2023 });
      expect(extractMonthYear("December 31, 1975")).toEqual({
        month: 11,
        year: 1975,
      });
      expect(extractMonthYear("2020-02-29")).toEqual({ month: 1, year: 2020 }); //Leap year
    });
    test("for Date String input resulting rollover ", () => {
      expect(extractMonthYear("2022-2-31")).toEqual({ month: 2, year: 2022 }); // rolled over to march
    });
    test("for Null Date String imput", () => {
      expect(extractMonthYear(null)).toEqual({ month: 0, year: 1970 });
    });
  });

  describe("Invalid Inputs", () => {
    test("for Empty Date String imput", () => {
      expect(extractMonthYear("")).toEqual({ month: NaN, year: NaN });
    });
    test("for Invalid date format", () => {
      expect(extractMonthYear("30-12-1996")).toEqual({ month: NaN, year: NaN });
    });
  });
});

/*==============isToday==============================*/
describe("isToday function", () => {
  test("for same date as current date [today]", () => {
    const today = new Date();
    expect(isToday(today)).toBeTruthy();
  });
  test("for different date as current date [other than today]", () => {
    const otherDay = new Date(2022, 4, 5);
    expect(isToday(otherDay)).toBeFalsy();
  });
});

/*==============findEarliestDate & findLatestDate=====================*/
describe("findEarliestDate function", () => {
  describe("Valid Inputs", () => {
    test("for only one date onject", () => {
      const date = [{ date: "2022-05-25T12:00:00Z" }];
      expect(findEarliestDate(date)).toEqual("2022-05-25T12:00:00.000Z");
      expect(findLatestDate(date)).toEqual("2022-05-25T12:00:00.000Z");
    });
    test("for Multiple date onject", () => {
      const date = [
        { date: "2022-05-25T12:00:00Z" },
        { date: "2022-05-30T12:00:00Z" },
        { date: "2022-05-09T12:00:00Z" },
        { date: "2022-05-28T12:00:00Z" },
      ];
      expect(findEarliestDate(date)).toEqual("2022-05-09T12:00:00.000Z");
      expect(findLatestDate(date)).toEqual("2022-05-30T12:00:00.000Z");
    });
  });

  describe("Invalid Inputs", () => {
    test("for Empty input array", () => {
      const resultEarliest = findEarliestDate([]);
      const resultLatest = findLatestDate([]);
      expect(resultEarliest).toBeNull();
      expect(resultLatest).toBeNull();
    });
    test("for array with mix of valid and  invalid date strings", () => {
      const data = [
        { date: "2022-05-30" },
        { date: "badDate" },
        { date: "2022-05-28" },
      ];
      const resultEarliest = findEarliestDate(data);
      const resultLatest = findLatestDate(data);
      expect(resultEarliest).toEqual("2022-05-28T00:00:00.000Z");
      expect(resultLatest).toEqual("2022-05-30T00:00:00.000Z");
    });

    test("for array with all invalid date strings", () => {
      const data = [{ date: "24" }, { date: "badDate" }, { date: "$$date" }];
      const result = () => {
        findEarliestDate(data);
      };
      expect(result).toThrow();
    });
  });
});

/*==============getDisplayTime=====================*/
describe("getDisplayTime function", () => {
  describe("Valid Input", () => {
    test("for date value with time component", () => {
      const value = "2022-05-30T06:00:00Z";
      const masktype = "date";
      const datatype = "date";
      expect(getDisplayTime(value, masktype, datatype)).toBe("06:00");
    });
    test("for date value without time component", () => {
      const value = "2022-05-30";
      const masktype = "date";
      const datatype = "date";
      expect(getDisplayTime(value, masktype, datatype)).toBe("24:00");
    });
    test("for time value", () => {
      const value = "12:00:00";
      const masktype = "time";
      const datatype = "time";
      expect(getDisplayTime(value, masktype, datatype)).toBe("Invalid Date");
    });
    test("for date value with time component and 24-hour format", () => {
      const value = "2022-05-30T00:00:00Z";
      const masktype = "date";
      const datatype = "date";
      expect(getDisplayTime(value, masktype, datatype)).toBe("24:00");
    });
  });
});

/*==============fillDates=====================*/
describe("fillDates function", () => {
  describe("Valid Input", () => {
    test("for valid Start and End dates with timePerDate", () => {
      const isoStart = "2024-05-01T00:00:00Z";
      const isoEnd = "2024-05-05T00:00:00Z";
      const timePerDate = {
        starttime: "09:00",
        endtime: "17:00",
      };
      const result = fillDates(isoStart, isoEnd, timePerDate);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(5);
      expect(result[0]).toEqual({
        date: expect.any(String),
        startdate: expect.any(String),
        enddate: expect.any(String),
        starttime: "09:00",
        endtime: "17:00",
      });
      expect(result[0].date).toBe(result[0].startdate);
      expect(result[0].date).toBe(result[0].enddate);
    });
    test("for valid Start and no end dates with timePerDate", () => {
      const isoStart = "2024-05-01T00:00:00Z";
      const isoEnd = null;
      const timePerDate = {
        starttime: "09:00",
        endtime: "17:00",
      };
      const result = fillDates(isoStart, isoEnd, timePerDate);
      expect(Array.isArray(result)).toBeTruthy();
      console.log(result);
      expect(result.length).toBe(1);
      expect(result[0]).toEqual({
        date: expect.any(String),
        startdate: expect.any(String),
        enddate: expect.any(String),
        starttime: "09:00",
        endtime: "17:00",
      });
      expect(result[0].date).toBe(result[0].startdate);
      expect(result[0].date).toBe(result[0].enddate);
    });

    test("for valid Start and Valid end dates with No timePerDate", () => {
      const isoStart = "2024-05-01T00:00:00Z";
      const isoEnd = null;
      const timePerDate = {
        starttime: null,
        endtime: null,
      };
      const result = fillDates(isoStart, isoEnd, timePerDate);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(1);
      expect(result[0]).toEqual({
        date: expect.any(String),
        startdate: expect.any(String),
        enddate: expect.any(String),
        starttime: null,
        endtime: null,
      });
      expect(result[0].date).toBe(result[0].startdate);
      expect(result[0].date).toBe(result[0].enddate);
    });
  });

  describe("Invalid Input", () => {
    //   test("for No Start and valid end dates with timePerDate", () => {
    //     const isoStart = null;
    //     const isoEnd = "2024-05-01T00:00:00Z";
    //     const timePerDate = {
    //       starttime: "09:00",
    //       endtime: "17:00",
    //     };
    //     const result = fillDates(isoStart, isoEnd, timePerDate);
    //     expect(Array.isArray(result)).toBeTruthy();
    //     expect(result.length).toBe(19846); //It is representing  since the Unix epoch, probably need to handle this

    //   });

    test("for invalid start dates", () => {
      const isoStart = "badDate";
      const isoEnd = "2024-05-05T00:00:00Z";
      const timePerDate = {
        starttime: "09:00",
        endtime: "17:00",
      };
      expect(() => fillDates(isoStart, isoEnd, timePerDate)).toThrow();
    });
  });
});

/*==============getMinDays=====================*/
describe("getMinDays function", () => {
  describe("Valid Input", () => {
    test("for basic Functionality", () => {
      const today = new Date();
      // today.setHours(0, 0, 0, 0);
      // console.log(today)
      // console.log(getMinDays(0))//  Jan 1,1970 with days =0,

      const fiveDaysAgo = new Date();
      fiveDaysAgo.setDate(today.getDate() - 5);
      fiveDaysAgo.setHours(0, 0, 0, 0);
      expect(getMinDays(5)).toEqual(fiveDaysAgo);
    });
  });

  describe("Invalid Input", () => {
    test("for days parameter not provided", () => {
      expect(getMinDays()).toEqual(new Date(0)); // 1970-01-01T00:00:00.000Z
    });
  });
});
