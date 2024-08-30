import { useElement } from "../../data/ElementContext"
import { getDisplayFormats } from "./handlers"
import { DatetimeDisplayContainer, } from "./styles"
import React from 'react'

export const ElementTypeDatetimeDisplay = () => {
    const [elementState,] = useElement()
    const { value, datatype,masktype } = elementState;
    return <DatetimeDisplayContainer
     
    >
       {getDisplayFormats(value,datatype,masktype)}
    </DatetimeDisplayContainer>
}