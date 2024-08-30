import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from 'react-icons/fa'
import { useLists } from './data/ListsContext'
import {
  DetailViewBody,
  DetailViewContainer,
  DetailViewContentContainer,
  DetailViewHeader
} from './styles'
import { useAppTheme } from 'app/data'
import { CrudRowActions } from './Crud'
import { Form } from '../../form'

export const DetailView = props => {
  const { list, detail, setShowDetailView, measurements, crudfunctions } =
    props
  const [themeState] = useAppTheme()
  const [listsState, listsDispatch] = useLists()
  const [collapse, setCollapse] = useState(false)

  // get current FormElements based on detail that changes based on row clicked
  const [formElements, setFormElements] = useState([])
  useEffect(() => {
    const formelements = []
    // console.log(detail)
    Object.entries(detail).map(el =>
      listsState.columns.map(f => {
        if (
          el[0] === f.crudcolumnid.toLowerCase() &&
          f.iscolumn &&
          f.formelement &&
          f.formelement.length > 0
        ) {
          f.formelement[0]['defaultvalue'] = el[1]
          return formelements.push(f.formelement[0])
        }
      })
    )
    setFormElements(formelements)
  }, [detail])

  // needs to be a function to rerender formElements
  function FormComponent (props) {
    return <Form formElements={props.formElements} />
  }

  return (
    <DetailViewContainer
      collapse={collapse}
      style={{
        width: collapse ? measurements.width - 30 : '50%',
        height: measurements.height
      }}
    >
      <DetailViewContentContainer>
        <DetailViewHeader>
          Detail View
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto'
            }}
          >
            {collapse ? (
              <FaChevronRight
                onClick={() => setCollapse(false)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <FaChevronLeft
                onClick={() => setCollapse(true)}
                style={{ cursor: 'pointer' }}
              />
            )}
            <FaTimesCircle
              style={{ paddingLeft: '5px', cursor: 'pointer' }}
              onClick={() => setShowDetailView(false)}
            />
          </div>
        </DetailViewHeader>
        <DetailViewBody>
          <FormComponent formElements={formElements} />
          <div
            style={{
              // border: '1px solid red',
              display: 'flex',
              justifyContent: 'end',
              padding: '20px 0px 5px 0px'
            }}
          >
            {list.crudaction &&
              list.crudaction.length > 0 &&
              list.crudaction.map(action => action.peritem).includes(1) && (
                <CrudRowActions
                  list={list}
                  row={detail}
                  crudfunctions={crudfunctions}
                />
              )}
          </div>
        </DetailViewBody>
      </DetailViewContentContainer>
    </DetailViewContainer>
  )
}
