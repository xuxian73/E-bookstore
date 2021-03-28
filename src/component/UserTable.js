import React from 'react';
import { Table, Switch, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
    {
        username: 'Newbee',
        email: 'blabla@sjtu.edu,cn',
        authority: 'User'
    },
    {
        username: 'Newbee',
        email: 'blabla@sjtu.edu,cn',
        authority: 'User'
    },
    {
        username: 'Newbee',
        email: 'blabla@sjtu.edu,cn',
        authority: 'User'
    },
    {
        username: 'Admin',
        email: 'admin@sjtu.edu,cn',
        authority: 'Administrator'
    },
];

class UserTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
      };
    
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
      
      onChangeSwitch = (isSelect,record) =>{
        console.log(record); // True / False
      
        if(isSelect){
          // authorie the user
        }
      
        if(!isSelect){
          // disable the user
        }
      }
    render() {
        
        const columns = [
            {
              title: 'Username',
              dataIndex: 'username',
              key: 'username',
              width: '20%',
              ...this.getColumnSearchProps('username'),
            },
            {
              title: 'Authority',
              dataIndex: 'authority',
              key: 'authority',
              width: '20%',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
              width: '30%',
            },
            {
              title: 'Manage',
              dataIndex: 'switch',
              key: 'switch',
              render: (e, record)=> (
                  <Switch 
                    defaultChecked = {e}
                    checkedChildren="Enabled" 
                    unCheckedChildren="Disabled" 
                    onChange={
                      (value) => this.onChangeSwitch(value,record)
                    } 
                  />
              )
            },
          ];
        return(
        <Table columns={columns} dataSource={data}/>
        )
    }
}
export default UserTable;