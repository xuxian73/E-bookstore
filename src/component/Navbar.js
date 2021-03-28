import React from 'react'
import '../css/Navbar.css'
import Logo from '../asserts/logo.svg'
import { Layout, Menu } from 'antd';
import thumbnail from '../asserts/thumbnail.jpg'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import {
  BarsOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const usr = [
  {
    usrname: 'Newcomer',
  }
]

class Navbar extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <Link to='/book'><img src={Logo} id="Logo" alt="logo" /></Link>
          </div>
          <p id="bookstore">Book Store</p>
          <Menu theme="dark" mode="horizontal" selectedKeys={this.props.path}>
            <Menu.Item key="/order" icon={<BarsOutlined />}><Link to='/order'>Order</Link></Menu.Item>
            <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}><Link to='/cart'>Cart</Link></Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}><Link to='/profile'>Profile</Link></Menu.Item>
          </Menu>
          
          <div className="header-right">
            <Link to="/profile"><p id="greet">Hi, NewComer</p></Link>
            <Link to="/profile"><p id="greet"></p><img id="thumbnail" src={thumbnail} /></Link>
          </div>
          
        </Header>
      </Layout>
    )
  }
}

export default Navbar