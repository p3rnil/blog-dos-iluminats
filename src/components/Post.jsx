/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Post = ({ data }) => {
  return (
    <article sx={{ variant: 'containers.post' }}>
      <header>
        <h3 sx={{ variant: 'containers.post.title' }}>
          <a href="/">{data.title}</a>
        </h3>
        <div sx={{ variant: 'containers.post.cropImage' }}>
          <img sx={{ variant: 'containers.post.image' }} src={data.img}></img>
        </div>
        <small sx={{ variant: 'containers.post.info' }}>{data.small}</small>
      </header>
      <p sx={{ variant: 'containers.post.text' }}>{data.text}</p>
    </article>
  )
}

export default Post
