import React from 'react'
import { CardLoader } from './Card'
import { FormLoader } from './Form'
import { ListLoader } from './List'
import { SideBarLoader } from './SideBar'
import { LoaderSpinner } from './Spinner'
import { GenericLoader } from './Generic'

export const SkeletonLoader = props => {
  switch (props.type) {
    case 'form':
      return <FormLoader {...props} />
    case 'list':
      return <ListLoader {...props} />
    case 'sidebar':
      return <SideBarLoader {...props} />
    case 'spinner':
      return <LoaderSpinner {...props} />
    case 'card':
      return <CardLoader {...props} />
    default:
      return <GenericLoader {...props}>{props.children}</GenericLoader>;
  }
}
