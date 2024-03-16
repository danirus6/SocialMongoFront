import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'
// import '../Login/Login.style.scss'

const Register = () => {
  const dispatch = useDispatch()
  const { isSuccess, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Success',
        description: message,
      })
    } else if (isError) {
      notification.error({
        message: 'Error',
        description: message,
      })
    }

    dispatch(reset())
  }, [isSuccess, isError, message])

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  const { first_name, last_name, email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))
    console.log('formData', formData)
  }

  return (
    <form className="container" onSubmit={onSubmit}>
      <input
        className="container__input"
        type="text"
        name="first_name"
        value={first_name}
        placeholder="Nombre"
        onChange={onChange}
      />
      <input
        className="container__input"
        type="text"
        name="last_name"
        value={last_name}
        placeholder="Apellido"
        onChange={onChange}
      />
      <input
        className="container__input"
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />
      <input
        className="container__input"
        type="password"
        name="password"
        value={password}
        placeholder="Contraseña"
        onChange={onChange}
      />
      <button type="submit">Registro</button>
    </form>
  )
}

export default Register