import { useState } from 'react'
import { useColorMode } from 'theme-ui'
import Toggle from 'react-toggle'

const Sun = () => (
  <div
    style={{
      color: '#fff',
      position: 'absolute',
      top: '0.28em',
      left: '-0.19em',
    }}
  >
    ☀️
  </div>
)

const Moon = () => (
  <div
    style={{
      color: '#fff',
      position: 'absolute',
      top: '0.28em',
      left: '-0.4em',
    }}
  >
    🌙
  </div>
)

const ToggleModeTheme = () => {
  const [colorMode, setColorMode] = useColorMode()
  const handleToggle = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <label>
      <Toggle
        defaultChecked={true}
        icons={{
          checked: <Sun />,
          unchecked: <Moon />,
        }}
        onChange={handleToggle}
      />
    </label>
  )
}

export default ToggleModeTheme
