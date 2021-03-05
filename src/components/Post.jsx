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
          <img src={data.coverImage.url} />
        </div>
        <small>{`${data.date} • ☕️ ${data.small}`}</small>
      </header>
      <p>{data.subTitle}</p>
    </article>
  )
}

export default Post
