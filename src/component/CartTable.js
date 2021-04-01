import React from 'react'
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';

class CartTable extends React.Component {
    state = {
    total: 0,
    searchText: '',
    searchedColumn: '',
    selectedRowKeys: [],
    data: [
      {
        key: '1',
        name: '三体',
        author: '刘慈欣',
        cover: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
        quantity: 1,
        unitprice: 50,
        price: 50,
        date: '2020-3-20',
        description: '程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！'
      },
      {
        key: '2',
        name: '深入理解计算机系统',
        author: '刘慈欣',
        cover: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
        quantity: 1,
        unitprice: 50,
        price: 50,
        date: '2020-3-20',
        description: '程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！'
      },
      {
        key: '3',
        name: 'Java核心技术',
        author: '刘慈欣',
        cover: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
        quantity: 2,
        unitprice: 35,
        price: 70,
        date: '2020-3-20',
        description: '程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！'
      },
      {
        key: '4',
        name: 'Jim Red',
        author: '刘慈欣',
        cover: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
        quantity: 2,
        unitprice: 35,
        price: 70,
        date: '2020-3-20',
        description: '程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！'
      },
    ],
  };
  
  selectRow = (record) => {
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
    }
    this.setState({ selectedRowKeys });
  }
  onSelectedRowKeysChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleNumChange = (key, value) => {
    console.log(key, value);
    this.state.data.forEach(element => {
      if (element.key == key) {
        element.quantity = value;
        element.price = element.quantity * element.unitprice;
      }
    });
    this.setState(
      {data: this.state.data}
    )
  }
  
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        width: '20%',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        render: (_,record) => (
          <InputNumber type="number" min={1} defaultValue={record.quantity} onChange={(value)=>{this.handleNumChange(record.key, value)}}/>
        )
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        width: '20%',
      },
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    };
    this.state.total = 0;
    this.state.data.forEach(item => {
      if (this.state.selectedRowKeys.indexOf(item.key) >= 0) {
        this.state.total += item.price;
      }
    });

    return (
        <div>
        <Table columns={columns} dataSource={this.state.data} 
            expandable={{
            expandedRowRender: record => (
                <div style={{display: 'flex' }}>
                    <img src={record.cover} alt="" width="100px"/>
                    <p style={{ margin: 'auto' }}>{record.description}</p>
                </div>
                ),
                rowExpandable: record => record.name !== 'Not Expandable',
            }}
            rowSelection={rowSelection}
            // onRow={(record) => ({
            //     onClick: () => {
            //       this.selectRow(record);
            //     },
            // })}
        />
        <div style={{float: 'right', display: 'flex'}}>
            <p style={{margin: 'auto 20px', fontSize:'20px'}}>Total: ${this.state.total}</p>
            <Button type="primary" size="large">Pay Now</Button>
        </div> 
      </div>
      );
  }
}
export default CartTable;