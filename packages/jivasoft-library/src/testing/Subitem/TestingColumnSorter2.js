export const columnsorter = {
  step: {
    steptype: {
      workflowid: '',
      stepid: '',
      sorter: {
        sorterid: '', //sorry about the sorter bit, I can technically make this disapear. It only exists in the json because it exsits in the data, and I thought we might use it to have multiple jira sorters on the screen at the same time. If Dan confrims this to never be the case, then I can make this entire object go away and just use columns.
        sortername: 'Job Review',
        columns: [
          {
            columnid: '',
            label: 'Unreviewed',
            sequence: 1,
            canmovetoorigin: true,
            canmoveto: [
              //a list of other columnIDs to determine which lists you can move into from this list
              '',
              '',
              ''
            ],
            items: [
              {
                id: '6f9299d3-1e4d-4957-b8d5-001ec628cade',
                title: 'Customer Name',
                header: 'Road Job/Security, This is for testing purposes',
                footer:
                  'Footer Text, Something is written here, The quick sly fox jumped over the lazy dog.',
                description: '',
                canaddnew: false,
                candelete: false,
                fields: [
                  {
                    fieldid: '',
                    label: 'Job Name idk',
                    sequence: 1,
                    defaultvalue: "Sam's TINY House #GOTTEM",
                    selectoptions: [],
                    validminimum: 0,
                    validmaximum: 99999,
                    datatype: 'string',
                    masktype: '',
                    canedit: false,
                    required: false
                  },
                  {
                    fieldid: '',
                    label: 'Job Type?',
                    sequence: 2,
                    defaultvalue: 'Sam Protection',
                    selectoptions: [],
                    validminimum: 0,
                    validmaximum: 99999,
                    datatype: 'string',
                    masktype: '',
                    canedit: false,
                    required: false
                  },
                  {
                    fieldid: '',
                    label: 'Job Start Time',
                    sequence: 2,
                    defaultvalue: '2022-05-06 22:22:22',
                    selectoptions: [],
                    validminimum: 0,
                    validmaximum: 99999,
                    datatype: 'datetime',
                    masktype: 'time',
                    canedit: true,
                    required: true
                  }
                ],
                items: [
                  {
                    itemtype: 'label',
                    itemlist: [
                      //should this be called "items" as well? @Sam
                      {
                        id: '6f9299d3-1e4d-4957-b8d5-001ec628cade',
                        title: 'Customer Name',
                        header:
                          'Road Job/Security, This is for testing purposes',
                        footer:
                          'Footer Text, Something is written here, The quick sly fox jumped over the lazy dog.',
                        description: '',
                        canaddnew: false,
                        candelete: false,
                        fields: [
                          {
                            fieldid: '',
                            label: 'Job Name idk',
                            sequence: 1,
                            defaultvalue: "Sam's TINY House #GOTTEM",
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'string',
                            masktype: '',
                            canedit: false,
                            required: false
                          },
                          {
                            fieldid: '',
                            label: 'Job Type?',
                            sequence: 2,
                            defaultvalue: 'Sam Protection',
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'string',
                            masktype: '',
                            canedit: false,
                            required: false
                          },
                          {
                            fieldid: '',
                            label: 'Job Start Time',
                            sequence: 2,
                            defaultvalue: '2022-05-06 22:22:22',
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'datetime',
                            masktype: 'time',
                            canedit: true,
                            required: true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    itemtype: 'label2',
                    itemlist: [
                      //should this be called "items" as well? @Sam
                      {
                        id: '6f9299d3-1e4d-4957-b8d5-001ec628cade',
                        title: 'Customer Name',
                        header:
                          'Road Job/Security, This is for testing purposes',
                        footer:
                          'Footer Text, Something is written here, The quick sly fox jumped over the lazy dog.',
                        description: '',
                        canaddnew: false,
                        candelete: false,
                        fields: [
                          {
                            fieldid: '',
                            label: 'Job Name idk',
                            sequence: 1,
                            defaultvalue: "Sam's TINY House #GOTTEM",
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'string',
                            masktype: '',
                            canedit: false,
                            required: false
                          },
                          {
                            fieldid: '',
                            label: 'Job Type?',
                            sequence: 2,
                            defaultvalue: 'Sam Protection',
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'string',
                            masktype: '',
                            canedit: false,
                            required: false
                          },
                          {
                            fieldid: '',
                            label: 'Job Start Time',
                            sequence: 2,
                            defaultvalue: '2022-05-06 22:22:22',
                            selectoptions: [],
                            validminimum: 0,
                            validmaximum: 99999,
                            datatype: 'datetime',
                            masktype: 'time',
                            canedit: true,
                            required: true
                          }
                        ]
                      }
                    ]
                  }
                ]
              } // is a list and will have multiple items
            ]
          }
        ]
      }
    }
  },
  navigation: [
    {
      stepid: '',
      label: 'Save',
      validationrequired: true
    },
    {
      stepid: '',
      label: 'Exit',
      validationrequired: false
    }
  ]
}
