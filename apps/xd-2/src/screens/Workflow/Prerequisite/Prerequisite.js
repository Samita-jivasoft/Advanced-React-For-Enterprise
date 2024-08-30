import { FaArrowUp, FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useApp, useAppTheme, useHeader } from 'app/data'
//import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib'
import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib/dist/components'

export const WorkflowPrerequisite = props => {
  const [themeState, themeDispatch] = useAppTheme()
  const [appState, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()

  return (
    <div
      style={{
        color: themeState.currentTheme.text,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        backround: 'red'
        // border: '1px solid red'
      }}
    >
      <motion.div
        animate={{
          y: ['20%', '-40%']
        }}
        transition={{
          y: {
            duration: 0.6,
            yoyo: Infinity,
            ease: 'easeOut'
          },
          repeatDelay: 1
        }}
      >
        <FaArrowUp style={{ margin: '10px' }} />
      </motion.div>
      {/* <div>This Workflow requires an agency to continue;</div> */}
      <div>Please search for an agency above.</div>
      <div style={{ margin: 20, display: 'flex', flexDirection: 'row' }}>
        {/* <DynamicButtonV2
      backgroundColor={themeState.currentTheme.primaryColor}
          onClick={() => {
            appDispatch({ type: 'APPSTATE_SHOW_SEARCH' })
          }}
          icon={<FaSearch color={'white'} />}
          color={'white'}
          text={'Search'}
        /> */}
        <DynamicButtonV2
          backgroundColor={'red'}
          onClick={() => {
            appDispatch({ type: 'UNSELECT_WORKFLOW' })
            headerDispatch({ type: 'RESET_HEADER' })
          }}
          color={'white'}
          text={'Cancel'}
        />
      </div>
    </div>
    //      <div style={{height:'100vh',width:'100vw'}}>
    //      <Search
    //    onClose={
    // ()=>{appDispatch({ type: 'UNSELECT_WORKFLOW' })}
    //    }
    //    showDefaultOverlay={true}
    //      />
    //    </div>
  )
}
