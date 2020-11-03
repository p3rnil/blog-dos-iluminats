/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Post from '../src/components/Post'

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
          <h1 sx={{ variant: 'typography.h1' }}>
            <a sx={{ variant: 'tags.a' }} href="/">
              Dos il·luminats
            </a>
          </h1>
        </header>
        <aside>
          <div>
            {/* <img></img> */}
            <p>A personal blog by name1 and name2</p>
          </div>
        </aside>
        <main sx={{ width: '100%', flex: '1 0 auto' }}>
          <Post />
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
            <a sx={{ variant: 'tags.a' }} href="https://github.com/p3rnil">
              Made with ☕ by p3rnil
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Index
