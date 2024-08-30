import React, { useEffect, useRef, useState } from 'react'
import { SpinnerStyled } from './styles/Spinner'

export const LoaderSpinner = props => {
  const { theme = null } = props
  const spinnerRef = useRef(null)
  const [size, setSize] = useState(props.size ? props.size : 100)

  useEffect(() => {
    // handle resize of parent container
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        const newSize = Math.min(width, height)
        if (spinnerRef.current?.offsetParent?.clientHeight < newSize) {
          setSize(spinnerRef.current?.offsetParent?.clientHeight * 0.5)
        } else {
          setSize(newSize)
        }
      }
    })
    if (spinnerRef.current) {
      resizeObserver.observe(spinnerRef.current.parentNode)
    }
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return <SpinnerStyled ref={spinnerRef} size={size} theme={theme} />
}
