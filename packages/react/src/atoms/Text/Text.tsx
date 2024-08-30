import React from 'react'
import FontSizes from '../../foundation/FontSize'

interface TextProps {
    size?: keyof typeof FontSizes
    children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({ size = 'base', children }) => {
    const className = `dse-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text
