import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, title, avatarUrl, author, topic} = eachBlog
  return (
    <Link to={`blogs/${id}`} className="Link">
      <div className="blog-container">
        <div className="image">
          <img src={imageUrl} alt="title" className="img" />
        </div>
        <div className="user-info">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
