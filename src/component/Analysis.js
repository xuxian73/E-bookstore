import React from 'react'
import { Divider } from 'antd'
import { Select } from 'antd'
import { Bar, Column, Pie } from '@ant-design/charts'
import '../css/Analysis.css'
const { Option } = Select;
class Analysis extends React.Component {
    handleBookChange = () => {

    }
    handleCustomerChange = () => {

    }
    render() {
        var data = [
            {
              type: 'Code',
              value: 27,
            },
            {
              type: 'Education',
              value: 25,
            },
            {
              type: 'Literature',
              value: 18,
            },
            {
              type: 'Science',
              value: 15,
            },
            {
              type: 'Other',
              value: 10,
            },
          ];
          var config = {
            appendPadding: 10,
            data: data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.9,
            label: {
              type: 'inner',
              offset: '-30%',
              content: function content(_ref) {
                var percent = _ref.percent;
                return ''.concat((percent * 100).toFixed(2), '%');
              },
              style: {
                fontSize: 14,
                textAlign: 'center',
              },
            },
            interactions: [{ type: 'element-active' }],
          };
        var typeData = [
            {
                type: 'Code',
                sales: 38,
            },
            {
                type: 'Education',
                sales: 52,
            },
            {
                type: 'Literature',
                sales: 61,
            },
            {
                type: 'Science',
                sales: 40,
            },
            {
                type: 'Other',
                sales: 70,
            }
        ];
        var paletteSemanticRed = '#F4664A';
        var brandColor = '#5B8FF9';
        var typeConfig = {
            data: typeData,
            xField: 'type',
            yField: 'sales',
            autoFit: false,
            width: 400,
            color: function color(_ref) {
                var type = _ref.type;
                if (type === 'Literature') {
                    return paletteSemanticRed;
                }
                return brandColor;
            },
            label: {
                position: 'middle',
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },

            meta: {
                type: { alias: '类别' },
                sales: { alias: '销售额' },
            },
        };
        var bookData = [
            {
                type: 'Java',
                sales: 70,
            },
            {
                type: 'CSAPP',
                sales: 82,
            },
            {
                type: '小王子',
                sales: 30,
            },
            {
                type: '三体',
                sales: 40,
            },
            {
                type: '活着',
                sales: 44,
            }
        ];
        var bookConfig = {
            data: bookData,
            xField: 'type',
            yField: 'sales',
            autoFit: false,
            width: 400,
            color: function color(_ref) {
                var type = _ref.type;
                if (type === 'CSAPP') {
                    return paletteSemanticRed;
                }
                return brandColor;
            },
            label: {
                position: 'middle',
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },
            meta: {
                type: { alias: '书籍' },
                sales: { alias: '销售额' },
            },
        };
        var userData = [
            {
                type: 'NewComer',
                sales: 70,
            },
            {
                type: 'usr1',
                sales: 82,
            },
            {
                type: 'usr2',
                sales: 30,
            },
            {
                type: 'usr3',
                sales: 40,
            },
            {
                type: 'admin',
                sales: 44,
            }
        ];
        var userConfig = {
            data: userData,
            xField: 'type',
            yField: 'sales',
            autoFit: false,
            width: 400,
            color: function color(_ref) {
                var type = _ref.type;
                if (type === 'usr1') {
                    return paletteSemanticRed;
                }
                return brandColor;
            },
            label: {
                position: 'middle',
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },
            legend: {

            },
            meta: {
                type: { alias: '用户名' },
                sales: { alias: '销售额' },
            },
        };
        return (
            <div className="analysis-container">

                <Divider orientation="left">Hot-Selling Books</Divider>
                <Select defaultValue="All" style={{ width: 120, marginTop: 30 }} onChange={this.handleBookChange}>
                    <Option value="all">All</Option>
                    <Option value="last-week">Last Week</Option>
                    <Option value="last-month">Last Month</Option>
                    <Option value="last-three-months">Last Three Months</Option>
                    <Option value="last-half-year">Last Half Year</Option>
                    <Option value="last-year">Last Year</Option>
                </Select>
                <div className="chart-container">
                    <div style={{ marginRight: 100 }}>
                        {/* <Column {...typeConfig} /> */}
                        <Pie {...config} />
                    </div>
                    <div width="50%">
                        <Column {...bookConfig} />
                    </div>
                </div>
                <Divider orientation="left">Cosumer List</Divider>
                <Select defaultValue="All" style={{ width: 120, marginTop: 30  }} onChange={this.handleCustomerChange}>
                    <Option value="all">All</Option>
                    <Option value="last-week">Last Week</Option>
                    <Option value="last-month">Last Month</Option>
                    <Option value="last-three-months">Last Three Months</Option>
                    <Option value="last-half-year">Last Half Year</Option>
                    <Option value="last-year">Last Year</Option>
                </Select>
                <div className="chart-container">
                    <Column {...userConfig}/>
                </div>
            </div>
        )
    }
}

export default Analysis;