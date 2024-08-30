import React, { useEffect, useRef } from 'react'
import { CarouselSlide } from './Slide'
import { StyledLeftIcon, StyledRightIcon } from './styles'


export const CarouselSwitcher = ({
	carouselList,
	currentIndex,
	setCurrentIndex,
	showNav,
	currentItem,
	delay
}) => {
	function handleSlideChangeLeft (currentIndex) {
		if (currentIndex !== 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	function handleSlideChangeRight (currentIndex) {
		if (currentIndex !== carouselList.length - 1) {
			setCurrentIndex(currentIndex + 1)
		}
	}

	function resetTimeout () {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	const timeoutRef = useRef(null)

	useEffect(() => {
		resetTimeout()
		timeoutRef.current = setTimeout(
			() =>
				setCurrentIndex(prevIndex =>
					prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1
				),
			delay
		)
		return () => {}
	}, [currentIndex])

	return (
		<div
			style={{
				boxSizing:'border-box',
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				overflow:'hidden'
			}}
		>
			{showNav && (
				
					<StyledLeftIcon onClick={() => handleSlideChangeLeft(currentIndex)}/>
			)}

			{/* <StyledSwitchDiv>  */}
			<CarouselSlide carouselItem={currentItem}  />
			{/* </StyledSwitchDiv> */}

			{showNav && (
				<StyledRightIcon onClick={() => handleSlideChangeRight(currentIndex)} />
			)}
		</div>
	)
}
