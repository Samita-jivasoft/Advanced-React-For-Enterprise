"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALIDATECODE = exports.SAVEREVIEWJOBS = exports.REQUIREMENTS = exports.NEWPASSWORD = exports.META = exports.LOGIN = exports.GETUSERCONTEXT = exports.GETJOBS = exports.FORGOT = exports.AGENCYDETAILREQUESTCREATE = exports.AGENCYCUSTOMERGET = exports.AGENCYCUSTOMERCREATE = void 0;
const base = 'https://openapi.workoffduty.com:31297';
const test = 'http://72.32.30.123:8080';
const LOGIN = exports.LOGIN = base + "/login";
const FORGOT = exports.FORGOT = base + "/password/reset";
const VALIDATECODE = exports.VALIDATECODE = base + "/password/validateresetcode";
const REQUIREMENTS = exports.REQUIREMENTS = base + "/password/requirements";
const NEWPASSWORD = exports.NEWPASSWORD = base + "/password/setnew";
const GETUSERCONTEXT = exports.GETUSERCONTEXT = base + "/getusercontext";
const SAVEREVIEWJOBS = exports.SAVEREVIEWJOBS = base + "/reviewjobs/save";
const GETJOBS = exports.GETJOBS = base + "/reviewjobs";

//JOB INTAKE
const AGENCYCUSTOMERGET = exports.AGENCYCUSTOMERGET = base + '/AgencyCustomer/Get';
const AGENCYDETAILREQUESTCREATE = exports.AGENCYDETAILREQUESTCREATE = base + '/AgencyDetailRequest/Create';
const AGENCYCUSTOMERCREATE = exports.AGENCYCUSTOMERCREATE = base + '/AgencyCustomer/Create';

//meta
const META = exports.META = base + '/meta';