import { FormStyled, FormStyledHeader } from './styles/Form'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useAppTheme, useViewport } from 'app/data'
import { FormElement } from '../FormElement/Main'
import { FormReviewElement } from './ReviewElement'
import { DynamicButtonV2, Tabs } from 'components'

export const Form = React.memo(props => {
  const { formElements, formLabel, parentState, setParentState, isReview, setIsReview, onScroll, groups } = props
  const [themeState,] = useAppTheme()
  const { viewWidth } = useViewport()
  const [form, setForm] = useState(parentState ? parentState : [])
  const [reviewForm, setReviewForm] = useState([])
  const [tabState, setTabs] = useState()
  const formRef = useRef()
  const [selected, setSelected] = useState()
  function updateForm() {
    if (isReview) {
      setReviewForm(form)
    }
  }
  useEffect(() => {
    if (isReview) {
      setReviewForm(form)
    }
  }, [isReview])
  function setFormState(state) {

    setForm(state)


  }
  useEffect(() => {
    if (form.length > 0) {
      if (parentState) {
        setParentState(form)

      }
    }

  }, [form])
  function generateGroupArray() {
    let hasGroupIds = false;
    const groupsMap = new Map();
    formElements.forEach((element) => {
      const groupId = element.groupid;
      if (groupId) {
        hasGroupIds = true;
        if (!groupsMap.has(groupId)) {
          groupsMap.set(groupId, {
            formid: element.formId,
            groupid: groupId,
            sequence:0,
            required: 0, // you may need to adjust this based on your requirements
            requiredbygroup: [],
          });
        }
      } else {
        const otherGroupId = "Other";
        if (!groupsMap.has(otherGroupId)) {
          groupsMap.set(otherGroupId, {
            formid: element.formId,
            groupid: otherGroupId,
            sequence:1,
            required: 0, // you may need to adjust this based on your requirements
            requiredbygroup: [],
          });
        }
      }
    });
    if (!hasGroupIds) {
      return false;
    }    

    const groups = Array.from(groupsMap.values()).sort((a, b) => a?.sequence??0 - b?.sequence??0);
    return groups;
  }
  
  
  function getTabs() {
    // there are groups
    if(groups?.length>0){
      const groupedElements = {};
      for (const element of formElements) {
        const groupId = element.groupid || 'Other';
        groupedElements[groupId] = groupedElements[groupId] || [];
        groupedElements[groupId].push(element);
      }
  
      // Sort groups by sequence and add form elements to each group
      const sortedGroups = groups.sort((a, b) => a.sequence - b.sequence);
      const finalGroups = sortedGroups.map(group => {
        const groupId = group.groupid || 'Other';
        const formElements = groupedElements[groupId] || [];
        return { ...group, formElements };
      });
  
      // Add any form elements with undefined or null group ids to new group
      const otherElements = groupedElements['Other'] || [];
      if (otherElements.length > 0) {
        const otherGroup = {
          formgroupid: 'OTHER_GROUP_ID',
          formid: 'FORM_ID',
          groupid: 'Other',
          sequence: sortedGroups.length + 1,
          required: 0,
          requiredbygroup: [],
          formElements: otherElements
        };
        finalGroups.push(otherGroup);
      }
      setSelected(finalGroups[0])
      setTabs(finalGroups)
    } else{
      setTabs(generateGroupArray())
    }
    
    // return formElements?.map(item => item.groupid ?? 'Other').filter((value, index, self) => self.indexOf(value) === index)
  }

  useEffect(() => {
    // setTabs(getTabs())
    window.scrollTo(0, 0)
  }, [selected])

  useEffect(() => {
    let isSubscribed = true
    if(formElements){
      getTabs()

    }
    return () => (isSubscribed = false)
  }, [formElements])
  return (
    <>

      <FormStyled
        ref={formRef}
      onScroll={(e) => {
        onScroll && onScroll(e) }}
      >
        <FormStyledHeader>
          {tabState &&!isReview && <Tabs selected={selected} setSelected={setSelected} groups={tabState} />}
          
          {!selected && <div style={{padding:10}}>{ formLabel ? formLabel : 'Form'}</div>}
        </FormStyledHeader>
        {/* { selected && selected?.formElements?.map((element)=>{
          return (

              <FormElement
                key={element.formelementid}
                parentState={form}
                setParentState={setFormState}
                element={element}
              />
          )
        })} */}

        {formElements && !isReview &&
          formElements.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1).map(element => {
            return (
              <div
                key={element.formelementid}
                style={{ width: '100%', justifyContent: 'center', display: tabState?.length > 0 ? (element?.groupid?.toLowerCase() ?? 'other') != selected?.groupid?.toLowerCase() ? 'none' : 'flex' : 'flex' }}>
                <FormElement
                  key={element.formelementid}
                  parentState={form}
                  setParentState={setFormState}
                  element={element}
                />
              </div>
            )
          })}
        {isReview &&
          reviewForm.sort((a, b) => (a.element.sequence > b.element.sequence) ? 1 : -1).map(element => {
            return (
              <FormReviewElement
                key={element.formelementid}
                element={element}
                setFormState={setFormState}
                parentState={form}
                updateForm={updateForm}
                // setIsEditing={setIsEditing}
                setIsReview={setIsReview}
                value={element.value} />
            )
          })}

        {(!formElements || formElements.length === 0) && (
          <div>Nothing to show</div>
        )}
        {/* {tabState && selected !== tabState[tabState.length - 1] &&
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: 10 }}>
            <DynamicButtonV2
              text={tabState?.[tabState?.indexOf(selected) + 1]}
              backgroundColor={themeState.currentTheme.primaryColor}
              color={'white'}
              onClick={() => {
                setSelected(tabState[tabState.indexOf(selected) + 1])
              }}
              iconPosition={'right'}
              icon={'>'}
            />
          </div>
        } */}
      </FormStyled>

    </>
  )
})


