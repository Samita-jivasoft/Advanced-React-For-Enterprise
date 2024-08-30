import React from 'react'
import { SideMenuAppBar } from '.'
export const SideBar = ({ applications = [] }) => {
  return (
    applications.length > 0 && <SideMenuAppBar className=' main-sidemenu-appbar' applications={applications} />
  )
}
