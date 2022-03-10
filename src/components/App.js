import React, { useState, useEffect } from "react";
import moment from "moment";
import DateCard from "./DateCard";
import "antd/dist/antd.css";
import { Carousel, Row, Col, Divider } from "antd";
import { Typography } from "antd";
import {
  DownOutlined,
  UpOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const { Link } = Typography;

export default function App(props) {
  const [records, setRecords] = useState([]);
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
        date: date.format("YYYY-MM-DD"),
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
    const first = moment(new Date());
    const selected = moment("2022-07-10");
    const selectedDayIndex = moment.duration(selected.diff(first)).asDays();
    console.log(selectedDayIndex, "selectedDayIndex");
    generateDates(props);
  }, []);

  const carouselSettings = {
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Row>
          <Col span={24}>
            <Link className="date-link">Date</Link>
            {show ? (
              <DownOutlined
                onClick={() => setShow((x) => !x)}
                className="date-hide-show"
                style={{ fontSize: "20px" }}
              />
            ) : (
              <UpOutlined
                onClick={() => setShow((x) => !x)}
                className="date-hide-show"
                style={{ fontSize: "20px" }}
              />
            )}
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
                      key={idx}
                      selected={item.date}
                    />
                  ))}
                </Carousel>
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col span={24}>
                  <Link className="date-link">Time</Link>
                  <DownOutlined
                    className="date-hide-show"
                    style={{ fontSize: "20px" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Link className="date-link">Duration</Link>
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
