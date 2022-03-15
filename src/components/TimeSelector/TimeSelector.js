import React from "react";
import { Row, Col, Typography, TimePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function TimeSelector({
  defaultValue,
  value,
  format,
  handleChange,
}) {
  return (
    <Row>
      <Col span={24}>
        <Paragraph className="date-link">Time</Paragraph>
        <Row className="date-hide-show">
          <TimePicker
            className="time-picker"
            defaultValue={defaultValue}
            value={value}
            format={format}
            onChange={handleChange}
            suffixIcon={null}
            clearIcon={null}
            bordered={false}
          />
          <DownOutlined className="out-lined-icon" />
        </Row>
      </Col>
    </Row>
  );
}
