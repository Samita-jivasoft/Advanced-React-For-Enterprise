import React, {useEffect,useState} from "react"
import { useElement } from "../../data/ElementContext"
import { useApp } from "app/data/context/AppContext"
import {
  fullBrowserVersion, 
  browserName, 
  deviceDetect,
  isMobile,
  isDesktop, 
  osName, 
  getUA,
  osVersion} from 'react-device-detect'

export const ElementSystemInfo = () =>{

  const [elementState, elementDispatch] = useElement()
  const [appState, appDispatch] = useApp()
  const [systemInfo, setSystemInfo] = useState()

  function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr/i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="Browser unknown";
      }
    return browserName;
  }

  function osfunction ()
  {
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }
    else{
      finalOs="OS unknown "
    }
    
    return finalOs
  }

  useEffect(()=>{
    if(navigator?.userAgentData)
    {
      async function fetchUAInfo()
      {
        const info = await navigator?.userAgentData?.getHighEntropyValues(['uaFullVersion','mobile','platform','platformVersion'])
        .then((ua) => { 
          var uaInfo = JSON.stringify(ua)
          var appVerInfo = `XD2: ${appState?.buildnumber}`
          var sysInfo = uaInfo.concat(" ",appVerInfo)
          setSystemInfo(sysInfo)
          return ua
        })
        return info;
      }
      fetchUAInfo()

    }
    else{
      const systemInforStr =` 
      Browser: ${browserName} 
      Browser Version: ${fullBrowserVersion}  
      OS: ${osName}
      OS Version: ${osVersion}
      Mobile: ${isMobile}
      XD2: ${appState?.buildnumber}
      UserAgent: ${navigator.userAgent}
      `
      setSystemInfo(systemInforStr)
    }
  },[])

  useEffect(() => {
    elementDispatch({type:'SET_VALUE', value:systemInfo})
  }, [systemInfo])

  return(
    <>
    </>
  )
}