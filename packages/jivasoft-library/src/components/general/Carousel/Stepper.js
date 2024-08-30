import React from 'react';
import { StyledDotDiv, StyledStepperDiv } from './styles';


export const CarouselButtons = ({totalItems,setCurrentIndex,currentIndex}) =>{
    const pageNumbers = [];

    for(let i=0; i<=Math.ceil(totalItems); i++){
        pageNumbers.push(i);
    }

    return(
        <StyledStepperDiv>
            {pageNumbers.map((number) => (
                <StyledDotDiv
                    key={number}
                    active={currentIndex === number}
                    onClick={() => setCurrentIndex(number)}
                >
                </StyledDotDiv>
            ))}
        </StyledStepperDiv>
    )     
}