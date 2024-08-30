import React from 'react'
import { Spacing } from '@advanced-react-for-enterprise/foundation'

interface MarginProps {
    space?: keyof typeof Spacing
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean
    children?: React.ReactNode // Explicitly define children prop
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ''

    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`
    }

    if (left) {
        className = `${className} dse-margin-left-${space}`
    }

    if (right) {
        className = `${className} dse-margin-right-${space}`
    }

    if (top) {
        className = `${className} dse-margin-top-${space}`
    }

    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`
    }

    return <div className={className.trim()}>{children}</div>
}

export default Margin
