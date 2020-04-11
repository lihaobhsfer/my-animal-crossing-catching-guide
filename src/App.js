import React from "react";
import * as d3 from "d3";
import fishData from "./data/data.csv";
import { Layout, Table, Radio, Row, Col, Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./App.css";
import CustomCard from "./components/CustomCard";

const { Content } = Layout;
class App extends React.Component {
  state = {
    hemisphere: "Northern Hemisphere",
    columns: [],
    type: "Fish",
    data: [],
    dataAggregated: [], // stores aggregated month data
    viewMode: "CARD",
    sortByPrice: "DESC",
  };

  componentDidMount() {
    let df = [];
    let columns = [];

    d3.dsv("|", "https://lihaobhsfer.cn/data.csv",function (data) {
    // d3.dsv("|", fishData, function (data) {
      let arr = data["Months"].replace("[", "").replace("]", "").split(",");
      let newArr = arr.map((i) => {
        return parseInt(i, 10);
      });

      data["goneNextMonth"] = false;
      data["newThisMonth"] = false;
      let date = new Date();
      let month = date.getMonth() + 1;
      let nextMonth = (month % 12) + 1;
      let prevMonth = month - 1;
      if (prevMonth === 0) prevMonth = 12;

      if (newArr.indexOf(nextMonth) === -1) data["goneNextMonth"] = true;
      if (newArr.indexOf(prevMonth) === -1) data["newThisMonth"] = true;

      data["Months"] = newArr;
      data["MonthsInWord"] = translateMonth(newArr);
      df.push(data);

      function translateMonth(arr) {
        if (arr.length === 12) return "All Year";
        else {
          let res = [];
          let tmpArr = [];
          tmpArr.push(arr[0]);

          for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] === 1) tmpArr.push(arr[i]);
            else {
              res.push(tmpArr);
              tmpArr = [];
              tmpArr.push(arr[i]);
            }
          }
          res.push(tmpArr);
          if (arr.indexOf(1) !== -1 && arr.indexOf(12) !== -1) {
            let last = res.pop();
            res[0].unshift(...last.reverse());
          }

          let ret = "";
          let months = [
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "Jun.",
            "Jul.",
            "Aug.",
            "Sep.",
            "Oct.",
            "Nov.",
            "Dec.",
          ];
          for (let i = 0; i < res.length; i++) {
            let a = res[i];
            let length = a.length;
            if (length === 1) ret = ret + months[a[0] - 1];
            else ret = ret + months[a[0] - 1] + "-" + months[a[length - 1] - 1];
            if (i !== res.length - 1) ret += ", ";
          }
          return ret;
        }
      }
    }).then(() => {
      let row = df[0];
      for (const [key] of Object.entries(row)) {
        if (key === "Month" || key.match("Hemisphere")) {
        } else if (key === "url") {
          columns.push({
            title: "Image",
            key: "url",
            dataIndex: "url",
            render: (url) => {
              return <img src={url} alt="img" />;
            },
          });
        } else {
          columns.push({
            title: key,
            dataIndex: key,
            key: key,
          });
        }
      }

      // filter for hemisphere

      this.setState(
        {
          data: df,
          columns: columns,
        },
        () => {
          this.filterData();
        }
      );
    });
  }

  filterData = () => {
    let df = this.state.data;
    df = df.filter(
      (i) =>
        i["Hemisphere"] === this.state.hemisphere &&
        i["Type"] === this.state.type
    );

    // Prepare data for this month
    let date = new Date();
    let month = date.getMonth() + 1;
    let dataThisMonth = df.filter((i) => i["Months"].indexOf(month) !== -1);
    let names = {};
    let filteredDataThisMonth = [];
    // eslint-disable-next-line
    dataThisMonth.map((i) => {
      if (!names[i["Name"]]) {
        names[i["Name"]] = 1;
        filteredDataThisMonth.push(i);
      }
    });
    console.log(filteredDataThisMonth.length);
    this.setState({
      filteredData: df,
      filteredDataThisMonth: filteredDataThisMonth,
    });
  };

  sortData = () => {
    let type = this.state.sortByPrice;

    let df = this.state.data;
    if (type === "ASC")
      df.sort(
        (a, b) =>
          parseInt(a.Price.replace(",", ""), 10) -
            parseInt(b.Price.replace(",", ""), 10) ||
          a.Name.localeCompare(b.Name)
      );
    if (type === "DESC")
      df.sort(
        (a, b) =>
          parseInt(b.Price.replace(",", ""), 10) -
            parseInt(a.Price.replace(",", ""), 10) ||
          a.Name.localeCompare(b.Name)
      );
    if (type === "NONE") df.sort((a, b) => a.Name.localeCompare(b.Name));
    this.setState(
      {
        data: df,
      },
      () => {
        this.filterData();
      }
    );
  };

  onSortButtonClicked = () => {
    let sortType = this.state.sortByPrice;
    if (sortType === "NONE") sortType = "ASC";
    else if (sortType === "ASC") sortType = "DESC";
    else sortType = "NONE";

    this.setState(
      {
        sortByPrice: sortType,
      },
      () => {
        this.sortData();
      }
    );
  };

  onMonthChange = (e) => {
    console.log(e.target.value);
    this.setState(
      {
        month: e.target.value,
      },
      () => {
        this.filterData();
      }
    );
  };

  onHemisphereChange = (e) => {
    console.log(e.target.value);
    this.setState(
      {
        hemisphere: e.target.value,
      },
      () => {
        this.filterData();
      }
    );
  };

  onTypeChange = (e) => {
    console.log(e.target.value);
    this.setState(
      {
        type: e.target.value,
      },
      () => {
        this.filterData();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <Layout style={{ backgroundColor: "#cce2cf" }}>
          <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1 className="page-title">Animal Crossing Catch Guide</h1>
            <Row>
              <Radio.Group
                className="radio-select"
                defaultValue="Northern Hemisphere"
                onChange={this.onHemisphereChange}
              >
                <Radio.Button value="Northern Hemisphere">
                  Northern Hemisphere
                </Radio.Button>
                <Radio.Button value="Southern Hemisphere">
                  Southern Hemisphere
                </Radio.Button>
              </Radio.Group>
            </Row>
            <Row>
              <Radio.Group
                className="radio-select"
                defaultValue="Fish"
                onChange={this.onTypeChange}
              >
                <Radio.Button value="Fish">Fish</Radio.Button>
                <Radio.Button value="Bug">Bugs</Radio.Button>
              </Radio.Group>
            </Row>

            {/* Table, view mode is "LIST" */}
            {this.state.viewMode === "LIST" &&
              this.state.data &&
              this.state.data.length > 0 && (
                <Table
                  columns={this.state.columns}
                  dataSource={this.state.filteredData}
                />
              )}
            {this.state.viewMode === "CARD" &&
              this.state.data &&
              this.state.data.length > 0 && (
                <div>
                  <Row>
                    <Col sm={12} md={6} lg={4}>
                      <h2>Available This Month</h2>
                    </Col>
                    <Col>
                      <Button
                        className="button-select"
                        onClick={this.onSortButtonClicked}
                      >
                        Price{" "}
                        {this.state.sortByPrice === "NONE" ? (
                          ""
                        ) : this.state.sortByPrice === "ASC" ? (
                          <ArrowUpOutlined />
                        ) : (
                          <ArrowDownOutlined />
                        )}
                      </Button>
                    </Col>
                  </Row>

                  <Row style={{ margin: "5px" }}>
                    {this.state.filteredDataThisMonth &&
                      this.state.filteredDataThisMonth.map(
                        ({ ...itemProps }) => (
                          <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                            <CustomCard {...itemProps} />
                          </Col>
                        )
                      )}
                  </Row>
                </div>
              )}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
