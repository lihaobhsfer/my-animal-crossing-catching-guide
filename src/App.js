import React from "react";
import "./App.css";
import * as d3 from 'd3';
import fishData from './data/fish.csv';
import {Layout, Table} from "antd"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const { Content } = Layout;
class App extends React.Component {
  state={
    columns: [],
    df: []
  }
  componentWillMount(){
    let df = []
    let columns = []
    d3.csv(fishData, function(data) {
      df.push(data)
    }).then(() => {
      let row = df[0]
      console.log(df)
      for (const [key, val] of Object.entries(row)){
        console.log(key)
        if(key === 'url'){
          columns.push({
              title: 'Image',
              key: 'url',
              dataIndex: 'url',
              render: url => {
                return (
                  <img src={url} alt='img' />
                );
              },
          })
        }else{
          columns.push({
            title: key,
            dataIndex: key,
            key: key,
          })
        }
      }
      this.setState({
        data: df, 
        columns: columns
      })
    })
  }

  render() {
    return (
      <div className="container" >
        <Layout style={{backgroundColor:"#cce2cf"}}>
          <Content style={{maxWidth: "1200px", margin:"0 auto"}}>
            <h1>Animal Crossing Catch Guide</h1>
            {/* Table */}
            {this.state.data && this.state.data.length > 0 && <Table columns={this.state.columns} dataSource={this.state.data} />}
          </Content>
          
        </Layout>
        
      </div>
    );
  }
}

export default App;
