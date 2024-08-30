import { useEffect } from 'react'
export function useOutsideAlerter (refs, onClickOutside) {
  useEffect(() => {
    function handleClickOutside (event) {
      // Check if the click occurred outside any of the provided refs
      if (
        !refs.some(ref => ref.current && ref.current.contains(event.target))
      ) {
        onClickOutside()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, onClickOutside])
}
