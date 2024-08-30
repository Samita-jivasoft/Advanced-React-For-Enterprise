import React from "react";
import ReactDOM from 'react-dom'

import { Color, Text } from '@advanced-react-for-enterprise/react'


import '@advanced-react-for-enterprise/scss/lib/Utilities.css'
import '@advanced-react-for-enterprise/scss/lib/Text.css'
import '@advanced-react-for-enterprise/scss/lib/global.css'

ReactDOM.render(
    <Text size='lg'>this is some text</Text>,
    document.querySelector('#root')
)