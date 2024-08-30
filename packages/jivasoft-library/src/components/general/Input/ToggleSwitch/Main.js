import { useViewport } from 'app/data'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import './style/Main.css'
import React from 'react'

export const ToggleSwitch = props => {
  const {
    id,
    label,
    checked,
    onChange,
    optionLabels,
    onColor='#060',
    offColor='#bbb',
    color='white',
    small,
    disabled
  } = props
  const { viewWidth, viewHeight } = useViewport()

  useEffect(() => {
    const elem = document.getElementById('#myDiv')
    if (elem) {
      if (viewWidth < 600 || small) {
        document.documentElement.style.setProperty('--width', '40px')
        document.documentElement.style.setProperty('--height', '20px')
        document.documentElement.style.setProperty('--line-height', '20px')

        document.documentElement.style.setProperty('--translate', '20px')

        document.documentElement.style.setProperty('--switch-width', '16px')
        document.documentElement.style.setProperty('--margin', '2px')
      } else {
        const width = elem.clientWidth
        const translate = width - 34 + 'px'


        document.documentElement.style.setProperty('--width', '75px')
        document.documentElement.style.setProperty('--translate', '40px')

        document.documentElement.style.setProperty('--height', '34px')
        document.documentElement.style.setProperty('--line-height', '34px')

        document.documentElement.style.setProperty('--switch-width', '24px')
        document.documentElement.style.setProperty('--margin', '5px')
      }
    }
    document.documentElement.style.setProperty('--oncolor', onColor)
    document.documentElement.style.setProperty('--offcolor', offColor)
    document.documentElement.style.setProperty('--color', color)
  }, [viewWidth])

  return (
    <div id='#toggle-switch-container' className='toggle-switch-container'>
      <div style={{ padding: '5px' }}>
        {label}
      </div>
      <div id='#myDiv' className={'toggle-switch'}>
        <input
          type='checkbox'
          className='checkbox'
          name={label}
          id={id}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <label className='label' htmlFor={id}>
            <span
              className={disabled ? 'inner disabled' : 'inner'}
              data-yes={
                optionLabels ? (viewWidth > 600 ? optionLabels[0] : null) : null
              }
              data-no={
                optionLabels ? (viewWidth > 600 ? optionLabels[1] : null) : null
              }
            />
            <span className={disabled ? 'switch disabled' : 'switch'} />
          </label>
        ) : null}
      </div>
    </div>
  )
}
// Set optionLabels for rendering.
// ToggleSwitch.defaultProps = {
//   onColor: '#060',
//   offColor: '#bbb',
//   color: 'white'
// }

ToggleSwitch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
}
