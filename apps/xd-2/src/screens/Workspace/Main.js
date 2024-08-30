import React, { useEffect, useRef, useState } from 'react'
import { base, beta, build, getUserContext, testing } from 'app/api'
import {
  useUI,
  useApp,
  useAuth,
  useStep,
  useMenu,
  useHeader,
  useAppTheme,
  useSuspend,
  useViewport,
  WorkflowContextProvider
} from 'app/data'
import {
  lg,
  md,
  sm,
  xl
} from '@jivasoft/jivasoft-lib/dist/app/constants/breakpoints.js'
import { useMessages } from '@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js'
import {
  AnimatedErrorPane,
  DynamicButtonV2,
  DynamicFlexHeader,
  SkeletonLoader,
  Search,
  CustomMenu
} from '@jivasoft/jivasoft-lib/dist/components'
import { Dashboard } from 'components/Dashboard'
import { SideBar } from 'components/SideBar'
import { Workflow } from 'screens/Workflow'
import { MdMenu } from 'react-icons/md'
import {
  WorkflowBufferStyled,
  WorkspaceBodyStyled,
  WorkspaceMainStyled,
  WorkspaceNavbarBufferStyled
} from './styles'
import { WorkspaceMessages } from './Messages'
import { GiPoliceBadge } from 'react-icons/gi'
import { AiFillFire } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { setUIStates } from 'app/helpers'

