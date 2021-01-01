// TODO: Icon for "Available Now", and display near the pic

import React from "react";
import { Card, Row, Col } from "antd";
import {
  ClockCircleTwoTone,
  CalendarTwoTone,
  EnvironmentTwoTone,
  DollarCircleTwoTone,
  SlidersTwoTone,
  AlertTwoTone,
  WarningTwoTone,
  PlayCircleTwoTone,
} from "@ant-design/icons";

interface cardStatelessProps {
  url: string;
  Name: string;
  Price: number;
  Location: string;
  Size: string;
  Time: string;
  MonthsInWord: string;
  goneNextMonth: boolean;
  newThisMonth: boolean;
  availableNow: boolean;
  ShadowSize: string;
  SwimmingPattern: string;
}

const CustomCard: React.SFC<cardStatelessProps> = ({
  url,
  Name,
  Price,
  Location,
  Size,
  Time,
  MonthsInWord,
  goneNextMonth,
  newThisMonth,
  availableNow,
  ShadowSize,
  SwimmingPattern,
}) => (
  <Card
    style={{
      background: "#fefae3",
      margin: "5px",
      borderRadius: "10px",
    }}
  >
    <img
      style={{ display: "block", margin: "0 auto", width: "60%" }}
      src={url}
      alt={Name}
    />
    <div className="title">{Name}</div>
    <div className="card-desc">
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
      {Location && (
        <Row>
          <Col span={4}>
            <EnvironmentTwoTone twoToneColor="rgb(223, 180, 129)" />
          </Col>
          <Col span={20}>
            <p className="desc-text">{Location}</p>
          </Col>
        </Row>
      )}
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
      {ShadowSize && (
        <Row>
          <Col span={4}>
            <SlidersTwoTone twoToneColor="rgb(223, 180, 129)" />
          </Col>
          <Col span={20}>
            <p className="desc-text">{ShadowSize}</p>
          </Col>
        </Row>
      )}
      {SwimmingPattern && (
        <Row>
          <Col span={4}>
            <PlayCircleTwoTone twoToneColor="rgb(223, 180, 129)" />
          </Col>
          <Col span={20}>
            <p className="desc-text">{SwimmingPattern}</p>
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
    </div>
  </Card>
);

export default CustomCard;
