import { useEffect, useRef, useState } from 'react'
import { StyledMenuSpace, MobileMenuBar } from '.'
import {
  useAppTheme,
  useAuth,
  useViewport,
  useMenu,
  useStep,
  useHeader
} from 'app/data'
import {
  NavbarBufferStyled,
  StyledWorkspaceNavbar,
  WorkspaceNavbarContainerStyled
} from 'screens/Workspace/styles'
import { GoSignOut } from 'react-icons/go'
import { FaHome, FaPen, FaSearch, FaUser } from 'react-icons/fa'
import { useApp, useUI } from 'app/data/context'
import { IconWrapper, SelectedIconWrapper } from './Icon'
import {
  DynamicIcon,
  DynamicSwitcher
} from '@jivasoft/jivasoft-lib/dist/components'
import { useOutsideAlerter } from '@jivasoft/jivasoft-lib/dist/app/helpers/useOutsideAlerter.js'
import { SearchWorkflows } from './Search'
import { IconEdsHat, IconEdsLogo } from 'app/brand'
import IconProfile from './Icon/Profile'
import { getInitials } from 'app/helpers'
import { handleNavBarHover } from './helpers'
import { sm } from 'app/constants'
import { normalizeProperties } from 'app/helpers/sequence'
import { useNavigate } from 'react-router-dom'
import { BiSolidMegaphone } from 'react-icons/bi'
import { setUIStates } from 'app/helpers'

