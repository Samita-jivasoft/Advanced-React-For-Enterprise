export const testingmapsfield = [
  {
    formid: '93510045-2A1B-493B-98B7-4BEDF671CE00',
    formelementid: 'ddd-7A56-414A-B74A-A3C334772409',
    label: 'Zip',
    sequence: 22,
    // defaultvalue: 'Enter job location or address',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'zip',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: []
  },
  {
    formid: '93510045-2A1B-493B-sdfsfd-4BEDF671CE00',
    formelementid: 'ddd-7A56-feeereter-B74A-A3C334772409',
    label: 'Default Zip',
    sequence: 22,
    defaultvalue: '78205',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'zip',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: []
  },
  {
    formid: '93510045-2A1B-493B-98B7-4BEDF671CE00',
    formelementid: 'ddd-7Aefsdfsd56-414A-B74A-A3C334772409',
    label: 'Address',
    sequence: 22,
    // defaultvalue: 'Enter job location or address',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'address',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: []
  },
  {
    formid: '93510045-2A1B-dsfdsf493B-98B7-4BEDF671CE00',
    formelementid: 'ddd-7Aefsdfsdfsdsdfsd56-414A-B74A-A3C334772409',
    label: 'Default Address',
    sequence: 22,
    defaultvalue:
      '3471 River Path Street, San Antonio, Texas 78230, United States',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'address',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: []
  },
  {
    formid: '93510045-2A1B-493B-98B7-4BEsdfsfDF671CE00',
    formelementid: 'ddd-7A56-414A-B74A-A3sdfsdfC334772409',
    label: 'Coordinates',
    sequence: 22,
    // defaultvalue: 'Enter job location or address',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'coordinate',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 0,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: []
  },
  {
    formid: '93510045-2A1B-493B-98B7-4BEsdfsfDF671CE00',
    formelementid: 'ddd-7A56-414A-B74A-A3sdfsdsdfdsdffC334772409',
    label: 'Multiple Addresses',
    sequence: 22,
    // defaultvalue: 'Enter job location or address',
    validminimum: 0,
    validmaximum: 99999,
    masktype: 'address',
    datatype: 'location',
    canedit: 1,
    required: 0,
    groupid: 'Billing Contact',
    allowmultiplepicklistselections: 1,
    saveparam: 'BillingZipCodeProfile',
    nextstructtype: 'StepWithSoftwareUser',
    nextsp:
      "exec [spxd_Form_Get_CustomerEditsCustomer_FormElements_SelectOptions] @SoftwareUserID = '%v'",
    parentobjname: 'form',
    childobjname: 'formelements',
    parentid: 'formid',
    childid: 'formid',
    selectoptions: [],
    locations: [
      {
        key: 1709326761318,
        zoom: 10,
        position: {
          lat: 29.514429816923233,
          lng: -98.58993530273438
        },
        housenumber: '2827',
        road: 'Babcock Road',
        city: 'San Antonio',
        state: 'Texas',
        postcode: '78229',
        county: 'Bexar County',
        country: 'United States'
      },
      {
        key: 1709326761946,
        zoom: 10,
        position: {
          lat: 29.515624891177424,
          lng: -98.47183227539064
        },
        housenumber: '8500',
        road: 'Vidor Avenue',
        city: 'San Antonio',
        state: 'Texas',
        postcode: '78216',
        county: 'Bexar County',
        country: 'United States'
      },
      {
        key: 1709326762602,
        zoom: 9.99772400101202,
        position: {
          lat: 29.424759055300523,
          lng: -98.57208251953125
        },
        housenumber: 'N/A',
        road: 'Southwest 36th Street',
        city: 'San Antonio',
        state: 'Texas',
        postcode: '78237',
        county: 'Bexar County',
        country: 'United States'
      },
      {
        key: 1709326763206,
        zoom: 10,
        position: {
          lat: 29.38288557753017,
          lng: -98.49243164062501
        },
        housenumber: 'N/A',
        road: 'River Walk',
        city: 'San Antonio',
        state: 'Texas',
        postcode: '78204',
        county: 'Bexar County',
        country: 'United States'
      },
      {
        key: 1709326763937,
        zoom: 10,
        position: {
          lat: 29.443895470887465,
          lng: -98.43338012695314
        },
        housenumber: '3309',
        road: 'Interstate 35 North',
        city: 'San Antonio',
        state: 'Texas',
        postcode: '78219',
        county: 'Bexar County',
        country: 'United States'
      }
    ]
  }
]
