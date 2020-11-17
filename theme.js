import { swiss } from '@theme-ui/presets'

const typography = {
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
    marginBottom: '1rem',
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
}

const theme = {
  ...swiss,
  ...typography,
  webTitle: {
    ...typography.h1,
    fontSize: '1.98818rem',
    lineHeight: '2.625rem',
    fontWeight: '900',
  },
  author: {
    img: {
      marginRight: '0.875rem',
      marginBottom: '0',
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: ' 50%',
    },
    ul: {
      listStyleType: 'none',
      margin: '0px',
      padding: '0px',
    },
    li: {
      display: 'inline-block',
      margin: ' 0px 10px',
      fontSize: '1.6em',
      opacity: '0.7',
    },
    a: {
      color: 'rgb(0, 0, 0)',
      textDecoration: 'none',
    },
    p: { margin: '0' },
  },
  containers: {
    post: {
      h3: {
        ...typography.h3,
      },
      div: {
        width: '100%',
        maxHeight: '140px',
        borderRadius: '3px',
        overflow: 'hidden',
      },
      img: {
        margin: '-25.5% 0px 0px 0px;',
        width: '100%',
        height: 'auto',
        borderRadius: '3px',
      },
      small: {
        fontSize: '80%',
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
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    page: {
      width: '100%',
      maxWidth: ['150px', '450px', '660px', '960px'],
      m: 0,
      mx: 'auto',
    },
  },
  styles: {
    ...swiss.styles,
  },
}

export default theme
