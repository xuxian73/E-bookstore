import React from 'react'
import { Avatar, Descriptions, Divider } from 'antd'

import { Layout, Menu } from 'antd';
import '../css/Profile.css'
import { Statistic, Row, Col, Card, Tag } from 'antd';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <Divider orientation="left">Avatar</Divider>
                <div className="baseinfo">
                    <div className="avatar">
                        <Avatar size={100} src={this.props.info.avatar} />
                    </div>
                    <div className={"description"}>
                        <Descriptions>
                            <Descriptions.Item span={3} label="Name">{this.props.info.username}</Descriptions.Item>
                            <Descriptions.Item span={3} label="email">{this.props.info.email}</Descriptions.Item>
                            <Descriptions.Item span={3} label="tag">
                                <div>
                                    <Tag color="magenta">Code</Tag>
                                    <Tag color="red">Education</Tag>
                                    <Tag color="volcano">Science</Tag>
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <Divider orientation="left">Statistics</Divider>
                <div className="analysis" >
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card hoverable style={{border:'solid 1px #B8DDFF'}}>
                                <Statistic title="Bought Books" value={130} />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card hoverable style={{border:'solid 1px #B8DDFF'}}>
                                <Statistic title="Code Books" value={58} />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card hoverable style={{border:'solid 1px #B8DDFF'}}>
                                <Statistic title="Education Books" value={78} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable style={{border:'solid 1px #B8DDFF'}}>
                                <Statistic title="Paid Money(CNY)" value={2189} precision={2} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Profile;