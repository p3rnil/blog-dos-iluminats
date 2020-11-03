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
        <div
          sx={{
            width: '100%',
            maxHeight: '140px',
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          <img
            width="100%"
            sx={{
              margin: '-25.5% 0px 0px 0px;',
              width: '100%',
              height: 'auto',
              borderRadius: '3px',
            }}
            src={data.img}
          ></img>
        </div>
        <small sx={{ variant: 'tags.small' }}>{data.small}</small>
      </header>
      <p sx={{ variant: 'tags.p' }}>{data.text}</p>
    </article>
  )
}

export default Post
