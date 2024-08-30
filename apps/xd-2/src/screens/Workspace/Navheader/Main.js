import { Header, Profile } from 'components'
import { Search } from '../Search/Main'
import { StyledWorkspaceNavheader } from '../styles/Navheader'

export const WorkspaceNavheader = () => {
  return <StyledWorkspaceNavheader>
            <Header text={'Home'}/>

      <Search/>
      <Profile/>
  </StyledWorkspaceNavheader>
}

const styles={
    searchContainer:{
        display:'flex',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'

    },
   
}