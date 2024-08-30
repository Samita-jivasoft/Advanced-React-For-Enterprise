import {
  StyledWorkspaceNavbarApplication,
  StyledWorkspaceNavbarApplicationWrapper
} from '../styles'
import { FaBars, FaQuestionCircle } from 'react-icons/fa'
import { APP_BG_COLOR } from 'app/globalStyles';
export const WorkspaceNavbarApplication = (props) => {
  const {onClick, icon, backgroundColor} = props;
  return (
    <StyledWorkspaceNavbarApplicationWrapper onClick={onClick}>
      <StyledWorkspaceNavbarApplication backgroundColor={backgroundColor}>
        {icon}
        </StyledWorkspaceNavbarApplication>
    </StyledWorkspaceNavbarApplicationWrapper>
  )
}

WorkspaceNavbarApplication.defaultProps = {
  icon:<FaQuestionCircle/>,
  backgroundColor: APP_BG_COLOR,
  onClick:null,
}