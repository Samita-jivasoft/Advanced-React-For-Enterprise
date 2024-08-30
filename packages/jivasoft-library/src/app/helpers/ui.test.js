import { xs, md, lg, xl } from "app/constants";
import { getBreakpoint, detectScroll } from "app/helpers";

/*==============getBreakpoint==========================*/
describe("getBreakpoint", () => {
  describe("boundary condition", () => {
    test("for viewWidth <= xs", () => {
      expect(getBreakpoint(xs)).toBe("xs");
      expect(getBreakpoint(xs - 1)).toBe("xs");
    });

    test("for xs < viewWidth < md", () => {
      expect(getBreakpoint(xs + 1)).toBe("sm");
      expect(getBreakpoint(md - 1)).toBe("sm");
    });

    test("for md <= viewWidth < lg", () => {
      expect(getBreakpoint(md)).toBe("md");
      expect(getBreakpoint(lg - 1)).toBe("md");
    });

    test("for lg <= viewWidth < xl", () => {
      expect(getBreakpoint(lg)).toBe("lg");
      expect(getBreakpoint(xl - 1)).toBe("lg");
    });

    test("for viewWidth >= xl", () => {
      expect(getBreakpoint(xl)).toBe("xl");
      expect(getBreakpoint(xl + 1)).toBe("xl");
    });
  });
});

/*==============detectScroll==========================*/
describe("detectScroll", () => {
  const mockRefrence = {
    current: {
      scrollTop: 0,
      scrollHeight: 1000,
      clientHeight: 500,
    },
  };

  describe("Edge Case condition", () => {
    test(" for scrollTop is less than or eq to scrollHeight/4", () => {
      mockRefrence.current.scrollTop = 249;
      expect(detectScroll(mockRefrence)).toBe("none");

      mockRefrence.current.scrollTop = 250;
      expect(detectScroll(mockRefrence)).toBe("none");
    });

    test(" for scrollTop is greater than scrollHeight/4", () => {
      mockRefrence.current.scrollTop = 251;
      expect(detectScroll(mockRefrence)).toBe("fourth");

      mockRefrence.current.scrollTop = 500;
      expect(detectScroll(mockRefrence)).toBe("fourth");
    });
  });
  describe("Error Handling", () => {
    test(" for nullref", () => {
      expect(detectScroll({ current: null })).toBe("none");
    });
  });
});
