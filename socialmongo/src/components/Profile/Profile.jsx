import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import { getByUser } from '../../redux/posts/postsSlice'


const Profile = () => {
    let Logged= false;
    const {user} = useSelector((state) => state.auth)
    // const { userPosts } = useSelector((state) => state.posts)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
      dispatch(getByUser(user._id))
    },[])
  return (
    
   <>
    <div>Profile</div>
    <p>{user.first_name} {user.last_name}</p>
    <p>{user.email}</p>
    <p>Posts</p>
    {/* {userPosts?.length > 0 ? (
    userPosts.map((post) => (
    <Card
      key = {post._id} 
      onClick={() => handlePostDetail(post._id)}>
      <p>{post.name}</p>
    </Card>
    ))
   ) : (
    <p>no hay nada</p>
    )} */}
    </> 
  )
}

export default Profile