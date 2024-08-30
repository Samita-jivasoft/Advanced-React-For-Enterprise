export const oldformtesting = (
  <Form
    // isReview={isReview}
    // setIsReview={setIsReview}
    // parentState={state}
    // reviewRequired={step.form && step.form[0].reviewrequired}
    // setParentState={setStepState}
    formLabel={'test'}
    formElements={[
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: '9276129D-FC27-43D8-8D6E-0B212463E211',
        label: 'Email Fetch',
        sequence: 1,
        defaultvalue: 'yzan.qaryouti@jivasoft.com',
        validminimum: 0,
        validmaximum: 100,
        masktype: '',
        datatype: 'string',
        canedit: 1,
        required: 1,
        allowmultiplepicklistselections: 0,
        saveparam: 'Email',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: []
      },
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: 'E5722040-A615-4F3B-99E3-F94142F838D9',
        label: 'Restrict To Rotation List',
        sequence: 2,
        defaultvalue: '',
        validminimum: 0,
        validmaximum: 100,
        masktype: 'query',
        datatype: 'picklist',
        canedit: 1,
        required: 0,
        allowmultiplepicklistselections: 0,
        saveparam: 'Yzan Rotation Test',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: [
          {
            id: '71126D5D-FA56-4DC3-B961-20B1954F3D7B',
            label: 'Cool Officer Rotation List',
            flag: '',
            formelementid: 'E5722040-A615-4F3B-99E3-F94142F838D9',
            nextstructtype: '',
            nextsp: '',
            parentobjname: 'formelements',
            childobjname: 'selectoptions',
            parentid: 'formelementid',
            childid: 'formelementid'
          }
        ]
      },
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: 'EEE29A94-EB80-4443-A9D7-412EA073982F',
        label: 'Testbox',
        sequence: 3,
        defaultvalue: '',
        validminimum: 0,
        validmaximum: 100,
        masktype: '',
        datatype: 'checkbox',
        canedit: 1,
        required: 0,
        allowmultiplepicklistselections: 0,
        saveparam: 'Testbox',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: []
      },
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: '22FBF13A-EA5F-4780-BA87-1DCBE1D230E2',
        label: "Sammo's big ole time  ",
        sequence: 4,
        defaultvalue: '00:00',
        validminimum: 0,
        validmaximum: 100,
        masktype: '',
        datatype: 'datetime',
        canedit: 1,
        required: 0,
        allowmultiplepicklistselections: 0,
        saveparam: 'datetime',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: []
      },
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: '314B8E5D-1291-410F-8518-E5A82C159906',
        label: 'Datelist Test',
        sequence: 5,
        defaultvalue: '',
        validminimum: 0,
        validmaximum: 128,
        masktype: 'datetime',
        datatype: 'datelist',
        canedit: 1,
        required: 0,
        allowmultiplepicklistselections: 0,
        saveparam: 'DateListYzan',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: []
      },
      {
        formid: 'FD5DEDB6-2E11-4FAA-B4BE-8E31E0BE0E83',
        formelementid: '12542E26-5CAC-4D19-8F90-D515980E7005',
        label: 'Select Priority',
        sequence: 9,
        defaultvalue: 'BA2AE3C2-2A9F-44C4-8C60-CF0B2BD5004B',
        validminimum: 0,
        validmaximum: 100,
        masktype: 'query',
        datatype: 'picklist',
        canedit: 0,
        required: 0,
        allowmultiplepicklistselections: 0,
        saveparam: 'Yzan Priority Test',
        nextstructtype: 'StepWithAgency',
        nextsp:
          "exec [spxd_Form_Get_Yzan_Test_FormElements_SelectOptions] @AgencyID = '%v'",
        parentobjname: 'form',
        childobjname: 'formelements',
        parentid: 'formid',
        childid: 'formid',
        selectoptions: [
          {
            id: '116E7198-148F-413C-A5B5-CD966E5002EC',
            label: 'High',
            flag: '',
            formelementid: '12542E26-5CAC-4D19-8F90-D515980E7005',
            nextstructtype: '',
            nextsp: '',
            parentobjname: 'formelements',
            childobjname: 'selectoptions',
            parentid: 'formelementid',
            childid: 'formelementid'
          },
          {
            id: '1B39EC4E-413E-4613-8C5F-77771B61CD85',
            label: 'Low',
            flag: '',
            formelementid: '12542E26-5CAC-4D19-8F90-D515980E7005',
            nextstructtype: '',
            nextsp: '',
            parentobjname: 'formelements',
            childobjname: 'selectoptions',
            parentid: 'formelementid',
            childid: 'formelementid'
          },
          {
            id: '6045C308-3879-4A91-8EF7-B1FD23D23F59',
            label: 'Medium',
            flag: '',
            formelementid: '12542E26-5CAC-4D19-8F90-D515980E7005',
            nextstructtype: '',
            nextsp: '',
            parentobjname: 'formelements',
            childobjname: 'selectoptions',
            parentid: 'formelementid',
            childid: 'formelementid'
          },
          {
            id: 'BA2AE3C2-2A9F-44C4-8C60-CF0B2BD5004B',
            label: 'Normal',
            flag: '',
            formelementid: '12542E26-5CAC-4D19-8F90-D515980E7005',
            nextstructtype: '',
            nextsp: '',
            parentobjname: 'formelements',
            childobjname: 'selectoptions',
            parentid: 'formelementid',
            childid: 'formelementid'
          }
        ]
      }
    ]}
  />
)
