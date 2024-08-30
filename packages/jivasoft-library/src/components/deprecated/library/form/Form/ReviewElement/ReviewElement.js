import { useAppTheme, useStep } from "app/data"
import { DynamicButtonV2 } from "../../../general"
import { FormElement } from "../../FormElement/Main"
import { InputContainerStyled } from "../../FormElement/styles/Main"
import { useEffect, useState } from "react"
import { FaCheck, FaPen, FaTimes } from "react-icons/fa"
import { ReviewElementDatetime } from "./Datetime"
import React from 'react'

export const FormReviewElement = (props) => {
    const [themeState,] = useAppTheme()
    const [isEditing, setIsEditing] = useState()
    const { element, } = props
    const [isValid, setIsValid] = useState(element.isValid)

    function getReviewElement() {
        const curEl = (props.parentState.find((e) => { return e.formelementid === element.element.formelementid }))
        // setIsValid(curEl.isValid)

        let datatype = element.element.datatype
        let value = element.value;
        let masktype = element.element.masktype
        switch (datatype) {
            case 'picklist':
            case 'float':
            case 'int':
            case 'string':
                element.element.defaultvalue = curEl.value
                return element.value ? <div style={{ textAlign: 'center',}}>{element.value}</div> : <div style={{ textAlign: 'center', color: themeState.currentTheme.warnColor }}>This field is empty...</div>
            case 'date':
                return <ReviewElementDatetime type={masktype} />
            case 'datelist':
                return <ReviewElementDatetime value={value} type={datatype} />
            default:
                return  <div style={{ textAlign: 'center', color: themeState.currentTheme.warnColor }}>This field is empty...</div>
        }
    }
    // const [disabled,setDisabled] = useState(element.isValid?false:true)
    useEffect(() => {
        const curEl = (props.parentState.find((e) => { return e.formelementid === element.element.formelementid }))
        setIsValid(curEl.isValid)
        // if(isEditing){
        //     // console.log(curEl)
        //     element.element.defaultvalue=curEl.value
        // }
    }, [props.parentState])
    return (!isEditing ? <InputContainerStyled
        style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',textAlign:'center'}}

    >
        <div style={{width:'80%'}}> 
         <div style={{ textAlign: 'center', fontWeight: 'bold', margin: 5, }}>{element.label}</div>
            {getReviewElement()}
            {/* <div style={{ textAlign: 'left', fontWeight: 'bold', margin: 5, }}>{element.label}</div>{element.value ? <div style={{ textAlign: 'left', display: 'flex' }}>{element.value}</div> : <div style={{ textAlign: 'left', color: themeState.currentTheme.warnColor }}>This field is empty...</div>} */}
        </div>
        <div style={{ width: '20%' }}>

            <DynamicButtonV2
                backgroundColor={themeState.currentTheme.overlayNeutral}
                icon={<FaPen />}
                onClick={() => {
                    setIsEditing(true)

                }}
                color={themeState.currentTheme.text}
            />
        </div>

    </InputContainerStyled> :
        <InputContainerStyled
        style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80%'
            }}>
                <FormElement
                    parentState={props.parentState}
                    //  thing={true}
                    setParentState={props.setFormState}
                    element={element.element}
                />            </div>
            <div style={{ width: '20%' }}>
                <div>
                    {isValid ? <DynamicButtonV2
                        backgroundColor={themeState.currentTheme.successColorBase}
                        icon={<FaCheck />}
                        disabled={false}
                        onClick={() => {
                            props.updateForm()
                            setIsEditing(false)

                        }}
                        color={themeState.currentTheme.text}
                    /> : <DynamicButtonV2
                        backgroundColor={themeState.currentTheme.successColorBase}
                        icon={<FaCheck />}
                        disabled={true}
                        onClick={() => {
                            props.updateForm()
                            setIsEditing(false)

                        }}
                        color={themeState.currentTheme.text}
                    />}
                </div>
                <div style={{ marginTop: 5 }}
                >

                    <DynamicButtonV2
                        backgroundColor={themeState.currentTheme.dangerColorBase}
                        icon={<FaTimes />}
                        onClick={() => {

                            setIsEditing(false)

                        }}
                        color={themeState.currentTheme.text}
                    />
                </div>
            </div>

        </InputContainerStyled>
    )
}