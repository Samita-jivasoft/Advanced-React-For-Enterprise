import styled from "styled-components";
import { useElement } from "../data/ElementContext";
import { ElementStatusStyled, ElementStatusValid,ElementStatusInvalid } from "../styles/Main";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { isValid } from "../helpers";
import React, { useEffect, useState } from 'react'

export const ElementStatus = () => {
    const [elementState,] = useElement(); const { remainingRequirements, isEdit } = elementState
    // TODO: make text lighter
    const [valid, setValid] = useState(false)
    useEffect(() => {
        setValid(isValid(remainingRequirements))
    }, [remainingRequirements])

    const InputStatus = () => {
        return isEdit ? valid ? <ElementStatusValid /> : <ElementStatusInvalid /> : null
    }


    return <ElementStatusStyled
    >
        {/* Input-Mode Statuses */}
        <InputStatus />

        {/* Other Statuses  */}
        {/* ... */}
    </ElementStatusStyled>
}