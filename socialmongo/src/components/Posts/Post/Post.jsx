import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
    
const{ posts } = useSelector((state) => state.posts)
const navigate = useNavigate()
const handleDetail = (post) => {
    localStorage.setItem('prevSection', JSON.stringify('/'))
    navigate(`/post/${post.id}`)
}

  return (
    <>
    {posts.map((post) =>(
        <div key={post._id}>
            <Card onClick={() => handleDetail(post)} >
            <p>{post.name}</p> 
            </Card>

        </div>
    ))}
    </>
    
  )
}

export default Post