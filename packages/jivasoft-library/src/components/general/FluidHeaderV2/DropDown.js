import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { ItemsContainer,ItemsContainerWrapper} from './style';

export const DropDown = (props) => {
    const [clicked, setClicked] = useState(true)
    const handleClick = () => {
        setClicked((previous) => {
            return !previous
        })
    }
    return ( 
        <ItemsContainerWrapper
        className='toggle-wrapper'>
            { clicked ? (
                <div className='children-container'>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <FaChevronUp 
                            onClick={() => handleClick()}
                        /> 
                    </div>
                    <ItemsContainer className='children'>{props.children}</ItemsContainer>
                </div>
            ) : (
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <FaChevronDown 
                            onClick={() => handleClick()}
                        /> 
                </div>
            )}
        </ItemsContainerWrapper>
    )
}