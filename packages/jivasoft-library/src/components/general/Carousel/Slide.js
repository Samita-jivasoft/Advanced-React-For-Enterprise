import React from "react";
import { StyledSlideDiv } from "./styles";

export const CarouselSlide = ({carouselItem}) =>{

  return(
      <StyledSlideDiv
        key={carouselItem}
      >
      {
        carouselItem
      }
      </StyledSlideDiv>
  )
}