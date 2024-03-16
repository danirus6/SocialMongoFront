import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from 'antd'

const Search = () => {
  
  const navigate = useNavigate()
  const { id } = useParams()
  const { searchPosts } = useSelector((state) => state.posts)

  const handlePostDet = (post) => {
    localStorage.setItem('prevSection', JSON.stringify(`/search/${id}`))
    navigate(`/post/${post._id}`)
  }

  return (
    <div className="container">
      <h2>Posts</h2>
      {searchPosts.length > 0 ? (
        searchPosts.map((post) => (
          <div className="container__posts" key={post._id}>
            <Card
              className="card-container"
              onClick={() => handlePostDet(post)}>
              <p className="card-container__title">{post.name}</p>
            </Card>
          </div>
        ))
      ) : (
        <p>No existe</p>
      )}
    </div>
  )
}

export default Search
