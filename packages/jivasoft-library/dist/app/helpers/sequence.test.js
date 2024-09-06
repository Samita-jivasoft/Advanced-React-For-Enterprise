"use strict";

var _sequence = require("app/helpers/sequence");
describe("normalizeProperties Test", () => {
  describe("Valid Input", () => {
    test("Normalize simple obj", () => {
      const obj = {
        Name: "CompletePaperwork",
        FriendlyName: "Complete Paperwork",
        agEncyreqUirEd: 0,
        STEPTYPE: "Form",
        sequence: 0
      };
      const expectedOutput = {
        name: "CompletePaperwork",
        friendlyname: "Complete Paperwork",
        agencyrequired: 0,
        steptype: "Form",
        sequence: 0
      };
      (0, _sequence.normalizeProperties)(obj);
      expect(obj).toEqual(expectedOutput);
    });
    test("Normalize array of objects", () => {
      const obj = [{
        NAme: "CompletePaperwork",
        friendlyname: "Complete Paperwork",
        workflowid: "7FE65C71-1AF8-4BD9-BA08-28A7F95DA201",
        description: "Complete paperwork for an incomplete assignment.",
        agencyrequired: 0,
        steptype: "Form",
        seqUencE: 0
      }, {
        name: "SubmitFeedback",
        friendlyname: "Submit Feedback",
        workflowid: "22BBB007-2360-43C2-911E-5F1D1D0358FE",
        DESCRIPTION: "Allows user to submit feedback",
        agencyrequired: 0,
        sTeptype: "Form",
        sequence: 0
      }];
      const expectedOutput = [{
        name: "CompletePaperwork",
        friendlyname: "Complete Paperwork",
        workflowid: "7FE65C71-1AF8-4BD9-BA08-28A7F95DA201",
        description: "Complete paperwork for an incomplete assignment.",
        agencyrequired: 0,
        steptype: "Form",
        sequence: 0
      }, {
        name: "SubmitFeedback",
        friendlyname: "Submit Feedback",
        workflowid: "22BBB007-2360-43C2-911E-5F1D1D0358FE",
        description: "Allows user to submit feedback",
        agencyrequired: 0,
        steptype: "Form",
        sequence: 0
      }];
      (0, _sequence.normalizeProperties)(obj);
      expect(obj).toEqual(expectedOutput);
    });
  });
  describe("Handling Invalid Input", () => {
    test("Non-object input", () => {
      const input = "noT an object";
      const expectedOutput = "noT an object";
      (0, _sequence.normalizeProperties)(input);
      expect(input).toEqual(expectedOutput);
    });
    describe("Edge Case Handling", () => {
      test("Normalize empty object", () => {
        const obj = {};
        const expectedOutput = {};
        (0, _sequence.normalizeProperties)(obj);
        expect(obj).toEqual(expectedOutput);
      });
      test("Normalize Nested obj", () => {
        const obj = {
          NAme: "OmarWorkflows",
          friendlyname: "Omar Workflows",
          menugroupid: "685D5E16-1AA0-456B-AC82-1829E10E42D0",
          workflows: [{
            NAme: "CompletePaperwork",
            friendlyname: "Complete Paperwork",
            workflowid: "7FE65C71-1AF8-4BD9-BA08-28A7F95DA201",
            description: "Complete paperwork for an incomplete assignment.",
            agencyrequired: 0,
            steptype: "Form",
            seqUencE: 0
          }, {
            name: "SubmitFeedback",
            friendlyname: "Submit Feedback",
            workflowid: "22BBB007-2360-43C2-911E-5F1D1D0358FE",
            DESCRIPTION: "Allows user to submit feedback",
            agencyrequired: 0,
            sTeptype: "Form",
            sequence: 0
          }]
        };
        const expectedOutput = {
          name: "OmarWorkflows",
          friendlyname: "Omar Workflows",
          menugroupid: "685D5E16-1AA0-456B-AC82-1829E10E42D0",
          workflows: [{
            name: "CompletePaperwork",
            friendlyname: "Complete Paperwork",
            workflowid: "7FE65C71-1AF8-4BD9-BA08-28A7F95DA201",
            description: "Complete paperwork for an incomplete assignment.",
            agencyrequired: 0,
            steptype: "Form",
            sequence: 0
          }, {
            name: "SubmitFeedback",
            friendlyname: "Submit Feedback",
            workflowid: "22BBB007-2360-43C2-911E-5F1D1D0358FE",
            description: "Allows user to submit feedback",
            agencyrequired: 0,
            steptype: "Form",
            sequence: 0
          }]
        };
        (0, _sequence.normalizeProperties)(obj);
        expect(obj).toEqual(expectedOutput);
      });
    });
  });
});