export const formcustomerregistration = [
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '39BC4591-D5FE-4C7F-B434-84DFB83D2B5D',
    label: 'Customer (Business) Name',
    sequence: 1,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 128,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'CustomerNameRegistration',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'D18A9C92-B84B-426A-BA9B-9246197FD9BF',
    label: 'Your First Name',
    sequence: 2,
    defaultvalue: 'sam',
    validminimum: 1,
    validmaximum: 128,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'YourFirstNameRegistration',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'F2C32F5E-C8E4-4B6B-A950-476FB38E846C',
    label: 'Your Last Name',
    sequence: 3,
    defaultvalue: 'carey',
    validminimum: 1,
    validmaximum: 128,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'YourLastNameRegistration',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '6A0778BE-6333-440C-8CD1-05C090B39AD5',
    label: 'Your Email Address',
    sequence: 4,
    defaultvalue: 'samcarey@samcarey.com',
    validminimum: 1,
    validmaximum: 128,
    masktype: 'email',
    datatype: 'string',
    canedit: 0,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'YourEmailAddressRegistration',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'FA4D7F6B-BAEE-4FBE-9787-A7D446642756',
    label: 'Your Phone Number',
    sequence: 5,
    defaultvalue: '(123) 123 - 1231',
    validminimum: 1,
    validmaximum: 128,
    masktype: 'phone',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'YourPhoneNumberRegistration',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: [
      {
        formelementid: '7684AE58-D926-44A1-A416-D97558222E42',
        from: '7684AE58-D926-44A1-A416-D97558222E4',
        // these are the ids we are trying to toggle
        to: 'EF6D9B76-34BA-4E24-8967-FA44B4CDFE9F',
        actiontype: 'ToggleVisibility',
        value: '(111) 111 - 1111',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp: '',
        parentobjname: 'formelements',
        childobjname: 'action',
        parentid: 'formelementid',
        childid: 'formelementid'
      }
    ]
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '7684AE58-D926-44A1-A416-D97558222E42',
    label: 'Billing Contact Information Same as Above',
    sequence: 6,
    defaultvalue: '',
    validminimum: 0,
    validmaximum: 128,
    masktype: '',
    datatype: 'checkbox',
    canedit: 1,
    format: '',
    required: 0,
    allowmultiplepicklistselections: 0,
    saveparam: 'ContactIsBillingContactEDS',
    groupid: 'Basic Info',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: [
      {
        formelementid: '7684AE58-D926-44A1-A416-D97558222E42',
        from: '6A0778BE-6333-440C-8CD1-05C090B39AD5',
        to: '7D3343B8-44D8-4569-A051-70A63A0888D2',
        actiontype: 'Copy',
        value: '1',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp: '',
        parentobjname: 'formelements',
        childobjname: 'action',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        formelementid: '7684AE58-D926-44A1-A416-D97558222E42',
        from: 'FA4D7F6B-BAEE-4FBE-9787-A7D446642756',
        to: 'EF6D9B76-34BA-4E24-8967-FA44B4CDFE9F',
        actiontype: 'Copy',
        value: '1',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp: '',
        parentobjname: 'formelements',
        childobjname: 'action',
        parentid: 'formelementid',
        childid: 'formelementid'
      }
    ]
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '96FD8637-497E-41B2-9C54-E86CB7B9560A',
    label: 'Billing Address (Line 1)',
    sequence: 7,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 200,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingAddressOneRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'D578FF92-3BE2-4BFB-8E22-10EE33198518',
    label: 'Billing Address (Line 2)',
    sequence: 8,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 200,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 0,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingAddressTwoRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'FBBA1A0C-8522-417E-B1E4-CEEC79602CE6',
    label: 'City',
    sequence: 9,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 200,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingCityRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
    label: 'State',
    sequence: 10,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 1,
    masktype: 'query',
    datatype: 'picklist',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingStateRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [
      {
        id: '4DDA9CEE-51DB-411C-A191-018508E8F2F3',
        label: 'Alabama',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '937418D7-F439-43D2-AAE6-641FE9B05F12',
        label: 'Alaska',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '74BAAE69-C0C0-422E-9164-6D12F56B8533',
        label: 'Alberta',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '45A08459-A360-4B20-9481-99D8CC7E5194',
        label: 'American Samoa',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'F4B552B4-C964-4CFD-902F-1381DF154E6B',
        label: 'Arizona',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '8BCC7A35-9C1E-4BC1-A9A9-B3A507E74443',
        label: 'Arkansas',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '9E03CFAC-8095-40B9-B3DA-E4FABF2925C0',
        label: 'British Columbia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'FD6590FB-766A-4A7D-BB71-34C92994F619',
        label: 'California',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '637733E5-111B-4F6F-8FF4-FF31521D8553',
        label: 'Colorado',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E75E18AE-022B-4767-9E78-645B476144CA',
        label: 'Connecticut',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'A36AA15C-F86C-42B5-96CF-E5C255A99227',
        label: 'Delaware',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '5DBB166C-8CB7-4F2E-84C9-E7B2CD9E6832',
        label: 'District of Columbia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '6EFE6D6C-6A44-4557-A6FB-8F9B38640CE7',
        label: 'Federated States of Micronesia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E544DCA7-D87C-434E-8E99-730FFD731A89',
        label: 'Florida',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '8C8390F9-D425-4F6A-BA2C-6BDBE3CA4ABC',
        label: 'Georgia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '6877AAB8-B70C-44AB-AE71-82E78EA53789',
        label: 'Guam',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '296CC859-8CD8-425B-9A0B-0B01E9327F81',
        label: 'Hawaii',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '4D18A00B-42E6-4EAB-A15D-C999BEE570DC',
        label: 'Idaho',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '6FDDFEC9-67AF-4BE5-BA3A-38A5601B8B0C',
        label: 'Illinois',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '6F1ED1A7-C00B-44CF-90D5-8C4249DB3B64',
        label: 'Indiana',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'FB7EAA45-0389-4DD9-BC78-5708F7CEA6EA',
        label: 'Iowa',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'C4B1A61D-9171-4313-BA82-CA5014D074C0',
        label: 'Kansas',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'A649ABF1-0FE5-4AFE-B02C-C665F06C6413',
        label: 'Kentucky',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '4BD3B018-2F81-4EF3-B23A-5F32B6FEAC33',
        label: 'Louisiana',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'D4DAA3CB-1F59-441B-A882-867D274403CB',
        label: 'Maine',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '61E8571B-0483-4324-8920-A3F0C7592BE3',
        label: 'Manitoba',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0D81489F-EEC6-43E0-A81C-FC8D3CE16161',
        label: 'Marshall Islands',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E029B297-5152-4DC4-964D-3C3E2DB35A8B',
        label: 'Maryland',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '99DC930D-6A8B-4434-9D82-F34DB715F745',
        label: 'Massachusetts',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '13443F16-91AD-4BE4-95FD-F3AE4103406E',
        label: 'Michigan',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '5AD87740-F272-473D-8F89-2432481A829F',
        label: 'Minnesota',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '4ED8219C-E0E5-4CF2-865D-1512CF15D810',
        label: 'Mississippi',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'DD361CF6-DB93-4C1E-B518-0E3D359BD796',
        label: 'Missouri',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '80D39924-C74C-4CFB-9FB0-1F176A73F262',
        label: 'Montana',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '3D8D4355-77F3-4C0A-B1A6-7A70CBE6F9BF',
        label: 'Nebraska',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E0B2B457-8B77-4DFC-84D4-CCAC73FCA5AB',
        label: 'Nevada',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'CC3A9D9E-3F36-45DD-B12C-B85797F07B17',
        label: 'New Brunswick',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'A286C815-30C6-4418-A395-925C4D2B2D20',
        label: 'New Hampshire',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0E910401-2D8B-4EAE-82CF-450547E86881',
        label: 'New Jersey',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '38B2975A-61A8-4563-AF71-87E59199BFA9',
        label: 'New Mexico',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0298A2A4-86BB-48F6-B078-F3740434B9C3',
        label: 'New York',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '188A17B7-CD34-4DD8-9D68-66F466D9926F',
        label: 'Newfoundland and Labrador',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '3EBBD027-5250-4D8D-B56B-D3616A0299D3',
        label: 'North Carolina',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E7B8BBB5-08E5-4BA9-BFC4-564D7827682D',
        label: 'North Dakota',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '5E437E46-D172-4872-A405-C89ECC71B235',
        label: 'Northern Mariana Islands',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '95C02000-97A6-4375-8F10-8A619BFCE6E7',
        label: 'Northwest Territories',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'F272B767-597E-4684-AAE1-545AB9DFED08',
        label: 'Nova Scotia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '25F1BCD6-73FC-4ECF-812D-8799A73FDD6C',
        label: 'Nunavut',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'C04352B2-EB99-4116-B9EA-F74BC31D65E3',
        label: 'Ohio',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '2B026FC6-E5F0-4DB5-9704-3910FFCEDE80',
        label: 'Oklahoma',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '1513F029-BCAD-4372-AEB6-0E1184A49943',
        label: 'Ontario',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0CDFBDFC-9E6C-4C4B-ADA9-BA65F095CC0A',
        label: 'Oregon',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'E515EBC0-BD3D-44A5-A921-97EF8E6E52F7',
        label: 'Palau',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '59321E45-ECCF-4E0D-B827-F7C563C26197',
        label: 'Pennsylvania',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '4EEDFDC9-C327-44C7-A7C9-4651695930ED',
        label: 'Prince Edward Island',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '11FECCD7-9380-4012-ADD1-F4505A86963F',
        label: 'Puerto Rico',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0C8AE714-73F6-453B-B0EC-7B5EB1AFAF16',
        label: 'Quebec',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '2C14738F-184E-454C-BB44-55185930F22B',
        label: 'Rhode Island',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '5E9AD714-91EF-4B8F-AF6D-0B6E4792AE53',
        label: 'Saskatchewan',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '3E4D8DA3-1F47-49A3-9BAB-3E088A56350F',
        label: 'South Carolina',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'BE24FB70-4FCF-481D-B6ED-43C9746DFDC5',
        label: 'South Dakota',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '24EAEE63-C26A-4E02-B3E9-5F16C4253170',
        label: 'Tennessee',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '2D999EC9-C5D0-489D-A2B2-EEFCCE5651B2',
        label: 'Texas',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '2E6C2789-47F1-445D-840D-B840EC83AD4B',
        label: 'Utah',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'D5A10CEF-E44F-4F14-AAEB-A25A4C870E45',
        label: 'Vermont',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '0D645914-FA9A-4857-B7E9-727CD3529632',
        label: 'Virgin Islands',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '086A5AE2-96F5-4DE8-987E-B5FACA7E5ED2',
        label: 'Virginia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '52576396-2DC5-4748-81EF-EC9284F98D9D',
        label: 'Washington',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'FC20013E-3513-41F3-9769-77CEACD0D6EA',
        label: 'West Virginia',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: 'A70DACAD-EE0F-44D1-9ADC-39F3102ADB58',
        label: 'Wisconsin',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '9703818E-1D91-4191-923A-8DEBBF142EA8',
        label: 'Wyoming',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      },
      {
        id: '3058E4F0-598B-4559-B8A1-E168006183CB',
        label: 'Yukon',
        flag: '',
        formelementid: 'A135869F-766D-442B-8346-8F9EF95BBEB3',
        nextstructtype: 'StepWithSoftwareUser',
        nextsp:
          'exec [spxd_Form_Get_CustomerRegistration_FormElements_Actions]',
        parentobjname: 'formelements',
        childobjname: 'selectoptions',
        parentid: 'formelementid',
        childid: 'formelementid'
      }
    ],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '17032C2F-20EA-4050-8CA5-C149114540CC',
    label: 'Zip Code',
    sequence: 11,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 20,
    masktype: '',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 1,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: '7D3343B8-44D8-4569-A051-70A63A0888D2',
    label: 'Billing Email Address (if different)',
    sequence: 12,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 128,
    masktype: 'email',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 0,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingEmailAddressRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  },
  {
    formid: '01AE2C85-C947-4A9B-B6B4-6AB1D11E1997',
    formelementid: 'EF6D9B76-34BA-4E24-8967-FA44B4CDFE9F',
    label: 'Billing Phone Number (if different)',
    sequence: 13,
    defaultvalue: '',
    validminimum: 1,
    validmaximum: 128,
    masktype: 'phone',
    datatype: 'string',
    canedit: 1,
    format: '',
    required: 0,
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingPhoneNumberRegistration',
    groupid: 'Billing',
    hidden: 0,
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      'exec [spxd_Form_Get_CustomerRegistration_FormElements_SelectOptions]',
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    action: []
  }
]