export const SideMenuAppBar = ({ applications }) => {
  const [authState, authDispatch] = useAuth()
  const [appState, appDispatch] = useApp()
  const [uiState, uiDispatch] = useUI()
  const [stepState, stepDispatch] = useStep()
  const [themeState, themeDispatch] = useAppTheme()
  const { viewWidth, viewHeight } = useViewport()
  const [menuData, setMenuData] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [extendBar, setExtendBar] = useState(false)
  const [barSelect, setBarSelect] = useState(false)
  const extendRef = useRef(false)
  const divRef = useRef()
  const [mobileAppSelect, setMobileAppSelect] = useState(false)
  const [sideBarApps, setSideBarApps] = useState([])
  const [testState, setTestState] = useState([])
  const [menuState, menuDispatch] = useMenu()
  const [, headerDispatch] = useHeader()

  const [isAnimating, setIsAnimating] = useState(null)
  const enterTimerRef = useRef(null)
  const navigate = useNavigate()
  var closeObj = [
    {
      icon: (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* <StyledCloseIcon /> */}
          <div style={{ width: 140, height: 70 }}>
            <IconEdsLogo
              background={
                themeState.currentTheme.id == 'light'
                  ? themeState.currentTheme.bga3
                  : 'white'
              }
            />
          </div>
        </div>
      ),
      id: '1',
      func: () => {
        if (!uiState?.navExpanded) {
          //UI UPDATES
          setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)
          setExtendBar(!extendBar)
          if (extendBar) {
            setBarSelect(false)
            setSelectedItem([])
            setMenuData([])
          } else {
            //UI UPDATES
            setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)
          }
        }
      }
    }
  ]

  var barsObj = [
    {
      icon: (
        <div style={{ height: 40, width: 40 }}>
          <IconEdsHat
            background={
              themeState.currentTheme.id == 'light'
                ? themeState.currentTheme.bga3
                : 'white'
            }
          />
        </div>
      ),
      id: '2',
      func: () => {
        if (extendBar) {
          setExtendBar(false)
          setBarSelect(false)
          setSelectedItem([])
          setMenuData([])
        } else {
          setExtendBar(true)
        }
      }
    }
  ]

  useEffect(() => {
    setExtendBar(uiState?.navExpanded)
  }, [uiState?.navExpanded])

  // useEffect(() => {
  //   let appItems = returnSideBarArray(applications)
  //   setSideBarApps(appItems)
  // }, [])

  useEffect(() => {
    let appItems = returnSideBarArray(applications)
    setSideBarApps(appItems)
    if (!extendBar) {
      setIsAnimating(null)
    }
  }, [appState?.currentWorkflow])
  useEffect(() => {
    let appItems = returnSideBarArray(applications)
    setSideBarApps(appItems)
    if (!extendBar) {
      setIsAnimating(null)
    }
  }, [extendBar])

  useEffect(() => {
    if (viewWidth < 500) {
      setMobileAppSelect(true)
    }
  }, [])

  function sortBySequence (item) {
    normalizeProperties(item)
    return item.sort((a, b) => a.sequence - b.sequence)
  }
  //Returns the items thats displayed on the sidebar
  function returnSideBarArray (objectArr) {
    var modules = []
    var menus = []
    let menugroups = []
    let workflows = []
    var arrayLimit = 10

    if (objectArr !== undefined && objectArr !== null && objectArr.length > 0) {
      objectArr.map(item => {
        for (const key in item) {
          if (key === 'modules') {
            modules.push(sortBySequence(item[key]))
            item[key].map(item2 => {
              for (const key in item2) {
                if (key === 'menus') {
                  menus.push(sortBySequence(item2[key]))
                  item2[key].map(item3 => {
                    for (const key in item3) {
                      if (key === 'menugroups') {
                        menugroups.push(sortBySequence(item3[key]))
                        item3[key].map(item4 => {
                          for (const key in item4) {
                            if (key === 'workflows') {
                              workflows.push(sortBySequence(item4[key]))
                            }
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
    }
    modules = modules.flat()
    menus = menus.flat()
    menugroups = menugroups.flat()
    workflows = workflows.flat()

    var items = []
    items.push({
      icon: (
        <IconWrapper label={'Home'} expanded={extendBar}>
          <DynamicIcon
            //TODO: Update it in lib
            icon={
              <FaHome
                style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  marginLeft: '-20px',
                  marginRight: '-20px',
                  paddingLeft: '4px'
                }}
              />
            }

            // label={extendBar ? ele.friendlyname : handleAppInitials(ele)}
          />

          {/* {ele?.friendlyname} */}
        </IconWrapper>
      ),
      id: 'home',
      func: () => {
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      }
    })
    if (appState?.workflows?.length < arrayLimit) {
      appState?.workflows
        ?.filter(
          workflow =>
            workflow?.workflowid !== appState?.currentWorkflow?.workflowid
        )
        .forEach(ele => {
          var label = ele?.friendlyname
          var label = ele?.friendlyname
          var arrItem = {
            // icon: <div style={{
            //   alignItems: 'center', justifyContent: 'center',
            //   color: themeState.currentTheme.text,
            //   textAlign: 'center',
            //   alignContent: 'center', justifyItems: 'center',
            //   height: 35, width: 35, borderRadius: 10, backgroundColor: themeState.currentTheme.material0
            // }}><div style={{ marginTop: 7 }}>{label}</div></div>,
            icon: (
              <IconWrapper label={ele?.friendlyname} expanded={extendBar}>
                <DynamicIcon
                  showInitials={true}
                  label={ele?.friendlyname}
                  // label={extendBar ? ele.friendlyname : handleAppInitials(ele)}
                />
                {/* {ele?.friendlyname} */}
              </IconWrapper>
            ),
            id: ele.menuid,
            func: () => {
              handleWorkflowClick(ele, extendBar, barSelect)
            }
          }
          items.push(arrItem)
        })
      return items
    } else if (menugroups.length < arrayLimit) {
      menugroups.forEach(ele => {
        var label = ele?.friendlyname
        var arrItem = {
          label: extendBar ? ele.friendlyname : label,
          id: ele.menugroupid,
          func: () => {
            handleIconClicked(ele, extendBar, barSelect)
          }
        }
        items.push(arrItem)
      })
      return items
    } else if (menus.length < arrayLimit) {
      menus.forEach(ele => {
        var label = ele?.friendlyname
        var label = ele?.friendlyname
        var arrItem = {
          // icon: <div style={{
          //   alignItems: 'center', justifyContent: 'center',
          //   color: themeState.currentTheme.text,
          //   textAlign: 'center',
          //   alignContent: 'center', justifyItems: 'center',
          //   height: 35, width: 35, borderRadius: 10, backgroundColor: themeState.currentTheme.material0
          // }}><div style={{ marginTop: 7 }}>{label}</div></div>,
          icon: (
            <IconWrapper label={ele?.friendlyname} expanded={extendBar}>
              <DynamicIcon showInitials={true} label={ele?.friendlyname} />
            </IconWrapper>
          ),

          func: () => {
            handleIconClicked(ele, extendBar, barSelect)
          }
        }
        items.push(arrItem)
      })
      return items
    } else if (modules.length < arrayLimit) {
      modules.forEach(ele => {
        var label = ele?.friendlyname
        var label = ele?.friendlyname
        var arrItem = {
          icon: (
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: themeState.currentTheme.text,
                textAlign: 'center',
                alignContent: 'center',
                justifyItems: 'center',
                height: 37,
                width: 37,
                marginBottom: 10,
                borderRadius: 100,
                backgroundColor: themeState.currentTheme.materialb1
              }}
            >
              <div style={{ marginTop: 7 }}>{label}</div>
            </div>
          ),
          label: extendBar ? ele.friendlyname : null,
          id: ele.softwaremoduleid,
          func: () => {
            handleIconClicked(ele, extendBar, barSelect)
          }
        }
        items.push(arrItem)
      })
      return items
    } else {
      applications.forEach(ele => {
        var label = ele?.friendlyname
        var label = ele?.friendlyname
        var arrItem = {
          icon: (
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: themeState.currentTheme.text,
                textAlign: 'center',
                alignContent: 'center',
                justifyItems: 'center',
                height: 37,
                width: 37,
                marginBottom: 10,
                borderRadius: 100,
                backgroundColor: themeState.currentTheme.materialb1
              }}
            >
              <div style={{ marginTop: 7 }}>{label}</div>
            </div>
          ),
          label: extendBar ? ele.friendlyname : null,
          id: ele.softwareapplicationid,
          func: () => {
            handleIconClicked(ele, extendBar, barSelect)
          }
        }
        items.push(arrItem)
      })
      return items
    }
  }

  //handles the sidebar icons being clicked, set the data for the menubar to appear
  function handleIconClicked (item, extendBar, barSelect) {
    if (viewWidth <= sm) {
      if (extendBar) {
        setExtendBar(false)
      }
      setMenuData([])
      setSelectedItem([])
      handleReturnList(item) && setMenuData(menuData => [...menuData, item])
      handleReturnList(item) && setMobileAppSelect(true)
      handleReturnList(item) &&
        setSelectedItem(selectedItem => [...selectedItem, item])
    } else if (viewWidth > 600) {
      !extendBar && setExtendBar(true)
      setMenuData([])
      setSelectedItem([])
      handleReturnList(item) && setMenuData(menuData => [...menuData, item])
      handleReturnList(item) &&
        setSelectedItem(selectedItem => [...selectedItem, item])

      // setMenuData(menuData => [
      //   ...menuData,
      //   handleReturnList(item)
      // ])
    }

    if (viewWidth > 600 && extendBar && !barSelect) {
      setBarSelect(!barSelect)
    }
  }

  //handles if the icon being clicked is the menugroup, so the workflow is able to be accessed rather than being shown
  function handleWorkflowClick (workflowItem) {
    if (workflowItem.hasOwnProperty('workflowid')) {
      setMenuData([])
      setSelectedItem([])
      //UI UPDATES
      setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)
      if (appState?.currentWorkflow) {
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      }
      appDispatch({
        type: 'SELECT_WORKFLOW',
        currentWorkflow: workflowItem
        // items: <DynamicButtonV2
        //   onClick={() => {
        //     appDispatch({ type: 'UNSELECT_WORKFLOW' })
        //   }}
        //   text={'Cancel'}
        // />
      })
      if (workflowItem.modal !== 1) {
        headerDispatch({
          type: 'SET_HEADER',
          title: workflowItem?.friendlyname ? workflowItem?.friendlyname : ''
          // items:
          // size:'normal'
        })
      }
    }
  }

  //updates the menu
  function handleUpdateMenus (arrayObj, index) {
    var itemIdx = index + 1
    const newArray = arrayObj.slice(0, itemIdx)
    setMenuData(newArray)
  }

  function handleAppInitials (appItem) {
    const regex = /((?:\s|^)\w)/g
    const matchStr = appItem.friendlyname.match(regex)

    // Handle the case where there's only one match
    if (matchStr.length === 1) {
      return <>{matchStr[0].trim()}</>
    }

    // Extract the first and last characters and trim any whitespace
    const initials = [matchStr[0], matchStr[matchStr.length - 1]].map(s =>
      s.trim()
    )

    return <>{initials.join('')}</>
  }

  function handleUpdateSelectedItem (itemArray, index, item) {
    if (itemArray.length === 0 || itemArray.length < index + 1) {
      setSelectedItem(selectedItem => [...selectedItem, item])
    } else if (itemArray[index].friendlyname !== item.friendlyname) {
      const newArr = selectedItem.slice(0, index)
      setSelectedItem(newArr)
      setSelectedItem(selectedItem => [...selectedItem, item])
    }
  }

  function handleReturnList (item) {
    for (const property in item) {
      if (
        Object.getPrototypeOf(item[property]) === Array.prototype &&
        `${property}` !== 'agencies'
      ) {
        return item[property]
      }
    }

    return null
  }

  function handleBackButton (selectedArray, menuData) {
    if (selectedArray.length > 1) {
      let index = selectedArray.length - 1
      const menuArray = menuData.slice(0, index)
      const selectArray = selectedArray.slice(0, index)
      setSelectedItem(selectArray)
      setMenuData(menuArray)
    } else if (selectedArray.length === 1) {
      setMenuData([])
      setSelectedItem([])
      setMobileAppSelect(false)
      //UI UPDATES
      setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)
    }
  }

  const [barWidth, setBarWidth] = useState('10%')
  const appbarref = useRef(null)

  useOutsideAlerter([appbarref], () => {
    //UI UPDATES

    if (!uiState?.navExpanded) {
      setExtendBar(false)
    } else {
      // setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)

    }
    setBarSelect(false)
    setMenuData([])
    setSelectedItem([])
  })

  const menuObject = {
    menuItems: [
      {
        label: 'Edit App Bar',
        icon: <FaPen />
      }
    ]
  }

  const startAnimation = () => {
    setIsAnimating(true)
  }

  // useEffect(()=>{
  //   console.log('isAnimating',isAnimating)
  // },[isAnimating])

  // useEffect(()=>{
  //   console.log('isAnimating',isAnimating)
  // },[extendBar])
  return (
    <WorkspaceNavbarContainerStyled>
      <NavbarBufferStyled
        navExpanded={uiState?.navExpanded}
        expanded={extendBar}
        onMouseLeave={() =>
          handleNavBarHover(
            viewWidth,
            setExtendBar,
            extendBar,
            'exit',
            menuData,
            uiState?.navExpanded,
            setIsAnimating,
            enterTimerRef,
            isAnimating
          )
        }
        ref={appbarref}
        menuData={menuData?.length}
      >
        {true && (
          <StyledWorkspaceNavbar
            navExpanded={uiState?.navExpanded}
            expanded={extendBar}
            isAnimating={isAnimating}
            onMouseEnter={() =>
              handleNavBarHover(
                viewWidth,
                setExtendBar,
                extendBar,
                'enter',
                menuData,
                uiState?.navExpanded,
                setIsAnimating,
                enterTimerRef,
                isAnimating
              )
            }
            ref={divRef}
            onContextMenu={e => {
              e.preventDefault()
              menuDispatch({
                type: 'SET_MENUOBJECT',
                object: menuObject,
                clicked: true,
                ref: divRef.current ? divRef.current : null,
                xCoord: e.clientX,
                yCoord: e.clientY
              })
            }}
          >
            <div style={{ background: '' }}>
              <DynamicSwitcher
                selectedColor={'none'}
                backgroundColor={'none'}
                height={'auto'}
                color={'white'}
                column={true}
                items={extendBar ? closeObj : barsObj}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontWeight: 'bold',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                color: 'white',
                background: 'none',
                fontWeight: 'bold',
                position: 'realtive'
              }}
            >
              {extendBar
                ? sideBarApps.length > 0 && <SearchWorkflows />
                : sideBarApps.length > 0 && (
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FaSearch size={20} />
                    </div>
                  )}
              <div>&nbsp;</div>
              {appState?.currentWorkflow && (
                <SelectedIconWrapper
                  label={appState?.currentWorkflow?.friendlyname}
                  expanded={extendBar}
                >
                  <DynamicIcon
                    label={appState?.currentWorkflow?.friendlyname}
                    showInitials={true}
                    // label={extendBar ? ele.friendlyname : handleAppInitials(ele)}
                  />
                  {/* {ele?.friendlyname} */}
                </SelectedIconWrapper>
              )}
              {sideBarApps.length > 0 && (
                <DynamicSwitcher
                  height={'80%'}
                  color={'white'}
                  unselect={appState.currentWorkflow ? false : true}
                  backgroundColor={'none'}
                  selectedColor={'none'}
                  items={sideBarApps}
                  column={true}
                />
              )}
            </div>

            {appState.pinnedWorkflows.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontWeight: 'bold',
                  height: 'auto',
                  justifyContent: 'space-between',
                  width: '100%',
                  background: 'none',
                  fontWeight: 'bold'
                }}
              >
                {extendBar && 'Pinned Workflows'}
                <div>&nbsp;</div>

                {appState.pinnedWorkflows.length > 0 && (
                  <DynamicSwitcher
                    height={'100%'}
                    unselect={appState.currentWorkflow ? false : true}
                    backgroundColor={'none'}
                    customSelect={
                      <div
                        style={{
                          backgroundColor: 'red',
                          height: 100,
                          width: 100,
                          zIndex: 200
                        }}
                      />
                    }
                    selectedColor={themeState.currentTheme.materialb3}
                    items={appState.pinnedWorkflows.map(ele => {
                      var label = ele?.friendlyname

                      var label = ele?.friendlyname
                      return {
                        label: extendBar ? ele.friendlyname : null,
                        icon: (
                          <IconWrapper
                            label={ele?.friendlyname}
                            expanded={extendBar}
                            pinnedWF={true}
                          >
                            <DynamicIcon
                              key={ele?.name}
                              label={label}
                              showInitials={true}
                            />
                          </IconWrapper>
                        ),
                        id: ele.workflowid,
                        func: () => {
                          handleWorkflowClick(ele)
                        }
                      }
                    })}
                    column={true}
                  />
                )}
              </div>
            )}

            <div
            //  style={{background:'orange'}}
            >
              <DynamicSwitcher
                selectedColor={'none'}
                backgroundColor={'none'}
                height={'100px'}
                column={true}
                color={'none'}
                items={[
                  {
                    id: 'profile',
                    icon: (
                      <IconProfile
                        expanded={extendBar}
                        extendLabel={extendBar ? appState?.user?.name : null}
                        label={getInitials(appState?.user?.name)}
                      >
                        <DynamicSwitcher
                          selectedColor={'none'}
                          backgroundColor={'none'}
                          height={'100px'}
                          column={true}
                          color={({ theme }) => theme.grey400Base}
                          items={[
                            {
                              id: 'viewprofile',
                              label: extendBar ? 'View Profile' : null,
                              icon: <FaUser />,
                              id: '3out',
                              func: () => {
                                appDispatch({
                                  type: 'SELECT_WORKFLOW',
                                  currentWorkflow: appState?.profile
                                })
                                if (appState?.profile.modal !== 1) {
                                  headerDispatch({
                                    type: 'SET_HEADER',
                                    title: appState?.profile?.friendlyname
                                      ? appState?.profile?.friendlyname
                                      : ''
                                    // items:
                                    // size:'normal'
                                  })
                                }
                              }
                            },
                            {
                              id: 'submitfeedback',
                              label: extendBar ? 'Submit Feedback' : null,
                              icon: <BiSolidMegaphone />,
                              id: 'submitFeedback',
                              func: () => {
                                appDispatch({
                                  type: 'SELECT_WORKFLOW',
                                  currentWorkflow: appState?.submitfeedback
                                })
                                if (appState?.submitfeedback.modal !== 1) {
                                  headerDispatch({
                                    type: 'SET_HEADER',
                                    title: appState?.submitfeedback
                                      ?.friendlyname
                                      ? appState?.submitfeedback?.friendlyname
                                      : ''
                                    // items:
                                    // size:'normal'
                                  })
                                }
                              }
                            },
                            // { label: extendBar ? 'FULL SCREEN' : null, icon: <FaExpand />, id: '1expand', func: () => { uiDispatch({ type: 'SET_UI',showNav: false,navExpanded: false})} },
                            // { label: extendBar ? themeState.currentTheme.id === 'dark' ? '(Experimental)' : '' : null, icon: <FaSun />, id: '2light', func: () => { themeDispatch({ type: 'toggleTheme' }) } },
                            {
                              id: 'logout',
                              label: extendBar ? 'Log Out' : null,
                              icon: <GoSignOut />,
                              func: () => {
                                navigate('/')
                                appDispatch({ type: 'UNSELECT_WORKFLOW' })
                                headerDispatch({ type: 'RESET_HEADER' })
                                authDispatch({ type: 'LOGOUT_REQUEST' })
                              }
                            }
                          ]}
                        />
                      </IconProfile>
                    )
                    // func: () => {
                    //   appDispatch({
                    //     type: 'SELECT_WORKFLOW',
                    //     currentWorkflow: appState?.profile,

                    //   })
                    // }
                  }
                ]}
              />
            </div>
          </StyledWorkspaceNavbar>
        )}
        {selectedItem.length > 0 && (
          <StyledMenuSpace>
            <MobileMenuBar
              menuData={menuData}
              setExtendBar={setExtendBar}
              setMenuData={setMenuData}
              selectedItem={selectedItem}
              applications={applications}
              handleBackButton={handleBackButton}
              setSelectedItem={setSelectedItem}
              handleReturnList={handleReturnList}
              handleUpdateMenus={handleUpdateMenus}
              handleAppInitials={handleAppInitials}
            />
          </StyledMenuSpace>
        )}
      </NavbarBufferStyled>
    </WorkspaceNavbarContainerStyled>
  )
}

{
  /* {applications.map(item => {
            return (
              <Application
                text={extendBar ? item.friendlyname : handleAppInitials(item)}
                type={extendBar ? 'listItem' : 'app'}
                onClick={() => {

                  if (viewWidth <= 600 && menuData.length === 0) {
                    if (extendBar) {
                      setExtendBar(false)
                    }
                    handleReturnList(item) && setMenuData(menuData => [...menuData, item])

                    handleReturnList(item) && setMobileAppSelect(true)

                    handleReturnList(item) && setSelectedItem(selectedItem => [...selectedItem, item])

                  } else if (viewWidth > 600 && menuData.length === 0) {

                    !extendBar && setExtendBar(true)

                    handleReturnList(item) && setMenuData(menuData => [...menuData, item])

                    handleReturnList(item) && setSelectedItem(selectedItem => [...selectedItem, item])


                    // setMenuData(menuData => [
                    //   ...menuData,
                    //   handleReturnList(item)
                    // ])
                  }

                  if (viewWidth > 600 && extendBar && !barSelect) {
                    setBarSelect(!barSelect)
                  }
                  // else if (viewWidth > 700 && extendBar && barSelect) {
                  //   setBarSelect(!barSelect)
                  //   setMenuData([])
                  //   setSelectedItem([])
                  // }
                }
                }
              >
                 { extendBar ? item.friendlyname : handleAppInitials(item)} 
              </Application>
            )
          })} */
}
