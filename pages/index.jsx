/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Post from '../src/components/Post'
import Author from '../src/components/Author'
import ToggleModeTheme from '../src/components/ToggleModeTheme'

const Index = ({ posts }) => {
  return (
    <div
      key="1"
      sx={{
        maxWidth: '42rem',
        padding: '2.625rem 1.3125rem',
        m: '0 auto',
        height: '100%',
      }}
    >
      <Head>
        <title>Dos il·luminats</title>
        <meta property="og:title" content="Dos il·luminats" key="title" />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/comet_2604.png"
        />
      </Head>
      <div
        key="1"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <header
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1 sx={{ variant: 'typography.h1' }}>
            <a
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              href="/"
            >
              Dos il·luminats
            </a>
          </h1>
          <ToggleModeTheme />
        </header>
        <aside sx={{ display: [null, 'flex', 'flex', 'flex'] }}>
          <Author style={{ marginBottom: ['3rem', 0, null, null] }} />
          <Author />
        </aside>
        <main sx={{ width: '100%', flex: '1 0 auto' }}>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
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
            <a
              sx={{ color: 'inherit', textDecoration: 'none' }}
              href="https://github.com/p3rnil"
            >
              Made with 🌶️ by p3rnil
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {
          id: '1',
          title: 'Lorem Ipsum 1',
          small: 'July 13, 2020 • ☕️ 1 min read',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'https://media.graphcms.com/kLIQMfNiSO64b8ZH1Jts',
        },
        {
          id: '2',
          title: 'Lorem Ipsum 2',
          small: 'July 13, 2020 • ☕️ 1 min read',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'https://media.graphcms.com/kLIQMfNiSO64b8ZH1Jts',
        },
      ],
    },
  }
}

export default Index
