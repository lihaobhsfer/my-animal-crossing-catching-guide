// TODO: Icon for "Available Now", and display near the pic

import React from "react";
import {Card, Row, Col} from "antd"
import {
  ClockCircleTwoTone,
  CalendarTwoTone,
  EnvironmentTwoTone,
  DollarCircleTwoTone,
  SlidersTwoTone,
  AlertTwoTone,
  WarningTwoTone
} from "@ant-design/icons";

const CustomCard = ({url,
  Name,
  Price,
  Location,
  Size,
  Time,
  MonthsInWord,
  goneNextMonth,
  newThisMonth,
  availableNow}) => (
  <Card
    style={{
      background: "#fefae3",
      margin: "5px",
      borderRadius: "10px",
    }}
  >
    <img style={{ display: "block", margin: "0 auto" }} src={url} alt={Name} />
    <div className="title">
      <h3>{Name}</h3>
    </div>
    <div className="card-desc">
      <Row>
        <Col span={4}>
          <EnvironmentTwoTone twoToneColor="rgb(223, 180, 129)" />
        </Col>
        <Col span={20}>
          <p className="desc-text">{Location}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <CalendarTwoTone twoToneColor="rgb(223, 180, 129)" />
        </Col>
        <Col span={20}>
          <p className="desc-text">{MonthsInWord}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <ClockCircleTwoTone twoToneColor="rgb(223, 180, 129)" />
        </Col>
        <Col span={20}>
          <p className="desc-text">{Time}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <DollarCircleTwoTone twoToneColor="rgb(223, 180, 129)" />
        </Col>
        <Col span={20}>
          <p className="desc-text">{Price}</p>
        </Col>
      </Row>
      {Size && (
        <Row>
          <Col span={4}>
            <SlidersTwoTone twoToneColor="rgb(223, 180, 129)" />
          </Col>
          <Col span={20}>
            <p className="desc-text">{Size}</p>
          </Col>
        </Row>
      )}
      {goneNextMonth && (
        <Row>
          <Col span={4}>
            <WarningTwoTone twoToneColor="#c09279" />
          </Col>
          <Col span={20}>
            <p className="desc-text">Gone Next Month</p>
          </Col>
        </Row>
      )}
      {newThisMonth && (
        <Row>
          <Col span={4}>
            <AlertTwoTone twoToneColor="#71997f" />
          </Col>
          <Col span={20}>
            <p className="desc-text">New This Month</p>
          </Col>
        </Row>
      )}
      {availableNow && (
        <Row>
          <Col span={4}>
            <AlertTwoTone twoToneColor="#71997f" />
          </Col>
          <Col span={20}>
            <p className="desc-text">Available Now</p>
          </Col>
        </Row>
      )}
    </div>
  </Card>
);

export default CustomCard