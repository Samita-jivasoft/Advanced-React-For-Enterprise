import React from "react";
import ReactDOM from 'react-dom'

import { Color } from '@advanced-react-for-enterprise/react'
import '@advanced-react-for-enterprise/scss/lib/Utilities'

ReactDOM.render(
    <Color hexCode='#000' width='lg' height='lg' />,
    document.querySelector('#root')
)