import React from 'react'
import Select from './Select'

import '@advanced-react-for-enterprise/scss/lib/Select.css'

const options = [{
    label: 'Strict Black',
    value: 'black'
}, {
    label: 'Heavenly Green',
    value: 'green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

export default {
    title: 'Select'
}

export const Common = () => <Select options={options} />