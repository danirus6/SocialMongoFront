import Post from './Post/Post'
import { useDispatch, useSelector,  } from 'react-redux'
import { getAll, newPost, reset} from '../../redux/posts/postsSlice'
import { useEffect, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin, Modal, Form, Input, Button } from 'antd'


const Posts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [form] = Form.useForm()

    const dispatch = useDispatch()

    const token = JSON.parse(localStorage.getItem('token'))

    const createPost = () =>{
      setIsModalVisible(true)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
      form.resetFields()
    }
    const handleSubmit = () => {
      form.validateFields().then((values) => {
        dispatch(
          newPost({ title: values.title, text: values.text, token: token })
        )
        setIsModalVisible(false)
        form.resetFields()
      })
    }
 
    useEffect(() => {
      dispatch(getAll())
      dispatch(reset)
    }, [])
    
  return (

    <div className="container">
    <h2>Posts</h2>
    {token ? (
      <button className="new-post" onClick={createPost}>
        Nuevo post
      </button>
    ) : (
      <></>
    )}
  
      <div className="container__posts">
        <Post />
      </div>
    <Modal
      title="Nuevo Post"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Enviar
        </Button>,
      ]}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Título"
          rules={[
            { required: true, message: 'Por favor ingrese el título' },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="text"
          label="Texto"
          rules={[{ required: true, message: 'Por favor ingrese el texto' }]}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  </div>
    
  )

}

export default Posts