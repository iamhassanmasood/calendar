import React from "react";
import { Card, Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;

import "antd/dist/antd.less";

export default function DateCard({
  month,
  date,
  day,
  onChange,
  disabled,
  slected,
}) {
  return (
    <Row>
      <Col span={24}>
        <Card
          title={month}
          style={{ width: 170, height: 180, textAlign: "center" }}
          onClick={!disabled ? () => onChange(slected) : () => {}}
        >
          <Title level={1} style={{ color: "gray", fontWeight: "normal" }}>
            {date}
          </Title>
          <Paragraph style={{ color: "gray", fontSize: "20px", bottom: "0" }}>
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
}
