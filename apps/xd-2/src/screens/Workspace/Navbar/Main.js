import { Application } from 'components'
import { ThemeContext, useAppTheme, useAuth } from 'app/data/context'
import { useContext, useState,useEffect } from 'react'
import { FaBars, FaHome, FaMoon, FaSun} from 'react-icons/fa'
import { GoSignOut} from 'react-icons/go'
import { useTheme } from 'styled-components'
import { StyledWorkspaceNavbar } from '../styles'
import { useApp } from 'app/data/context/AppContext'

export const WorkspaceNavbar = () => {
 const [,dispatchTheme] = useAppTheme()
 const [,authDispatch] = useAuth()
const [appState,]=useApp()
 const theme= useTheme()
const [appnum,setappnum]= useState(0)
 useEffect(()=>{
   if(appState.apps.length>0){
     setappnum('not empty')
   }
 },[appState])
  const HamburgerMenu = () => {
    return (
      <Application backgroundColor={null} icon={<FaBars color={theme.navTextColor} />} />
    )
  }
  const Home = () => {
    return (
      <Application backgroundColor={null} icon={<FaHome color={theme.navTextColor} />} />
    )
  }
  const BottomMenu = () => {
    const toggleTheme = () => {
      dispatchTheme({ type: "toggleTheme" });
    };
    return (
      <div style={styles.bottomMenu}>
        {/* <Application
        onClick={toggleTheme}
        backgroundColor={null} icon={<GoSignOut color={theme.navTextColor} />} /> */}
        <Application
        onClick={()=>{authDispatch({'type':'LOGOUT_REQUEST'})}}
        backgroundColor={null} icon={<GoSignOut color={theme.navTextColor} />} />
      </div>
    )
  }
  const applications = [
    <Application />,
    <Application />,
    <Application />
  ]

  return (
    <StyledWorkspaceNavbar>
      <HamburgerMenu />
      <Home/>
    {appnum}
      {appState.apps.map((app)=>{
        return <Application/>
      })}
      <BottomMenu />
    </StyledWorkspaceNavbar>
  )
}

const styles = {
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
}
