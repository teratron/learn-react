import React from 'react'

import Main from './Main'
import Alert from './Alert'
import {AlertProvider} from './AlertContext'

function Hook() {
    return (
        <AlertProvider>
            <dispatchEvent>
                <Alert/>
                <Main toggle={() => {
                }}/>
            </dispatchEvent>
        </AlertProvider>
    )
}

export default Hook
