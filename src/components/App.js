import React, { useState, useEffect } from "react";
import moment from "moment";
import DateCard from "./DateCard";
import "antd/dist/antd.css";
import { Carousel, Row, Col, Typography, TimePicker } from "antd";
import {
  DownOutlined,
  UpOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

export default function App(props) {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeVal, setTimeVal] = useState("00:00");
  const [show, setShow] = useState(true);
  const generateDates = (props) => {
    const date = moment(props.firstDate);
    const disabledDates = props.disabledDates ? props.disabledDates : [];

    const first = props.firstDate
      ? moment(props.firstDate)
      : moment(new Date());
    const last = props.lastDate ? moment(props.lastDate) : null;

    const numberOfDays = last
      ? moment.duration(last.diff(first)).asDays() + 1
      : props.numberOfDays;

    const dates = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const isDisabled = !!disabledDates.includes(date.format("YYYY-MM-DD"));

      dates.push({
        date: `${date.format("D")}. ${date.format("MMMM")} ${date.format(
          "YYYY"
        )}`,
        day: date.format("D"),
        day_of_week: date.format("dddd"),
        month: date.format("MMMM"),
        disabled: isDisabled,
      });
      date.add(1, "days");
    }
    return setRecords(dates);
  };

  useEffect(() => {
    generateDates(props);
  }, []);

  const carouselSettings = {
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  function handleTimeChange(time) {
    let _time = moment(time).format("HH:mm");
    setTimeVal(_time);
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <Row>
          <Col span={24}>
            <Paragraph className="date-link">Date</Paragraph>
            <Row className="date-hide-show">
              <Paragraph style={{ paddingRight: "10px", fontSize: "16px" }}>
                {selectedDate}
              </Paragraph>
              {show ? (
                <DownOutlined
                  onClick={() => setShow((x) => !x)}
                  style={{ fontSize: "20px" }}
                />
              ) : (
                <UpOutlined
                  onClick={() => setShow((x) => !x)}
                  style={{ fontSize: "20px" }}
                />
              )}
            </Row>
          </Col>
        </Row>
        <>
          {show ? (
            <Row>
              <Col span={24} className="carousal-div">
                <Carousel autoplay {...carouselSettings}>
                  {records.map((item, idx) => (
                    <DateCard
                      month={item.month}
                      date={item.day}
                      day={item.day_of_week}
                      slected={item.date}
                      key={idx}
                      onChange={setSelectedDate}
                      disabled={item.disabled}
                    />
                  ))}
                </Carousel>
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col span={24}>
                  <Paragraph className="date-link">Time</Paragraph>
                  <Row className="date-hide-show">
                    <TimePicker
                      style={{ border: "none" }}
                      value={moment(timeVal, "HH:mm")}
                      format={"HH:mm"}
                      onChange={(time) => handleTimeChange(time)}
                    />
                    <DownOutlined style={{ fontSize: "20px" }} />
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Paragraph className="date-link">Duration</Paragraph>
                  <PlusCircleOutlined
                    className="date-hide-show"
                    style={{ fontSize: "24px" }}
                  />
                  <MinusCircleOutlined
                    className="date-hide-show"
                    style={{ fontSize: "24px" }}
                  />
                </Col>
              </Row>
            </>
          )}
        </>
      </Col>
    </Row>
  );
}
