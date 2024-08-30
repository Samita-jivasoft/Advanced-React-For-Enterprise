import { DEFAULT_UI_MARGIN } from 'app/globalStyles'
import { useTheme } from 'styled-components'

export const Header = props => {
  const { text = '', fontWeight = 'bold', fontColor, backgroundColor } = props
  const theme = useTheme()
  const styles = {
    headerContainer: {
      marginLeft: DEFAULT_UI_MARGIN,
      color: fontColor,
      display: 'flex',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: theme.textColor,
      alignItems: 'flex-start',
      backgroundColor: backgroundColor
    }
  }
  return <div style={styles.headerContainer}>{text}</div>
}
