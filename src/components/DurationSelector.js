import React from "react";
import "antd/dist/antd.less";
import { Row, Col, TimePicker, Typography } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;

export default function DurationSelector({
  handleIncrease,
  handleDecrease,
  value,
  defaultValue,
  handleChange,
}) {
  return (
    <Row>
      <Col span={24}>
        <Paragraph className="date-link">Duration</Paragraph>
        <Row className="date-hide-show">
          <PlusCircleOutlined
            onClick={handleIncrease}
            style={{ fontSize: "24px" }}
          />
          <TimePicker
            style={{ width: "60px" }}
            defaultValue={defaultValue}
            value={value}
            format={"HH:mm"}
            onChange={handleChange}
            suffixIcon={null}
            clearIcon={null}
            bordered={false}
          />
          <MinusCircleOutlined
            onClick={handleDecrease}
            style={{ fontSize: "24px" }}
          />
        </Row>
      </Col>
    </Row>
  );
}
