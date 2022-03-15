import React from "react";
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
            className="circle-icon"
            onClick={handleIncrease}
          />
          <TimePicker
            className="time-picker"
            defaultValue={defaultValue}
            value={value}
            format={"HH:mm"}
            onChange={handleChange}
            suffixIcon={null}
            clearIcon={null}
            bordered={false}
          />
          <MinusCircleOutlined
            className="circle-icon"
            onClick={handleDecrease}
          />
        </Row>
      </Col>
    </Row>
  );
}
