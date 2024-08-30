import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'styled-components'

export const Profile = props => {
  const { text = '', fontColor = 'bold' } = props
  const theme = useTheme()
  const [showMenu, setShowMenu] = useState(false)
  const styles = {
    profileContainer: {
      display: 'flex',
      height: '40px',
      width: '40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: theme.textColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      backgroundColor: 'grey'
    },
    profilePopup: {
      marginTop: '10px',
      position: 'absolute',
      display: 'flex',
      height: '100px',
      width: '40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: theme.textColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: 'grey'
    }
  }
  return (
    <div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        style={styles.profileContainer}
      >
        <FaUser />
      </div>
      {showMenu && <div style={styles.profilePopup}></div>}
    </div>
  )
}
