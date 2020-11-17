/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Post = ({ data }) => {
  return (
    <article sx={{ variant: 'containers.post' }}>
      <header>
        <h3>
          <a href="/">{data.title}</a>
        </h3>
        <div>
          <img src={data.img} />
        </div>
        <small>{data.small}</small>
      </header>
      <p>{data.text}</p>
    </article>
  )
}

export default Post
