import React from "react";
import { Card, Typography, Col } from "antd";
const { Title, Paragraph } = Typography;

export default function DateCard(props) {
  const {
    month,
    date,
    day,
    onChange,
    disabled,
    slectedDate,
    headStyles,
    bodyStyles,
  } = props;
  return (
    <Col span={24}>
      {!disabled ? (
        <Card
          className="card-enable"
          title={month}
          headStyle={headStyles}
          bodyStyle={bodyStyles}
          onClick={() => onChange(slectedDate)}
        >
          <Title className="date-title-head">{date}</Title>
          <Paragraph className="day-name">
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      ) : (
        <Card
          className={!disabled ? "card-enable" : "card-disable"}
          title={month}
          bodyStyle={bodyStyles}
          headStyle={headStyles}
        >
          <Title className="date-title-head">{date}</Title>
          <Paragraph className="day-name">
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      )}
    </Col>
  );
}
