import { APP_BG_COLOR } from 'app/globalStyles'
import {
  StyledApp,
  StyledAppWrapper,
  StyledLabel,
  StyledListItem
} from './styles'
import { BiChevronRight } from 'react-icons/bi'
export const Application = props => {
  const {
    onClick = null,
    icon = null,
    backgroundColor = APP_BG_COLOR,
    text,
    type = 'app'
  } = props

  const app = {
    name: 'XtraDuty',
    friendlyname: 'Xtra Duty',
    shortname: 'Xtra Duty',
    softwareapplicationid: '2C6EAE60-0171-453E-99CD-85983C1BF652',
    description: 'Extra Duty Administration',
    label: 'Application'
  }

  return (
    <StyledAppWrapper key={app.softwareapplicationid} onClick={onClick}>
      {type == 'app' && (
        <StyledApp backgroundColor={backgroundColor}>
          {icon && icon} {text && text}
        </StyledApp>
      )}
      {type == 'listItem' && (
        <StyledListItem>
          {' '}
          {text && text}
          <BiChevronRight />
        </StyledListItem>
      )}

      {type == 'label' && (
        <StyledLabel>
          {icon && icon} {text && text}
        </StyledLabel>
      )}
    </StyledAppWrapper>
  )
}
