import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp, FaExclamation, FaExclamationCircle, FaTimes } from 'react-icons/fa'
import { useViewport } from 'app/data'
import { md } from 'app/constants'
import { MAX_Z_INDEX } from 'app/theme'
import { MessagePaneStyled, ErrorExitStyled } from './Styles/ErrorPane'
import { DynamicButtonV2 } from '../DynamicButtonV2'
export const MessagePane = ({ text, detail, onClose, header, children }) => {
    const [seeMore, setSeeMore] = useState(false)

    const { viewWidth, viewHeight } = useViewport()
    //     <div onClick={() => { setSeeMore(!seeMore) }}>
    //     {!seeMore && <FaChevronDown />}
    //     {/* {seeMore &&<FaChevronUp color={'red'} />} */}

    // </div>
    return (
        <MessagePaneStyled
            animate={{ translateX: '-10px' }}
            tansition={{ duration: 0.6, times: [0.25, 0.25] }}
        >

           {children}


            <ErrorExitStyled
                
            >
               <DynamicButtonV2
               onClick={()=>{
                onClose && onClose()

               }}
              
                type={'circle'}
                icon={<FaTimes />
                }
            />
            </ErrorExitStyled>


        </MessagePaneStyled>

    )
}
