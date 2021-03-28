import React from 'react'
import { List, Card } from 'antd';
import { Link } from 'react-router-dom'
const { Meta } = Card;

class BookList extends React.Component {
  state = {
    filteredData: [],
  }
  render() {
    this.state.filteredData = [];
    this.props.data.forEach(element => {
      if (element.title.indexOf(this.props.filterText) != -1
        && element.type.indexOf(this.props.type) != -1)
        this.state.filteredData.push(element);
    });
    console.log(this.state.filteredData);
    console.log("rendering");
    return (
      <List
        style={{ width: '100%' }}
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.state.filteredData}
        renderItem={item => (
          <List.Item>
            <Link to='/detail'>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={item.src} />}
              >
                <Meta title={item.title} description="凯S.霍斯特曼" />
              </Card>
            </Link>
          </List.Item>
        )
        }
      />
    )
  }
}
export default BookList;