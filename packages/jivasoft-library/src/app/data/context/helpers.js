import { xs,sm,md,lg,xl } from "app/constants"

//ThemeContext Helpers
export function detectViewportBreakpoint(viewWidth) {
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