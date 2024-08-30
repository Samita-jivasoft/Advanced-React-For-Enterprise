import { Form, Message } from './layout'
import React from 'react'
import { Capitalize } from './layout/Message/helpers'

export function getLayout (props) {
  return <Form className={'layout-container'} {...props} />
}

export function getMessageProps (props) {
  let { label } = props
  // if (label) {
  //   props = { ...props, label: 'Message' }
  // }
  return props
}
export function getLayoutProps (props) {
  let { layout, elements, label, formElements } = props
  let newProps

  //consolidate elements

  //fix labels
  newProps = {
    ...props,
    elements: formElements ? formElements : elements ? elements : [],
    label: label ? Capitalize(label) : label
  }

  switch (layout) {
    case 'message':
      newProps = getMessageProps(newProps)
    default:
      return newProps
  }
  return newProps
}

export function getFormProps (props) {
  console.log('props', props)
  let { layout, elements, label, formElements } = props
  const formProps = {
    // elements: 
  }

  return formProps
}
