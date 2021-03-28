import React from 'react'
import { Layout, Menu, Breadcrumb, Pagination } from 'antd';
import Navbar from '../component/Navbar'
import '../css/ProfileView.css'
import SideBar from '../component/SideBar'
import BookDetail from '../component/BookDetail';
const { Header, Content, Footer, Sider } = Layout;
const data = {
    key: '2',
    name: '深入理解计算机系统',
    author: '刘慈欣',
    cover: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
    type: 'Code',
    ISBN: '2',
    price: '50',
    date: '2020-3-20',
    description: '程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！'

}
class DetailView extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar />
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <SideBar />
                        <Content style={{ padding: '20px 24px', minHeight: '560px', backgroundColor: '#fff' }}>
                            <BookDetail info={data} />
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default DetailView;