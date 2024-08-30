import {
  CloseIconStyled,
  FormNavigationButtonStyled,
  FormNavigationStyled,
  FormStepperStyled,
  FormStyled,
  FormStyledHeader,
  ScrollDownStyled,
  StackContainer
} from './styles/Form'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { useAppTheme, useViewport } from 'app/data'
import { DynamicButtonV2, Element, Tabs } from '../../../../general'
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa'
import { useLayout } from '../../data'
import { formatToSentenceCase } from 'app/helpers'
import { useForm } from './data'

export const Form = props => {
  const {
    formElements,
    elements,
    formLabel,
    onClose,
    label,
    parentState,
    setParentState,
    isReview,
    setIsReview,
    onScroll,
    groups,
    children,
    actions
  } = props
  const [themeState] = useAppTheme()
  const { viewWidth } = useViewport()
  const [formState, formDispatch] = useForm()
  // console.log('formState', formState)

  const [form, setForm] = useState(parentState ? parentState : [])
  // useEffect(() => {
  //   setForm(form)
  // }, [form])
  const [reviewForm, setReviewForm] = useState([])
  const [tabState, setTabs] = useState()

  const formRef = useRef()
  const [selected, setSelected] = useState()

  const [layoutState] = useLayout()
  const { layout } = layoutState
  // console.log('layoutState', layoutState)
  //reconciling inconsistent prop names accross layout types
  let layoutlabel = formLabel || label
  function updateForm () {
    if (isReview) {
      setReviewForm(form)
    }
  }
  const navref = useRef(null)

  // State to track visibility
  const [isAtBottom, setIsAtBottom] = useState(false)

  const scrollDown = () => {
    const scrollableView = document.getElementById('form-nav')
    if (scrollableView) {
      scrollableView.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }

  const handleScroll = e => {
    const element = e.target
    const margin = 10 // Adjust the margin as needed

    const isAtBottom =
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) <= margin

    if (isAtBottom) {
      setIsAtBottom(true)
    } else {
      setIsAtBottom(false)
    }
  }

  useEffect(() => {
    // if (isReview) {
    //   setReviewForm(form)
    // }
    if (elements) {
      getTabs()
    }
  }, [isReview, elements, groups])

  useEffect(() => {
    // console.log('---------- FORM UPDATE ----------')
    // form.map(el => {
    //   console.log(el.label, '- value:', el.value, 'default:', el.defaultvalue)
    // })
    if (form.length > 0) {
      if (parentState) {
        setParentState(form)
      }
    }
  }, [form])

  function generateGroupArray () {
    // console.log('in generateGroupArray')
    let hasGroupIds = false
    const groupsMap = new Map()
    elements.forEach(element => {
      const groupId = element.groupid?.toLowerCase()
      const sequence = element.sequence
      const required = element.required

      if (groupId) {
        hasGroupIds = true
        if (!groupsMap.has(groupId)) {
          groupsMap.set(groupId, {
            formid: element.formId,
            groupid: groupId,
            sequence: sequence,
            required: required, // you may need to adjust this based on your requirements
            requiredbygroup: [],
            elements: [element] // Initialize with the current element
          })
        } else {
          // Append the current element to the existing list
          groupsMap.get(groupId).elements.push(element)
        }
      } else {
        const otherGroupId = 'other'
        if (!groupsMap.has(otherGroupId)) {
          groupsMap.set(otherGroupId, {
            formid: element.formId,
            groupid: otherGroupId,
            sequence: sequence,
            required: required, // you may need to adjust this based on your requirements
            requiredbygroup: [],
            elements: [element] // Initialize with the current element
          })
        } else {
          // Append the current element to the existing list
          groupsMap.get(otherGroupId).elements.push(element)
        }
      }
    })

    if (!hasGroupIds) {
      return false
    }

    const groups = Array.from(groupsMap.values()).sort(
      (a, b) => a.sequence - b.sequence
    )
    setSelected(groups[0])
    // console.log('groups', groups)
    return groups
  }

  function getTabs () {
    // console.log('in getTabs groups', groups)
    if (groups?.length > 0) {
      const groupedElements = {}
      // Group elements, including hidden ones
      for (const element of form) {
        const groupId = element.groupid?.toLowerCase() || 'other'
        groupedElements[groupId] = groupedElements[groupId] || []
        groupedElements[groupId].push(element)
      }

      const sortedGroups = groups.sort((a, b) => a.sequence - b.sequence)
      const finalGroups = sortedGroups.reduce((acc, group) => {
        const groupId = group.groupid?.toLowerCase() || 'other'
        const elements = groupedElements[groupId] || []

        // Check if not all elements in the group are hidden
        const hasVisibleElements = elements.some(
          element => element.hidden !== 1
        )
        if (hasVisibleElements) {
          acc.push({ ...group, elements })
        }
        return acc
      }, [])

      // Handle "other" group, if not all elements are hidden
      if (groupedElements['other']?.some(element => element.hidden !== 1)) {
        const otherElements = groupedElements['other']
        const otherGroup = {
          formgroupid: 'OTHER_GROUP_ID',
          formid: 'FORM_ID',
          groupid: 'Other',
          sequence: finalGroups.length + 1,
          required: 0,
          requiredbygroup: [],
          elements: otherElements
        }
        finalGroups.push(otherGroup)
      }

      // Update states based on finalGroups content
      if (finalGroups.length > 0) {
        setSelected(finalGroups[0])
        setTabs(finalGroups)
      } else {
        setTabs(generateGroupArray()) // Fallback if no visible groups
      }
    } else {
      setTabs(generateGroupArray())
    }
  }

  useEffect(() => {
    // setTabs(getTabs())
    // window.scrollTo(0, 0)
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end'
      })
    }
    if (!isAtBottom) {
      setIsAtBottom(true)
    }
  }, [selected])

  useEffect(() => {
    let isSubscribed = true
    // if (elements) {
    //   getTabs()

    // }
    return () => (isSubscribed = false)
  }, [elements])

  const renderedForm = useMemo(() => {
    // console.log('chagned form', form)
    // console.log('in renderedForm form', form)
    // console.log('in renderedForm elements', elements)
    // console.log(formState.length > 0 ? 'formState' : 'elements')
    if (elements) {
      return (
        <>
          <div ref={formRef} />
          {/* {console.log('-----')} */}
          {elements
            .sort((a, b) => (a?.sequence > b?.sequence ? 1 : -1))
            ?.map(element => {
              return (
                <div
                  className='ELEMENT'
                  key={element?.id ?? element?.formelementid}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    display:
                      tabState?.length > 0
                        ? (element?.groupid?.toString()?.toLowerCase() ??
                            'other') !=
                          selected?.groupid?.toString()?.toLowerCase()
                          ? 'none'
                          : 'flex'
                        : 'flex'
                  }}
                >
                  <Element
                    isReview={isReview}
                    isEdit={!isReview}
                    key={element?.id ?? element?.formelementid}
                    parentState={form}
                    setParentState={state => {
                      // console.log('STATE', typeof state, state)
                      if (typeof state == 'object') {
                        // console.log(state)
                        formDispatch({
                          type: 'SET_ELEMENTS',
                          elements: state
                        })
                      }
                      setForm(state)
                    }}
                    element={element}
                  />
                </div>
              )
            })}
        </>
      )
    }
  }, [elements, formElements, isReview, selected, actions, form])

  const FormNavigation = useMemo(() => {
    return (
      <FormNavigationStyled
        id={'form-nav'}
        ref={navref}
        key={tabState?.length + selected?.groupid}
      >
        {tabState && tabState?.indexOf(selected) > 0 && tabState?.length > 1 && (
          <DynamicButtonV2
            backgroundColor={themeState?.currentTheme?.bg0}
            icon={<FaChevronLeft />}
            text={
              viewWidth > 600 &&
              tabState[tabState.indexOf(selected) - 1]?.groupid
                ? formatToSentenceCase(
                    tabState[tabState.indexOf(selected) - 1]?.groupid
                  )?.slice(0, -1)
                : 'Back'
            }
            onClick={() => {
              setSelected(tabState[tabState.indexOf(selected) - 1])
            }}
          />
        )}
        {tabState &&
          tabState?.indexOf(selected) !== tabState?.length - 1 &&
          tabState?.length > 1 && (
            <DynamicButtonV2
              iconPosition={'right'}
              onClick={() => {
                setSelected(tabState[tabState.indexOf(selected) + 1])
              }}
              icon={<FaChevronRight className={'next'} />}
              text={
                viewWidth > 600 &&
                tabState[tabState.indexOf(selected) + 1]?.groupid
                  ? formatToSentenceCase(
                      tabState[tabState.indexOf(selected) + 1]?.groupid
                    )?.slice(0, -1)
                  : 'Next'
              }
              backgroundColor={themeState?.currentTheme?.bg0}
            />
          )}

        {((tabState?.length > 0 &&
          tabState?.indexOf(selected) === tabState?.length - 1) ||
          !tabState) &&
          actions?.map(action => {
            return <div style={{ marginRight: 5 }}>{action}</div>
          })}
      </FormNavigationStyled>
    )
  }, [tabState, selected, actions])

  const FormStepper = () => {
    return (
      <FormStepperStyled>
        {tabState && tabState?.length > 1 && (
          <DynamicButtonV2
            color={themeState.currentTheme.text}
            onClick={() => {
              if (tabState?.indexOf(selected) > 0) {
                setSelected(tabState[tabState.indexOf(selected) - 1])
              }
            }}
            icon={<FaChevronLeft />}
          />
        )}
        {tabState && tabState?.length > 1 && (
          <DynamicButtonV2
            // Conditionally applying a glowing style
            color={themeState.currentTheme.text}
            onClick={() => {
              if (tabState?.indexOf(selected) < tabState?.length - 1) {
                setSelected(tabState[tabState.indexOf(selected) + 1])
              }
            }}
            icon={<FaChevronRight />}
          />
        )}
      </FormStepperStyled>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {layout !== 'message' && (
        <FormStyledHeader tabstate={tabState?.length} className='HEADER'>
          {tabState && (
            <Tabs
              selected={selected}
              setSelected={setSelected}
              groups={tabState}
              form={form}
            />
          )}

          {layoutlabel && !selected && (
            <div style={{ padding: 10 }}>
              {layoutlabel ? layoutlabel : null}
            </div>
          )}
          {tabState?.length > 1 && <FormStepper />}
          {onClose && (
            <CloseIconStyled>
              <DynamicButtonV2
                onClick={() => {
                  onClose && onClose()
                }}
                type={'circle'}
                icon={<FaTimes />}
              />
            </CloseIconStyled>
          )}
        </FormStyledHeader>
      )}
      <FormStyled
        index={0}
        key={0}
        onSubmit={e => e.preventDefault()}
        className='FORM'
        onScroll={e => {
          onScroll && onScroll(e)
          handleScroll(e)
        }}
      >
        {layout === 'message' && (
          <FormStyledHeader layout={layout} className='HEADER'>
            {layoutlabel && !selected && (
              <div style={{ padding: 10 }}>
                {layoutlabel ? layoutlabel : null}
              </div>
            )}
            {onClose && (
              <CloseIconStyled>
                <DynamicButtonV2
                  onClick={() => {
                    onClose && onClose()
                  }}
                  type={'circle'}
                  icon={<FaTimes />}
                />
              </CloseIconStyled>
            )}
          </FormStyledHeader>
        )}

        {renderedForm}

        {!children && (!elements || elements.length === 0) && (
          <div>Nothing to show</div>
        )}
        {children}
        {tabState?.length > 1 && FormNavigation}
      </FormStyled>
      {!isAtBottom && (
        <ScrollDownStyled className='scroll-to-top' onClick={scrollDown}>
          <FaChevronDown />
        </ScrollDownStyled>
      )}
    </div>
  )
}
