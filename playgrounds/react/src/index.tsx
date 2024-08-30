import React from 'react'
import ReactDOM from 'react-dom'

import { Text, Margin } from '@advanced-react-for-enterprise/react'


import '@advanced-react-for-enterprise/scss/lib/Utilities.css'
import '@advanced-react-for-enterprise/scss/lib/Text.css'
import '@advanced-react-for-enterprise/scss/lib/Margin.css'
import '@advanced-react-for-enterprise/scss/lib/global.css'

ReactDOM.render(
    <div>
        <Margin>
            <Text size='xs'>this is some text</Text>
        </Margin>
    </div>,
    document.querySelector('#root')
)