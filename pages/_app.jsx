/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
