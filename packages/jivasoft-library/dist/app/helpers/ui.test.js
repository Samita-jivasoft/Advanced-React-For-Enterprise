"use strict";

var _constants = require("app/constants");
var _helpers = require("app/helpers");
/*==============getBreakpoint==========================*/
describe("getBreakpoint", () => {
  describe("boundary condition", () => {
    test("for viewWidth <= xs", () => {
      expect((0, _helpers.getBreakpoint)(_constants.xs)).toBe("xs");
      expect((0, _helpers.getBreakpoint)(_constants.xs - 1)).toBe("xs");
    });
    test("for xs < viewWidth < md", () => {
      expect((0, _helpers.getBreakpoint)(_constants.xs + 1)).toBe("sm");
      expect((0, _helpers.getBreakpoint)(_constants.md - 1)).toBe("sm");
    });
    test("for md <= viewWidth < lg", () => {
      expect((0, _helpers.getBreakpoint)(_constants.md)).toBe("md");
      expect((0, _helpers.getBreakpoint)(_constants.lg - 1)).toBe("md");
    });
    test("for lg <= viewWidth < xl", () => {
      expect((0, _helpers.getBreakpoint)(_constants.lg)).toBe("lg");
      expect((0, _helpers.getBreakpoint)(_constants.xl - 1)).toBe("lg");
    });
    test("for viewWidth >= xl", () => {
      expect((0, _helpers.getBreakpoint)(_constants.xl)).toBe("xl");
      expect((0, _helpers.getBreakpoint)(_constants.xl + 1)).toBe("xl");
    });
  });
});

/*==============detectScroll==========================*/
describe("detectScroll", () => {
  const mockRefrence = {
    current: {
      scrollTop: 0,
      scrollHeight: 1000,
      clientHeight: 500
    }
  };
  describe("Edge Case condition", () => {
    test(" for scrollTop is less than or eq to scrollHeight/4", () => {
      mockRefrence.current.scrollTop = 249;
      expect((0, _helpers.detectScroll)(mockRefrence)).toBe("none");
      mockRefrence.current.scrollTop = 250;
      expect((0, _helpers.detectScroll)(mockRefrence)).toBe("none");
    });
    test(" for scrollTop is greater than scrollHeight/4", () => {
      mockRefrence.current.scrollTop = 251;
      expect((0, _helpers.detectScroll)(mockRefrence)).toBe("fourth");
      mockRefrence.current.scrollTop = 500;
      expect((0, _helpers.detectScroll)(mockRefrence)).toBe("fourth");
    });
  });
  describe("Error Handling", () => {
    test(" for nullref", () => {
      expect((0, _helpers.detectScroll)({
        current: null
      })).toBe("none");
    });
  });
});