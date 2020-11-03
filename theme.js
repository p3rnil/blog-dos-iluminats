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
    h1: {
      // fontSize: [7, 7, 7, 7],
      fontSize: '1.98818rem',
      lineHeight: '2.625rem',
      marginBottom: '0px',
      marginTop: '0px',
      my: 0,
      textAlign: ['center', null, null, null],
    },
    h3: {
      marginLeft: '0',
      marginRight: '0',
      marginTop: '3.5rem',
      marginBottom: '0.4375rem',
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      fontSize: '1.75rem',
      color: 'primary',
      fontWeight: '900',
      textRendering: 'optimizeLegibility',
      lineHeight: '1.1',
    },
  },
  tags: {
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    p: {
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      marginBottom: '1.75rem',
    },
    small: { fontSize: '80%' },
  },
  styles: {
    ...swiss.styles,
  },
}

export default theme
