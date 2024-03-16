import axios from 'axios';

const API_URL = 'http://localhost:5000/posts'

const getAll = async () => {
  const res = await axios.get(`${API_URL}`)
  console.log(res.data)
  return res.data
}

const getById = async (id) => {
  const res = await axios.get(`${API_URL}/id/${id}`)
  return res.data
}

const getByUser = async (id) => {
  const res = await axios.get(`${API_URL}/userId/${id}`)
  return res.data
}

const newPost = async (data) => {
  const { title, text, token } = data
  const res = await axios.post(`${API_URL}`, { name: title, post: text }, { headers: {Authorization: token }})
  return res.data.post
}

const deletePost = async (data) => {
  const { id, token } = data
  const res = await axios.delete(`${API_URL}/delete/${id}`, { headers: {Authorization: token }})
  return res.data
}

const putPost = async (data) => {
  const { id, token, ...restData } = data
  const res = await axios.put(`${API_URL}/update/${id}`, restData, { headers: {Authorization: token }})
  return res.data
}

const putLike = async (data) => {
  const { id, token } = data
  const res = await axios.put(`${API_URL}/likes/${id}`,{}, { headers: {Authorization: token }})
  return res.data
}

const deleteLike = async (data) => {
  const { id, token } = data
  const res = await axios.put(`${API_URL}/likes/delete/${id}`,{}, { headers: {Authorization: token }})
  return res.data
}

const putComment = async (data) => {
  const { id, comment, token } = data
  const res = await axios.put(`${API_URL}/comments/${id}`, comment, { headers: {Authorization: token }})
  return res.data.post
}

const getPostByName = async (data) => {
  const res = await axios.get(`${API_URL}/name/${data}`)
  return res.data
}

const postsService = {
  getAll,
  getById,
  getByUser,
  newPost,
  deletePost,
  putPost,
  putLike,
  deleteLike,
  putComment,
  getPostByName
}

export default postsService