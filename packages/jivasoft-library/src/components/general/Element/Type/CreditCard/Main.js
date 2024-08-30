import React, { useEffect, useState } from "react"
import { useElement } from "../../data/ElementContext"
import { getCreditCardDecorators } from "./helpers"
import { enforceCustomFormat } from "./handlers"
import { InputContainer, InputWrapper } from "./styles"
import { InnerWrapper } from "../../groups/styles"
import { ElementTypeCcDisplay } from "./Display"

export const ElementTypeCreditCard = () => {
    const [elementState, elementDispatch] = useElement()
    const { value, remainingRequirements, isEdit } = elementState
    const [format, setFormat] = useState('####-####-####-####');
    // useEffect(()=>{
    //     console.log(remainingRequirements)
    // },[remainingRequirements])
    useEffect(() => {
        if (value?.[0] == 3) {
            if (format !== "####-######-#####") {
                setFormat("####-######-#####")

            }
        } else {
            if (format !== '####-####-####-####') {
                setFormat('####-####-####-####')

            }

        }


    }, [value])
    return isEdit ? <InputContainer>
        {getCreditCardDecorators(value?.[0])}
        <InputWrapper>

            <input
                placeholder='Enter Card Number'
                value={value}
                style={{ paddingLeft: 45 }}
                onChange={(e) => {
                    e.preventDefault()
                    const { value, selectionStart } = e.target
                    const cleanedValue = value.replace(/\D/g, '') // Remove any non-digit characters
                    const formattedValue = enforceCustomFormat(
                        cleanedValue,
                        format,
                        selectionStart
                    )
                    elementDispatch({
                        type: 'SET_VALUE',
                        value: formattedValue?.formattedValue
                    })
                }}
                className={'inputfield'}
            >

            </input>
            <InnerWrapper
                className='INNER-WRAPPER'
                onClick={e => e.stopPropagation()}
                element={elementState}
            />
        </InputWrapper>
    </InputContainer> : <ElementTypeCcDisplay />
}