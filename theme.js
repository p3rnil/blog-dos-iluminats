import { swiss } from '@theme-ui/presets'

const theme = {
  ...swiss,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: ['150px', '450px', '660px', '960px'],
      m: 0,
      mx: 'auto',
      // background: ['pink', 'tomato', 'blue', 'yellow'],
    },
  },
  typography: {
    title: {
      fontSize: [7, 7, 7, 7],
      my: 0,
      textAlign: ['center', null, null, null],
    },
  },
  styles: {
    ...swiss.styles,
  },
}

export default theme
