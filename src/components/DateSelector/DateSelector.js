import React from "react";
import { Row, Col, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function DateSelector({ show, selectedDate, onShow }) {
  return (
    <Row>
      <Col span={24}>
        <Paragraph className="date-link">Date</Paragraph>
        <Row className="date-hide-show">
          <Paragraph className="date-title-top">{selectedDate}</Paragraph>
          {show ? (
            <DownOutlined className="icon-class" onClick={onShow} />
          ) : (
            <UpOutlined className="icon-class" onClick={onShow} />
          )}
        </Row>
      </Col>
    </Row>
  );
}
