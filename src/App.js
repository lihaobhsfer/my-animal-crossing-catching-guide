import React from "react";
import * as d3 from "d3";
import fishData from "./data/data.csv";
import { Table, Radio, Row, Col, Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./App.css";
import CustomCard from "./components/CustomCard";
class App extends React.Component {
  state = {
    hemisphere: "Northern Hemisphere",
    columns: [],
    type: "Fish",
    data: [],
    dataAggregated: [], // stores aggregated month data
    viewMode: "CARD",
    sortByPrice: "DESC",
    filterGoneNextMonth: true,
    filterNewThisMonth: false,
    showThisMonth: true,
    showAll: true
  };

  componentDidMount() {
    let df = [];
    let columns = [];

    // d3.dsv("|", "https://lihaobhsfer.cn/data.csv",function (data) {
    d3.dsv("|", fishData, function (data) {
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

      if (newArr.indexOf(month) !== -1 && newArr.indexOf(nextMonth) === -1) data["goneNextMonth"] = true;
      if (newArr.indexOf(prevMonth) === -1 && newArr.indexOf(month) !== -1) data["newThisMonth"] = true;

      data["Months"] = newArr;
      data["MonthsInWord"] = translateMonth(newArr);
      data["availableNow"] = checkAvailableNow(data["Time"])
      df.push(data);

      function checkAvailableNow (timeInWords) {
        let date = new Date()
        let currentHour = date.getHours()
        console.log("current hour is", currentHour)
        console.log(timeInWords)
        if (timeInWords === "All day"){
          console.log("all day")
          return true
        }
        let ret = []
        if(timeInWords.match(/[0-9]+pm - [0-9]+am/)){
          let numbers = timeInWords.match(/[0-9]+/g).map(i => parseInt(i))
          console.log(numbers)
          for(let j = 0; j<=numbers[1]; j++) ret.push(j)
          for(let j = numbers[0] + 12; j <= 23; j++) ret.push(j)
        } else if(timeInWords.match(/[0-9]+am - [0-9]+pm/)){
          let numbers = timeInWords.match(/[0-9]+/g).map(i => parseInt(i))
          console.log(numbers)
          for(let i = numbers[0]; i<=numbers[1]+12; i++) ret.push(i)
        }else if(timeInWords.match(/[0-9]+am - [0-9]+am & [0-9]+pm - [0-9]+pm/)){
          let numbers = timeInWords.match(/[0-9]+/g).map(i => parseInt(i))
          console.log(numbers)
          for(let i = numbers[0]; i<=numbers[1]; i++) ret.push(i)
          for(let i = numbers[2]; i<=numbers[3]; i++) ret.push(i+12)
        }
        console.log(ret)
        return ret.indexOf(currentHour) !== -1
      }

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
          this.sortData();
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

    if (this.state.filterGoneNextMonth)
      df = df.filter((i) => i["goneNextMonth"] === true);
    if (this.state.filterNewThisMonth)
      df = df.filter(i => i["newThisMonth"] === true)
     
    let date = new Date();
    let month = date.getMonth() + 1
    if(this.state.showThisMonth)
      df = df.filter(i => i["Months"].indexOf(month) !== -1)
    // Prepare data for this month
    let names = {};
    let filteredData = [];
    // eslint-disable-next-line
    df.map((i) => {
      if (!names[i["Name"]]) {
        names[i["Name"]] = 1;
        filteredData.push(i);
      }
    });
    console.log(filteredData.length);
    this.setState({
      filteredData: filteredData,
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
  onFilterGoneNextMonthButtonClicked = () => {
    let filterStuff = this.state.filterGoneNextMonth;
    this.setState(
      {
        filterGoneNextMonth: !filterStuff,
      },
      () => {
        this.sortData();
      }
    );
  };

  onFilterGNewThisMonthButtonClicked = () => {
    let filterStuff = this.state.filterNewThisMonth;
    this.setState(
      {
        filterNewThisMonth: !filterStuff,
      },
      () => {
        this.sortData();
      }
    );
  };

  onShowThisMonthClicked = () => {
    let filterStuff = this.state.showThisMonth;
    this.setState({
      showThisMonth: !filterStuff
    },() => {
      this.sortData()
    })
  }
  render() {
    return (
      <div className="container">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
                <div style={{width: "100%"}}>
                  <Row style={{display:"flex", alignItems:"center"}}>
                    <Col sm={12} md={6} lg={4}>
                      <Button className={
                        this.state.showThisMonth
                        ? "button-filter-checked"
                        : "button-filter"
                      } onClick={this.onShowThisMonthClicked}>Available This Month</Button>
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
                    <Col>
                      <Button
                        className={
                          this.state.filterGoneNextMonth
                            ? "button-filter-checked"
                            : "button-filter"
                        }
                        onClick={this.onFilterGoneNextMonthButtonClicked}
                      >
                        Gone Next Month
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className={
                          this.state.filterNewThisMonth
                            ? "button-filter-checked"
                            : "button-filter"
                        }
                        onClick={this.onFilterGNewThisMonthButtonClicked}
                      >
                        New This Month
                      </Button>
                    </Col>
                  </Row>

                  <Row style={{ margin: "5px" }}>
                    {this.state.filteredData &&
                      this.state.filteredData.map(
                        ({ ...itemProps }) => (
                          <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                            <CustomCard {...itemProps} />
                          </Col>
                        )
                      )}
                  </Row>
                </div>
              )}
          </div>
      </div>
    );
  }
}

export default App;
