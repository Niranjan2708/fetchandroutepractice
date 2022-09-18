import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const match = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      image: data.image,
      avatar: data.avatar,
      content: data.content,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {id, title, image, avatar, content, author} = blogData
    return (
      <div>
        <div className="blog-details-container">
          <h1 className="blog-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} className="blog-avatar" alt="avatar" />
            <p className="blog-author">{author}</p>
          </div>
          <div className="blog-image">
            <img src={imageUrl} className="image" alt="image" />
          </div>
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
