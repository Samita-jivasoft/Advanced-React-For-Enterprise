const base = 'https://openapi.workoffduty.com:31297'
const test = 'http://72.32.30.123:8080'
export const LOGIN = base+"/login";
export const FORGOT = base+"/password/reset";
export const VALIDATECODE = base+"/password/validateresetcode";
export const REQUIREMENTS = base+"/password/requirements"
export const NEWPASSWORD = base+"/password/setnew"
export const GETUSERCONTEXT = base+"/getusercontext"
export const SAVEREVIEWJOBS = base+"/reviewjobs/save"
export const GETJOBS = base+"/reviewjobs";

//JOB INTAKE
export const AGENCYCUSTOMERGET = base + '/AgencyCustomer/Get'
export const AGENCYDETAILREQUESTCREATE = base + '/AgencyDetailRequest/Create'
export const AGENCYCUSTOMERCREATE = base + '/AgencyCustomer/Create'

//meta
export const META = base + '/meta'