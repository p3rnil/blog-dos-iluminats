/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Post = ({ data }) => {
  return (
    <article>
      <header>
        <h3 sx={{ variant: 'typography.h3' }}>
          <a sx={{ variant: 'tags.a' }} href="/">
            {data.title}
          </a>
        </h3>
        <small sx={{ variant: 'tags.small' }}>{data.small}</small>
      </header>
      <p sx={{ variant: 'tags.p' }}>{data.text}</p>
    </article>
  )
}

export default Post
