// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img className="img1" src={imageUrl} alt={`item${id}`} />
          <div className="blog-item-info">
            <p className="para1">{topic}</p>
            <h1 className="head1">{title}</h1>
            <div className="author-info">
              <img className="img2" src={avatarUrl} alt={`avatar${id}`} />
              <p className="para2">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