export const Workspace = () => {
  const [authState, authDispatch] = useAuth()
  const [appState, appDispatch] = useApp()
  const [uiState, uiDispatch] = useUI()
  const [messageState, messageDispatch] = useMessages()

  const { viewWidth } = useViewport()
  const { value, value2 } = useSuspend()
  const [suspendState, suspendDispatch] = value
  const [stepState, stepDispatch] = useStep()
  const [isLoading, setIsLoading] = useState(true)
  const [cacheLoaded, setCacheLoaded] = useState(false)
  const [scrollTopY, setScrollTopY] = useState(0)
  const [menuState, menuDispatch] = useMenu()
  const [navState, setNavState] = useState([])
  const [usercontextError, setUsercontextError] = useState(false)
  const [headerState, headerDispatch] = useHeader()
  const [multiSelect, setMultiSelect] = useState(false)
  const navigate = useNavigate()

  function setUIBasedOnCurrentWF () {}
  const [overlayActive, setOverlayActive] = useState(false)
  useEffect(() => {
    // console.log('overlayActive', overlayActive)
    if (overlayActive) {
      uiDispatch({
        type: 'SET_UI',
        showNav: false,
        navExpanded: false
      })
    } else {
      setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)
    }
  }, [overlayActive])

  useEffect(() => {
    navigate('/', { replace: true })
  }, [])
  useEffect(() => {
    if (appState.startupworkflow) {
      appDispatch({
        type: 'SELECT_WORKFLOW',
        currentWorkflow: appState.startupworkflow,
        currentWorkflowType: 'startup'
      })
    }
  }, [appState.startupworkflow])

  // useEffect(() => {
  //   if(appState?.buildnumber){
  //     if(appState?.buildnumber !== build){
  //       messageDispatch({ type: 'ADD_MESSAGE', message: {
  //         id:generateUUID(),
  //       children:[<DynamicButtonV2
  //       backgroundColor={themeState.currentTheme.successColor}
  //       text={'Update Now'}
  //       onClick={()=>{
  //         window.location.reload(true);
  //       }}
  //       color={'white'}
  //       />],
  //       formelements:[{'label':'New App Update Available'}]} })

  //     }

  //   }

  // }, [appState?.buildnumber])

  useEffect(() => {
    if (!appState?.currentWorkflow) {
      headerDispatch({ type: 'RESET_HEADER' })
    }
    if (appState?.currentWorkflow) {
      setIsAnimating('enter')
    } else {
      setIsAnimating('exit')
    }
    // console.log('viewWidth', viewWidth)
    setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)

    if (appState?.currentWorkflow) {
      headerDispatch({
        type: 'SET_HEADER',
        title: appState?.currentWorkflow?.friendlyname
          ? appState?.currentWorkflow?.friendlyname
          : ''
        // items: appState?.currentWorkflow?.items
        // size:'normal'
      })
    }
  }, [appState.currentWorkflow, viewWidth])

  function initWorkspace (isSubscribed) {
    appDispatch({ type: 'RESET_APP' })
    headerDispatch({ type: 'RESET_HEADER' })

    setUsercontextError(false)
    if (authState.token !== null || '' || undefined) {
      getUserContext(authState.token).then(result => {
        if (!result.error) {
          if (appState.modal) {
            appDispatch({ type: 'UNSET_MODAL' })
          }
          if (isSubscribed) {
            authDispatch({
              type: 'USERCONTEXT_SUCCESS',
              usercontext: result.apiData
            })
          }
        } else {
          if (isSubscribed) {
            authDispatch({
              type: 'USERCONTEXT_FAILURE',
              usercontext: result.apiData
            })

            appDispatch({
              type: 'SET_MODAL',
              currentModal: (
                <AnimatedErrorPane
                  onClose={() => {
                    authDispatch({ type: 'LOGOUT_REQUEST' })
                  }}
                  text={`There was an error loading your Account. Please log out and try again later.`}
                  detail={result.error.message}
                >
                  <DynamicButtonV2
                    backgroundColor={themeState.currentTheme.dangerColor}
                    color={'white'}
                    text={'Log out'}
                    onClick={() => {
                      authDispatch({ type: 'LOGOUT_REQUEST' })
                    }}
                  />
                </AnimatedErrorPane>
              )
            })
          }
        }
      })
    }
  }

  //Replace the usercontext with a cached value if the api takes too long
  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (!authState.usercontext) {
        if (window.localStorage !== undefined) {
          const data = window.localStorage.getItem('user_context')
          if (data !== null) {
            appDispatch({
              type: 'APPSTATE_INIT',
              usercontext: JSON.parse(data)
            })
          } else {
            //Appdispatch
          }
        }
        setCacheLoaded(true)
      }
    }, 10000)
    return () => {
      clearTimeout(timer1)
    }
  }, [authState])

  const Welcome = () => {
    return <div style={{ color: 'black' }}>Welcome to XD2</div>
  }
  //CLEAR THE MENU STATE IF THE STEPSTATE CHANGES (a change here suggests the user has moved on, no longer needing menu)
  useEffect(() => {
    if (menuState?.menuObject) {
      menuDispatch({
        type: 'SET_MENUOBJECT',
        clicked: false
      })
    }
  }, [stepState])

  // this useEffect only happens once, so we dont need to reset the ui because its already been set somewhere else
  useEffect(() => {
    let isSubscribed = true
    initWorkspace(isSubscribed) // this inital call is resetting the ui state
    return () => (isSubscribed = false)
  }, [])

  useEffect(() => {
    if (authState) {
      authState.usercontext &&
        appDispatch({
          type: 'APPSTATE_INIT',
          usercontext: authState.usercontext
        })
      authState.usercontext &&
        window.localStorage.setItem(
          'user_context',
          JSON.stringify(authState.usercontext)
        )
      if (authState.usercontext && cacheLoaded) {
        setCacheLoaded(false)
      }
    }
  }, [authState])

  const [themeState, dispatch] = useAppTheme()

  const [scrolling, setScrolling] = useState(0)
  const [y, sety] = useState(0)

  const listInnerRef = useRef()

  //if the app is set in the context, set isLoading state to false
  useEffect(() => {
    if (appState.apps && appState.apps.length > 0) {
      setIsLoading(false)
    }
  }, [appState.apps])

  //dispatch an error pane stating the apps were not loaded properly
  useEffect(() => {
    if (cacheLoaded) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedErrorPane
            text={
              'We ran into an error loading your profile. Some of your Workflows might not work properly.'
            }
            onClose={() => {
              appDispatch({ type: 'UNSET_MODAL' })
            }}
          />
        )
      })
    }
  }, [cacheLoaded])

  function onScroll (e) {
    var y = e.currentTarget.scrollTop
  }

  //if step or workflow id changes, delete the messages
  useEffect(() => {
    messageDispatch({ type: 'CLEAR_MESSAGE' })
  }, [stepState.stepid])

  const [isAnimating, setIsAnimating] = useState()

  //Controls the item select mode for the search component from single to multi select
  //based on the number of agency required for the workflow
  useEffect(() => {
    if (appState?.currentWorkflow) {
      if (appState?.currentWorkflow?.agencyrequired > 1) {
        setMultiSelect(true)
      } else if (appState?.currentWorkflow?.agencyrequired <= 1) {
        setMultiSelect(false)
      } else {
        setMultiSelect(false)
      }
    } else {
      setMultiSelect(false)
    }
  }, [appState?.currentWorkflow])

  return (
    <>
      {/* <DateSelector/> */}
      {appState['currentWorkflowModal'] && appState['currentWorkflowModal']}
      {appState['modal'] && appState['modal']}
      {messageState?.messages?.length > 0 && <WorkspaceMessages />}
      {/*menuState.clicked && */}
      {/* <div style={{
        rotate:'-90deg',
        zIndex:999,background:themeState.currentTheme.bg0,right:-30,top:'50%',position:'absolute',padding:10,}} onClick={()=>{
          appDispatch({type:'SELECT_WORKFLOW',currentWorkflow:{friendlyname:'Feedback',workflowid:'22BBB007-2360-43C2-911E-5F1D1D0358FE'}}) 
        }}>Feedback</div> */}
      <CustomMenu
      // menuItems={menuState?.menuObject?.menuItems}
      />
      <WorkspaceMainStyled className='main-workspace-container'>
        {/* header is absolutely positioned, behind navbar */}
        {/* <WorkspaceNavbar /> */}
        {/* <SideBar applications={appState.modules}/> */}
        {/* <StyledWorkspaceMainContainer> */}
        {usercontextError}
        {/* {console.log('in WORKSPACE', uiState.showNav)} */}
        {uiState.showNav && (
          <WorkspaceNavbarBufferStyled className='workspace-navbar-buffer'>
            {isLoading && <SkeletonLoader type={'sidebar'} />}
            {!isLoading && <SideBar applications={appState.apps} />}
          </WorkspaceNavbarBufferStyled>
        )}
        <WorkspaceBodyStyled
          className='workspace-body'
          width={
            uiState?.showNav
              ? viewWidth > 600
                ? uiState?.navExpanded
                  ? 'calc(100% - 240px)'
                  : 'calc(100% - 60px)'
                : 'calc(100% - 60px)'
              : '100%'
          }
        >
          {/* <WorkspaceSearchBufferStyled
            backgroundColor={appState.currentWorkflow ? themeState.currentTheme.panel0 : null}
          > */}
          {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center', flex:0}}> */}
          <DynamicFlexHeader
            enableScrollResize={true}
            size={headerState.size}
            backgroundColor={
              appState?.currentWorkflow ? themeState.currentTheme.bg0 : null
            }
            title={headerState.title}
            mode={'hide'}
            height={58}
            // centerItems={<Search />}
            centerItems={
              <div
                style={{
                  display: appState?.agencies?.length > 1 ? 'flex' : 'none'
                }}
              >
                <Search
                  items={appState?.agencies}
                  overlayActive={state => setOverlayActive(state)}
                  groups={appState?.apps[0]?.agencygroups}
                  placeholder={'Search for an Agency'}
                  allowMultipleSelect={multiSelect}
                  allowAlphabetical={true}
                  idIdentifier={'agencyid'}
                  onSelect={selected => {
                    appDispatch({
                      type: 'SELECT_AGENCY',
                      currentAgency: selected
                    })
                  }}
                  unSelect={() => appDispatch({ type: 'UNSELECT_AGENCY' })}
                  icons={[
                    { name: 'fire', icon: <AiFillFire size={'1.5rem'} /> },
                    { name: 'police', icon: <GiPoliceBadge size={'1.5rem'} /> }
                  ]}
                />
              </div>
            }
            // backgroundColor={'red'}
            rightIcons={headerState.rightIcons}
            items={headerState.items}
            leftIcons={
              uiState.showNav
                ? null
                : [
                    <DynamicButtonV2
                      key={'sidenavbutton'}
                      icon={<MdMenu style={{ fontSize: '2rem' }} />}
                      color={themeState.currentTheme.text}
                      onClick={() => {
                        //UI UPDATES EDGE CASE UPDATE
                        viewWidth > md
                          ? setUIStates(
                              uiDispatch,
                              viewWidth,
                              appState.currentWorkflow,
                              null
                            )
                          : uiDispatch({
                              type: 'SET_UI',
                              showNav: true,
                              navExpanded: true
                            })
                      }}
                    />
                  ]
            }
            color={themeState.currentTheme.text}
            position={'flex-start'}
            scrollTopY={scrollTopY}
          />
          {/* </div> */}
          {/* </WorkspaceSearchBufferStyled> */}
          <WorkflowBufferStyled
            className='workflow-buffer'
            ref={listInnerRef}
            onScroll={e => onScroll(e)}
            // onScroll={(e)=>{
            // if (listInnerRef.current) {

            //   sety(listInnerRef.current.scrollTop)
            //   const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            //   if (scrollTop<y) {
            //     setScrolling(100)
            //   } else{
            //     if (scrollTop>y) {
            //       setScrolling(30)
            //     }
            //   }
            // }
            // }}
            padding={uiState.showNav ? '0px 0px 0px 0px' : '0px 0px 0px 0px'}
          >
            {/* routes go here?? */}

            {/* <StyledWorkflowHeader>
              {navState}
            </StyledWorkflowHeader> */}

            <Workflow
              viewWidth={viewWidth}
              workflow={appState.currentWorkflow}
              setScrollTopY={setScrollTopY}
            />

            {!appState.currentWorkflow && <Dashboard />}
          </WorkflowBufferStyled>
          {/* <Workflow 
          //  width={uiState.showNav ? "calc(100vw - 80px)" : '100%'}
          /> */}
        </WorkspaceBodyStyled>

        {/* <WorkspaceNavheader /> */}
        {/* <WorkspaceBody /> */}
        {/* </StyledWorkspaceMainContainer> */}

        {/* <Toolbar/> */}
      </WorkspaceMainStyled>
      {/* <SuspendedWorkflow /> */}
    </>
  )
}
