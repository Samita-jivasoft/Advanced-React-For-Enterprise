export let testing = 'http://automation03.workoffduty.com:8080';
export let beta = 'https://automation03.workoffduty.com:8081';
export let production = 'https://automation03.workoffduty.com'
export let build = '2.2.6'
export let testbuild = '2.2.8'

let shaz = "http://72.32.18.34:8081";


export const base = testing;
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
export const METAUNAUTH = base + '/meta/unauth'


export const METAGETSEARCHCONFIG = base + '/meta/get/searchconfig' // {workflowid:'',stepid:''}
export const METASAVESEARCHCONFIG = base + '/meta/save/searchconfig' // {workflowid:'',stepid:'', :'', value starttime:'',endtime:''}