import React from "react";
import { Card, Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;

export default function DateCard({
  month,
  date,
  day,
  onChange,
  disabled,
  slectedDate,
}) {
  return (
    <Row>
      <Col span={24}>
        <Card
          className={!disabled ? "card-enable" : "card-disable"}
          title={month}
          onClick={!disabled ? () => onChange(slectedDate) : () => {}}
        >
          <Title className="date-title " level={1}>
            {date}
          </Title>
          <Paragraph className="day-name">
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
}
