import React, { useEffect, useState } from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa'
import { CompletedRecsStyled, RemainingRecsStyled } from './styles/Main'

export function ShowErros ({ email, passwordSalt }) {
    const [remainingRequirements, setRemainingRequirements] = useState('')
    const [completedRequirements, setCompletedRequirements] = useState('')
    const [reqs, setReqs] = useState({
        minlength: element.validminimum,
        maxlength: element.validmaximum,
        required: element.required,
    })
    useEffect(() => {
    if (reqs) { formValidation() }
    }, [reqs])
    
  function stringContainsSpecial (string) {
    return /[^A-Z a-z0-9]/.test(string)
  }
  function stringContainsLower (str) {
    return /[a-z]/.test(str)
  }
  function stringContainsUpper (str) {
    return /[A-Z]/.test(str)
  }
  function stringContainsNumber (string) {
    return /\d/.test(string)
  }

  function formValidation () {
    const remainingRequirements = []
    const completedRequirements = []

    if (password.length < reqs.minlength) {
      remainingRequirements.push(
        <RemainingRecsStyled>
          <FaTimes /> <b>{reqs.minlength + ' or more characters'}</b>
        </RemainingRecsStyled>
      )
    } else {
      completedRequirements.push(
        <CompletedRecsStyled>
          <FaCheck /> <b>{reqs.minlength + ' or more characters'}</b>
        </CompletedRecsStyled>
      )
    }
 
    if (!stringContainsNumber(password)) {
      remainingRequirements.push(
        <RemainingRecsStyled>
          <FaTimes /> <b>Contains at least one number</b>
        </RemainingRecsStyled>
      )
    } else {
      completedRequirements.push(
        <CompletedRecsStyled>
          <FaCheck /> <b>Contains at least one number</b>
        </CompletedRecsStyled>
      )
    }

    if (!stringContainsSpecial(password)) {
      remainingRequirements.push(
        <RemainingRecsStyled>
          <FaTimes />{' '}
          <b>Contains at least one special character e.g., ! @ # ? ]</b>
        </RemainingRecsStyled>
      )
    } else {
      completedRequirements.push(
        <CompletedRecsStyled>
          <FaCheck />{' '}
          <b>Contains at least one special character e.g., ! @ # ? ]</b>
        </CompletedRecsStyled>
      )
    }

    if (!stringContainsLower(password)) {
      remainingRequirements.push(
        <RemainingRecsStyled>
          <FaTimes /> <b>Contains at least one lower case character</b>
        </RemainingRecsStyled>
      )
    } else {
      completedRequirements.push(
        <CompletedRecsStyled>
          <FaCheck /> <b>Contains at least one lower case character</b>
        </CompletedRecsStyled>
      )
    }
    if (!stringContainsUpper(password)) {
      remainingRequirements.push(
        <RemainingRecsStyled >
          <FaTimes /> <b>Contains at least one upper case character</b>
        </RemainingRecsStyled>
      )
    } else {
      completedRequirements.push(
        <CompletedRecsStyled>
          <FaCheck /> <b>Contains at least one upper case character</b>
        </CompletedRecsStyled>
      )
    }
    setRemainingRequirements(remainingRequirements)
    setCompletedRequirements(completedRequirements)
  }
 
  return !validPasswordMessage && (
        <div style={{ width: '100%' }}>
          <div>{remainingRequirements}</div>
          <div>{completedRequirements}</div>
        </div>
    )
}
// use effect for main parent update
useEffect(() => {
  // console.log(parseFloat(DefaultValue).toFixed(2).toString())
  // console.log('Form', formElementValue)
  // const parentCopy = [...parentState]
  // console.log('parentCopy',parentCopy)
  // const index = parentCopy.findIndex(
  //   obj => obj.formelementid === formElementValue.formelementid
  // )
  // if (index !== -1) {
  //   parentCopy[index].value = formElementValue.value
  // } else {
  //   parentCopy.push(formElementValue)
  // }
  // setParentState(parentCopy)
  setParentState(state => [
    ...state.filter(e => {
      return e.formelementid !== formElementValue.formelementid
    }),
    formElementValue
  ])
}, [formElementValue])
//email
    // value.includes('@')
    // ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character @'}</b> </CompletedRecsStyled> )
    // : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character @'}</b> </RemainingRecsStyled> )
    
    // value.includes('.')
    // ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character .'}</b> </CompletedRecsStyled> )
    // : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character .'}</b> </RemainingRecsStyled> )

    //phone
    // !value.includes('(')
    // ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains opening brace ('}</b> </RemainingRecsStyled> )
    // : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains opening brace ('}</b> </CompletedRecsStyled> )

    // !value.includes(')')
    // ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains closing brace )'}</b> </RemainingRecsStyled> )
    // : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains closing brace )'}</b> </CompletedRecsStyled>  )

    // value.includes(')-') && value.replace(/[^-]/g, '').length !== 2
    // ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character -'}</b>  </RemainingRecsStyled> )
    // : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character -'}</b> </CompletedRecsStyled>  )

    // !value.includes('-')
    // ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character -'}</b> </RemainingRecsStyled> ) 
    // : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character -'}</b> </CompletedRecsStyled>  )

    // RegExp(/[^a-zA-Z]+$/).test(value)
    // ?  null 
    // : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Invalid characters detected'}</b> </RemainingRecsStyled> )


    //money
        // (validCurrency.test(value)) 
    // ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Valid format of 0.00'}</b> </CompletedRecsStyled>  )
    // : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Valid format of 0.00'}</b> </RemainingRecsStyled> ) 

    //ints
        // if(isNaN(value) && value)remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains invalid characters'}</b> </RemainingRecsStyled> )
    // else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains valid characters'}</b> </CompletedRecsStyled>  )

    // console.log(value)
    // if((value - Math.floor(value)) !== 0 || value.includes('.')) remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Value is not an Integer'}</b> </RemainingRecsStyled> )
    // else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Value is an Integer'}</b> </CompletedRecsStyled>  )  

    //float

        // if(isNaN(value) && value)remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains invalid characters'}</b> </RemainingRecsStyled> )
    // else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains valid characters'}</b> </CompletedRecsStyled>  )
    
    // if(value.includes('.')) completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Value is valid'}</b> </CompletedRecsStyled>  ) 
    // else remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Value is invalid'}</b> </RemainingRecsStyled> )

    