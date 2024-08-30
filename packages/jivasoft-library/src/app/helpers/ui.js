import { xs, md, lg, xl } from 'app/constants'
export function getBreakpoint (viewWidth) {
  if (viewWidth <= xs) {
    return 'xs'
  } else if (viewWidth > xs && viewWidth < md) {
    return 'sm'
  } else if (viewWidth >= md && viewWidth < lg) {
    return 'md'
  } else if (viewWidth >= lg && viewWidth < xl) {
    return 'lg'
  } else if (viewWidth >= xl) {
    return 'xl'
  }
}

export const detectScroll = (ref, value) => {
  let scrollvalue = 'none'

  if (ref.current) {
    const { scrollTop, scrollHeight, clientHeight } = ref.current
    // console.log(scrollTop,scrollHeight,clientHeight);
    if (scrollTop <= scrollHeight / 4) {
      //console.log(scrollTop, scrollHeight / 4)
      scrollvalue = 'none'
    } else {
      scrollvalue = 'fourth'
    }

    // if (scrollTop + clientHeight === scrollHeight) {
    // }
  }
  return scrollvalue
}
