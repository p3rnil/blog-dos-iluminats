/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Post = ({ title, cover, small, text }) => {
  return (
    <article>
      <header>
        <h3 sx={{ variant: 'typography.h3' }}>
          <a sx={{ variant: 'tags.a' }} href="/">
            Lorem Ipsum
          </a>
        </h3>
        <small sx={{ variant: 'tags.small' }}>
          July 13, 2020 • ☕️ 1 min read
        </small>
      </header>
      <p sx={{ variant: 'tags.p' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </article>
  )
}

export default Post
