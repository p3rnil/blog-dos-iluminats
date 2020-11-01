/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'

const Index = () => {
  return (
    <div
      sx={{
        maxWidth: '42rem',
        padding: '2.625rem 1.3125rem',
        m: '0 auto',
        height: '100%',
      }}
    >
      <Head>
        <title>Dos il·luminats</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/comet_2604.png"
        />
      </Head>
      <div sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <header sx={{ width: '100%' }}>
          <h1 sx={{ variant: 'typography.title' }}>Header</h1>
        </header>
        <aside></aside>
        <main sx={{ width: '100%', flex: '1 0 auto' }}>
          <article sx={{ variant: 'containers.page' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris
            ex, facilisis eget purus nec, laoreet pulvinar lorem. Vestibulum
            enim ligula, mollis at iaculis nec, interdum eu magna. Donec eget
            nisi et erat varius blandit. Etiam ut nulla vel enim porttitor
            viverra vel sit amet mauris.
          </article>
        </main>
        <footer sx={{ width: '100%', flexShrink: '0' }}>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: 'inherit',
              textDecoration: 'none',
              my: '10px',
            }}
          >
            <a href="https://github.com/p3rnil">Made with ☕ by p3rnil</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Index
