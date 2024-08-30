export const formcanceldetail = [
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "30081DBE-48F2-4E88-BC87-A4EFAD9B2B44",
        "label": "Job ID",
        "sequence": 1,
        "advancedsetting": 0,
        "defaultvalue": "0",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "JobID",
        "isinput": 1,
        "fieldname": "JobID",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "C59CD649-9117-4E4D-B988-28CE8A5C402D",
        "label": "Job Name / Type",
        "sequence": 2,
        "advancedsetting": 0,
        "defaultvalue": "Launch this WF from XD2 -> Detail -> Detail List",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "D28D3EF5-ECCF-4069-B6EB-2FBCCB9A1D0E",
        "label": "Employer",
        "sequence": 3,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "FDEC90C2-561D-483B-B161-E3084BB1A80D",
        "label": "Location",
        "sequence": 4,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 0,
        "validmaximum": 200,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "JobLocation",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "4BC85B8C-8916-4CBA-8EAB-D8D00665B733",
        "label": "Dates and Times",
        "sequence": 7,
        "advancedsetting": 0,
        "defaultvalue": "   to   ",
        "validminimum": 0,
        "validmaximum": 100,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "DFF4D364-9662-432F-B93B-EA09E3BBA78F",
        "label": "Openings",
        "sequence": 8,
        "advancedsetting": 0,
        "defaultvalue": "0",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "int",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "5D348185-7AB6-4BB6-A0A7-BEB3F92F31DE",
        "label": "Assigned Officer(s)",
        "sequence": 9,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 0,
        "validmaximum": 500,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "",
        "isinput": 0,
        "fieldname": "",
        "requiredbystep": "",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "25FE36C0-EAC1-4A07-A187-7D116AF2CE2E",
        "label": "Jobs that might be split from this one (Selected jobs will be canceled)...",
        "sequence": 16,
        "advancedsetting": 0,
        "defaultvalue": "|6492a730-8f55-46c2-b5b2-9a08cd033877",
        "validminimum": 0,
        "validmaximum": 1,
        "masktype": "query",
        "datatype": "picklist",
        "canedit": 1,
        "required": 1,
        "groupid": "Split/Partial Cancelations",
        "allowmultiplepicklistselections": 1,
        "saveparam": "SplitDetailIDsPick",
        "isinput": 1,
        "fieldname": "SplitDetailIDsPick",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": [
            {
                "id": "6492a730-8f55-46c2-b5b2-9a08cd033877",
                "label": "NONE",
                "flag": "",
                "formelementid": "25FE36C0-EAC1-4A07-A187-7D116AF2CE2E",
                "nextstructtype": "StepWithAgency",
                "nextsp": "exec [meta_Form_Get_Grouping] @WorkflowID = '%v', @StepID = '%v'",
                "parentobjname": "formelements",
                "childobjname": "selectoptions",
                "parentid": "formelementid",
                "childid": "formelementid"
            }
        ]
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "0F8F6A1F-C267-49D6-9743-F49291A80007",
        "label": "Partially Cancel Job?",
        "sequence": 17,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 0,
        "validmaximum": 0,
        "masktype": "",
        "datatype": "checkbox",
        "canedit": 1,
        "required": 0,
        "groupid": "Split/Partial Cancelations",
        "allowmultiplepicklistselections": 0,
        "saveparam": "PartiallyCancel",
        "isinput": 1,
        "fieldname": "PartiallyCancel",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "64FF0A6A-487D-4859-816D-F6DB22EEC3FC",
        "label": "# of Openings to Remove From Job",
        "sequence": 18,
        "advancedsetting": 0,
        "defaultvalue": "0",
        "validminimum": 1,
        "validmaximum": 99,
        "masktype": "",
        "datatype": "int",
        "canedit": 1,
        "required": 0,
        "groupid": "Split/Partial Cancelations",
        "allowmultiplepicklistselections": 0,
        "saveparam": "NumOpeningsToRemove",
        "isinput": 1,
        "fieldname": "NumOpeningsToRemove",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "5BE96EAE-1923-4A43-86C1-D6020093E796",
        "label": "Officer Minimum",
        "sequence": 30,
        "advancedsetting": 0,
        "defaultvalue": "NoMinimum",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "picklist",
        "canedit": 1,
        "required": 1,
        "groupid": "Split/Partial Cancelations",
        "allowmultiplepicklistselections": 0,
        "saveparam": "PayingMinimum",
        "isinput": 1,
        "fieldname": "PayingMinimum",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": [
            {
                "id": "YesMinimum",
                "label": "Cancel WITH minimum",
                "flag": "",
                "formelementid": "5BE96EAE-1923-4A43-86C1-D6020093E796",
                "nextstructtype": "StepWithAgency",
                "nextsp": "exec [meta_Form_Get_Grouping] @WorkflowID = '%v', @StepID = '%v'",
                "parentobjname": "formelements",
                "childobjname": "selectoptions",
                "parentid": "formelementid",
                "childid": "formelementid"
            },
            {
                "id": "NoMinimum",
                "label": "Cancel WITHOUT minimum",
                "flag": "",
                "formelementid": "5BE96EAE-1923-4A43-86C1-D6020093E796",
                "nextstructtype": "StepWithAgency",
                "nextsp": "exec [meta_Form_Get_Grouping] @WorkflowID = '%v', @StepID = '%v'",
                "parentobjname": "formelements",
                "childobjname": "selectoptions",
                "parentid": "formelementid",
                "childid": "formelementid"
            }
        ]
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "FE6E7133-060C-4D3B-BA13-05C0612805F5",
        "label": "Reason for Job Cancel",
        "sequence": 31,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 1,
        "validmaximum": 128,
        "masktype": "textarea",
        "datatype": "string",
        "canedit": 1,
        "required": 1,
        "groupid": "Split/Partial Cancelations",
        "allowmultiplepicklistselections": 0,
        "saveparam": "Reason",
        "isinput": 1,
        "fieldname": "Reason",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    },
    {
        "formid": "4CC45B6D-AEB6-4BAE-9B33-30C94ABE2DD2",
        "formelementid": "917E5DE2-60AB-4148-9739-D06ED7FCBF31",
        "label": "Database Name",
        "sequence": 35,
        "advancedsetting": 0,
        "defaultvalue": "",
        "validminimum": 0,
        "validmaximum": 128,
        "masktype": "",
        "datatype": "string",
        "canedit": 0,
        "required": 0,
        "groupid": "Job Info",
        "allowmultiplepicklistselections": 0,
        "saveparam": "DatabaseName",
        "isinput": 1,
        "fieldname": "DatabaseName",
        "requiredbystep": "88F21DFB-CBC4-499E-BAEA-64FF52E7041D",
        "nextstructtype": "StepWithAgencyAndID",
        "nextsp": "exec [spxd_Form_Get_CustomerCancelsDetail_FormElements_SelectOptions] @AgencyID = '%v', @ID = '%v'",
        "parentobjname": "form",
        "childobjname": "formelements",
        "parentid": "formid",
        "childid": "formid",
        "selectoptions": []
    }
]