import { useColorMode } from 'theme-ui'

const ToggleModeTheme = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <button
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  )
}

export default ToggleModeTheme
