import React from "react";
import "./App.css";
import * as d3 from 'd3';
import fishData from './data/fish.csv';
import {Layout, Table, Radio, Card, Row, Col} from "antd"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const months = ['January','February','March', 'April','May', 'June', 'July', 'August', 'September' ,'October', 'November','December']
const { Content } = Layout;
class App extends React.Component {
  state={
    columns: [],
    data: [],
    dataAggregated: [], // stores aggregated month data
    viewMode: "CARD"
  }
  componentWillMount(){
    let df = []
    let columns = []
    d3.csv(fishData, function(data) {
      df.push(data)
    }).then(() => {
      let row = df[0]
      console.log(df)
      for (const [key] of Object.entries(row)){
        console.log(key)
        if(key === 'Month' || key.match("Hemisphere")){

        } else if(key === 'url'){
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
        filteredData: df,
        columns: columns
      })
    })
  }

  onMonthChange = e => {
    console.log(e.target.value)
    let data = this.state.data.filter(i => i['Month'] === e.target.value)
    this.setState({
      filteredData: data
    })
  }

  render() {
    return (
      <div className="container" >
        <Layout style={{backgroundColor:"#cce2cf"}}>
          <Content style={{maxWidth: "1200px", margin:"0 auto"}}>
            <h1>Animal Crossing Catch Guide</h1>
            {/* Month check box */}
            <Radio.Group defaultValue="1" style={{ marginTop: 16, marginLeft: 5, marginRight: 5}} onChange={this.onMonthChange}>
            {months.map((month, index) => (
              <Radio.Button value={index + 1 + ""} style={{background:"#fefae3"}}>{month}</Radio.Button>
            ))}
            </Radio.Group>
            
            {/* Table, view mode is "LIST" */}
            {this.state.viewMode === "LIST" && this.state.data && this.state.data.length > 0 && <Table columns={this.state.columns} dataSource={this.state.filteredData} />}
            {this.state.viewMode === "CARD" && this.state.data && this.state.data.length > 0 && (
              <Row style={{margin:"5px"}}>
                {this.state.filteredData.map(({url, Name, Price, Location, Size, Time }) => (
                  <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                    <Card style={{background: "#fefae3", margin:"5px", borderRadius:"10px"}}>
                    <img style={{display:"block"}} src={url} alt={Name}/>
                    <h3 style={{overflow:"hidden !important"}}>{Name}</h3>
                    <p>{Location}</p>
                    <p>{Time}</p>
                    <p>{Price}</p>
                    <p>{Size}</p>
                  </Card>
                  </Col>
                  
                ))}
              </Row>
            )}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
