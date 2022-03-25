import React from "react";
import { Card, Typography, Col } from "antd";
const { Title, Paragraph } = Typography;

export default function DateCard({
  month,
  date,
  day,
  onChange,
  disabled,
  slectedDate,
}) {
  const CardHeaderStyle = {
    backgroundColor: !disabled ? "#f00202" : "#8e8f90",
    borderRadius: "9px 9px 0 0",
    color: "#fff",
    fontSize: "18px",
  };

  const CardBodyStyle = {
    fontWeight: "normal",
    color: "black",
    backgroundColor: !disabled ? "#fff" : "#f0f0f0",
  };

  return (
    <Col span={24}>
      {!disabled ? (
        <Card
          className="card-enable"
          title={month}
          headStyle={CardHeaderStyle}
          bodyStyle={CardBodyStyle}
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
          bodyStyle={CardBodyStyle}
          headStyle={CardHeaderStyle}
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
