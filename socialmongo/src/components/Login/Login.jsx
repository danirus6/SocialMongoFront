import React, { useState } from 'react'
import { login } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Alert } from 'antd'

// import './Login.style.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const navigate = useNavigate()
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await dispatch(login(formData))
      if (res.payload?.response?.status === 500) {
        setMessageVisible(true)
        return setTimeout(() => setMessageVisible(false), 3000)
      }
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <input
          className="container__input"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
          required
        />
        <span className="container__input container__password">
          <input
            className="container__password__input"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={password}
            placeholder="Contraseña"
            onChange={onChange}
            required
          />
          {passwordVisible ? (
            <EyeTwoTone onClick={() => setPasswordVisible(false)} />
          ) : (
            <EyeInvisibleOutlined onClick={() => setPasswordVisible(true)} />
          )}
        </span>
        <button type="submit">Login</button>
      </form>
      {messageVisible ? (
        <div className="message-container">
          <Alert
            className="message-container__alert"
            message="Usuario o clave incorrectos, revisa los datos introducidos"
            type="error"
            showIcon
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Login