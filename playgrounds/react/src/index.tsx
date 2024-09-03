import React from 'react'
import ReactDOM from 'react-dom'

import { Select } from '@advanced-react-for-enterprise/react'

import '@advanced-react-for-enterprise/scss/lib/Utilities.css'
import '@advanced-react-for-enterprise/scss/lib/Text.css'
import '@advanced-react-for-enterprise/scss/lib/Margin.css'
import '@advanced-react-for-enterprise/scss/lib/Select.css'
import '@advanced-react-for-enterprise/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    {/* <Select options={options} renderOption ={({option, getOptionRecommendedProps})=> <p{...getOptionRecommendedProps()}>{option.label}</p>}/> */} 
    </div>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />