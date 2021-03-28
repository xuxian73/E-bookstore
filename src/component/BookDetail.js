import React from 'react'
import { Descriptions, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom'
import '../css/BookDetail.css'
import {
    ShoppingCartOutlined,
    PayCircleOutlined,
} from '@ant-design/icons';

class BookDetail extends React.Component {
    render() {

        const { info } = this.props;

        if (info == null) {
            return null;
        }

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.cover} style={{ width: "350px", height: "350px" }} /></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0 ? <span>有货 <span className={"inventory"}>库存{info.inventory}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                            <Descriptions.Item label={"数量"} span={3}><InputNumber min={1} defaultValue={1} /></Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Link to='cart'>
                        <Button type="danger" icon={<ShoppingCartOutlined />} size={"large"}>
                            Add to Cart
                        </Button>
                    </Link>
                    <Link to='cart'>
                        <Button type="danger" icon={<PayCircleOutlined />} size={"large"} style={{ marginLeft: "15%" }} ghost>
                            Buy it Now
                        </Button>
                    </Link>
                </div>
            </div>


        )

    }
}
export default BookDetail;