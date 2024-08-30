import { useAppTheme } from "app/data"
import { useMenu } from "app/data"
import { TbHandClick } from 'react-icons/tb'
import { useEffect, useRef } from "react"
import { FaPen } from "react-icons/fa"

export const EmptyDashboard = ()=>{
  const [themeState,] = useAppTheme()
  const [menuState, menuDispatch] = useMenu()
  const divRef = useRef();
  const menuObject = {menuItems:[
    
    {
      label:'Edit Dashboard', 
      labelFunc:()=>console.log('Hello World!!'),
      icon: <FaPen/>
    },
   
  ]}

    const EmptySVG = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg"  width="172.212" height="127.413" viewBox="0 0 172.212 127.413">
    <g id="Group_12" data-name="Group 12" transform="translate(-609.082 -450.481)">
      <g id="Group_11" data-name="Group 11" transform="translate(-206.546 -47)">
        <path id="Path_1" data-name="Path 1" d="M1325.013,304.269l69.24-39.979,69.675,39.979-69.675,40.753Z" transform="translate(-494.332 233.192)" fill="#02213c"/>
        <path id="Path_2" data-name="Path 2" d="M1394.615,264.29V300.6l-39.324,21.461L1325.2,304.336Z" transform="translate(-494.477 233.192)" fill="#19334a"/>
        <path id="Path_7" data-name="Path 7" d="M1325.2,594.75V577.487l29.949,17.263,39.114-6.642v46.683Z" transform="translate(-494.477 -9.896)" fill="#19334a"/>
        <path id="Path_8" data-name="Path 8" d="M1635.845,563.4l70.087-39.154s0-38.739,0-38.739l-48.415,28.321-21.672,3.612Z" transform="translate(-736.059 61.494)" fill="#19334a"/>
        <path id="Path_9" data-name="Path 9" d="M1635.845,478.738l20.968,26.473,67.807-43.655-18.743-23.9Z" transform="translate(-736.78 99.396)" fill="#89aad8"/>
        <path id="Path_10" data-name="Path 10" d="M900.261,533.52,939,554.312,899.484,577.5l-38.219-22.49Z" fill="#022a4d"/>
        <path id="Path_11" data-name="Path 11" d="M1179.556,467.973l15.1-24.019,70.519,40.7-18.783,24.57Z" transform="translate(-363.928 93.523)" fill="#89aad8"/>
      </g>
    </g>
  </svg>
  
    return (
      <div 
        ref={divRef}
        style={{
          flexDirection:'column',
          width:'100%',
          height:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          color:themeState.currentTheme.text}}
          //onClick={()=>menuDispatch({type:'SET_CLICKED',clicked:false})}
          onContextMenu={(e)=>{ e.preventDefault(); menuDispatch({type:'SET_MENUOBJECT', object:menuObject, clicked:true, ref:divRef, xCoord:e.clientX, yCoord:e.clientY})}}
      >
        <div style={{fontWeight:'bolder',fontSize:'1.5rem',margin:20}}>
          Your Dashboard is Empty
        </div>

        {EmptySVG}

        <b style={{margin:20,textDecoration:'underline'}}>
          Customize Your Dashboard
        </b>

      </div>
    )
}