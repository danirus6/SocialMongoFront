import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const TheUnlogged = [
  {
    label: 'Login',
    key: 'log',
    icon: <MailOutlined />,
  },
  {
    label: 'Register ',
    key: 'regi',
    icon: <MailOutlined />,
  },
];
const TheLogged = [
    {
      label: 'Posts',
      key: 'pos',
      icon: <MailOutlined />,
    },
    {
      label: 'Logout',
      key: 'logo',
      icon: <MailOutlined />,
    },
  ];

const TheHeader = () => {
    const navigate = useNavigate()
    const {token} = useSelector((state) => state.auth)
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        switch (e.key) {
            case "log":
                navigate("/login")
                break;
            case "regi":
                navigate("/register")
                break;
            case "pos":
                navigate("/posts")
                break;
            case "logo":
                navigate("/logo")
                break;
            default:
                break;
        }
  }
  return (
    <div width="200px">
    {token ? 
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={TheLogged} style={ {width : "100%"}} />
 :  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={TheUnlogged}  style={ {width : "100%"}} />

  }
    </div>
  )
}

export default TheHeader