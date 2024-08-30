import React, { useEffect, useRef, useState } from 'react'
import { CarouselButtons } from './Stepper'
import { StyledMainDiv } from './styles'
import { CarouselSwitcher } from './Switch'

export const Carousel = ({
  height = '100%',
  width = '100%',
  margin = '5%',
  background = null,
  carouselList = [],
  delay = 3000,
  showStepper = true,
  showNav = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexOfLastItem = currentIndex + 1
  const indexOfFirstItem = indexOfLastItem - 1
  const currentItem = carouselList.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <StyledMainDiv
    height={height}
    width={width}
    margin={margin}
    background={background}
  >
    {/* <StyledSlideShowDiv> */}
    <CarouselSwitcher
      carouselList={carouselList}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      showNav={showNav}
      currentItem={currentItem}
      delay={delay}
    />
    {/* </StyledSlideShowDiv> */}

    {showStepper && (
      <CarouselButtons
        totalItems={carouselList.length - 1}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    )}
  </StyledMainDiv>
  )
}
Carousel.defaultProps = {
  height: '100%',
  width: '100%',
  margin: '5%',
  background: null,
  carouselList: [],
  delay: 3000,
  showStepper: true,
  showNav: true
}

