import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, BlogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    this.setState({isLoading: false, BlogData: updatedData})
  }

  render() {
    const {isLoading, BlogData} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          BlogData.map(eachBlog => <BlogItem eachBlog={eachBlog} />)
        )}
      </div>
    )
  }
}

export default BlogList
