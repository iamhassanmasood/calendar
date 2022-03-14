import React from "react";
import "antd/dist/antd.less";
import { Row, Col, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function DateSelector({ show, selectedDate, onShow }) {
  return (
    <Row>
      <Col span={24}>
        <Paragraph className="date-link">Date</Paragraph>
        <Row className="date-hide-show">
          <Paragraph style={{ paddingRight: "10px", fontSize: "16px" }}>
            {selectedDate}
          </Paragraph>
          {show ? (
            <DownOutlined onClick={onShow} style={{ fontSize: "20px" }} />
          ) : (
            <UpOutlined onClick={onShow} style={{ fontSize: "20px" }} />
          )}
        </Row>
      </Col>
    </Row>
  );
}
