import React from 'react'
import { Layout, Menu } from 'antd';
import SearchBar from '../component/SearchBar'
import BookCarousel from '../component/BookCarousel'
import BookList from '../component/BookList'
import Navbar from '../component/Navbar'
import '../css/BookView.css'
import {withRouter} from "react-router-dom";

import {
  BookOutlined,
  CodeOutlined,
  EllipsisOutlined,
  ExperimentOutlined,
  MenuOutlined,
  SmileOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
class BookView extends React.Component {
    data = [
    {
      title: 'Java核心技术卷II',
      src: 'http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg',
      type: 'Code'
    },
    
    {
      title: '小王子',
      src: 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg',
      type: 'Literature'
    },
    {
      title: '三体：全三册',
      src: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
      type: 'Other'
    },
    {
      title: '三体：全三册',
      src: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
      type: 'Other'
    },
    {
      title: '三体：全三册',
      src: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
      type: 'Other'
    },
    {
      title: '深入理解计算机系统',
      src: 'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg',
      type: 'Code'
    },
  ];
    state = {
      filterText: '',
      type: '',
    }
    handleFilterTextChanged = (text) => {
      console.log(text);
      this.setState(
        {filterText: text}
      )
    }
    onAll = () => {
      this.setState (
        {type: ''}
      )
    }
    onCode = () => (
      this.setState (
        {type: 'Code'}
      )
    )
    onEducation = () => (
      this.setState (
        {type: 'Education'}
      )
    )
    onLiterature = () => (
      this.setState (
        {type: 'Literature'}
      )
    )
    onScience = () => (
      this.setState (
        {type: 'Science'}
      )
    )
    onOther = () => (
      this.setState (
        {type: 'Other'}
      )
    )
    render() {
        return (
            <Layout>
              <Navbar/>
            <Layout>
              <Sider width={200} className="site-layout-background" >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0}}
                >
                <Menu.Item key="1" icon={<MenuOutlined />} onClick={this.onAll}>
                    All
                </Menu.Item>
                <Menu.Item key="2" icon={<CodeOutlined />} onClick={this.onCode}>
                    Code
                </Menu.Item>
                <Menu.Item key="3" icon={<SmileOutlined />} onClick={this.onEducation}>
                    Education
                </Menu.Item>
                <Menu.Item key="4" icon={<BookOutlined />} onClick={this.onLiterature}>
                    Literature
                </Menu.Item>
                <Menu.Item key="5" icon={<ExperimentOutlined/>} onClick={this.onScience}>
                    Science
                </Menu.Item>
                <Menu.Item key="6" icon={<EllipsisOutlined/>} onClick={this.onOther}>
                    Other
                </Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 700,
                  }}
                >
                  <SearchBar filterText={this.state.filterText} onFilterTextChanged={this.handleFilterTextChanged}/>
                  <BookCarousel/>
                  <div class="book-container">
                    <BookList data={this.data} filterText={this.state.filterText} type={this.state.type}/>
                  </div>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default withRouter(BookView);