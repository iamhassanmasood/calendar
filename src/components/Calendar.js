import React, { useState, useEffect } from "react";
import moment from "moment";
import DateCard from "./DateCard";
import "antd/dist/antd.less";
import { Carousel, Row, Col, Typography, TimePicker } from "antd";
import {
  DownOutlined,
  UpOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const { Paragraph } = Typography;

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

function Calendar(props) {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeValue, setTimeValue] = useState("00:00");
  const [durationValue, setDurationValue] = useState("00:00");
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
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
    autoplay: props.autoplay,
    infinite: props.infinite,
    pauseOnHover: props.pauseOnHover,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    speed: props.speed,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function handleTimeChange(time) {
    let _time = moment(time).format("HH:mm");
    setTimeValue(_time);
  }
  function handleDurationChange(time) {
    let _time = moment(time).format("HH:mm");
    setDurationValue(_time);
    let arr = _time.split(":");
    setDurationHours(Number(arr[0]));
    setDurationMinutes(Number(arr[1]));
  }

  function onIncreaseDuration() {
    if (durationMinutes < 59 && durationMinutes >= 0) {
      setDurationMinutes((x) => x + 1);
    } else if (durationMinutes === 59) {
      setDurationHours((x) => x + 1);
      setDurationMinutes(0);
    }
  }

  function onDecreaseDuration() {
    if (durationMinutes > 0) {
      setDurationMinutes((x) => x - 1);
    }
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
                <Carousel
                  autoplay
                  {...carouselSettings}
                  swipeToSlide
                  draggable
                  arrows={true}
                >
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
                      style={{ width: "60px" }}
                      defaultValue={moment(timeValue, "HH:mm")}
                      value={moment(timeValue, "HH:mm")}
                      format={"HH:mm"}
                      onChange={(time) => handleTimeChange(time)}
                      suffixIcon={null}
                      clearIcon={null}
                      bordered={false}
                    />
                    <DownOutlined style={{ fontSize: "20px" }} />
                  </Row>
                </Col>
              </Row>

              {timeValue !== "00:00" ? (
                <Row>
                  <Col span={24}>
                    <Paragraph className="date-link">Duration</Paragraph>
                    <Row className="date-hide-show">
                      <PlusCircleOutlined
                        onClick={onIncreaseDuration}
                        style={{ fontSize: "24px" }}
                      />
                      <TimePicker
                        style={{ width: "60px" }}
                        defaultValue={moment(durationValue, "HH:mm")}
                        value={moment(
                          `${durationHours}:${durationMinutes}`,
                          "HH:mm"
                        )}
                        format={"HH:mm"}
                        onChange={(time) => handleDurationChange(time)}
                        suffixIcon={null}
                        clearIcon={null}
                        bordered={false}
                      />
                      <MinusCircleOutlined
                        onClick={onDecreaseDuration}
                        style={{ fontSize: "24px" }}
                      />
                    </Row>
                  </Col>
                </Row>
              ) : (
                ""
              )}
            </>
          )}
        </>
      </Col>
    </Row>
  );
}

Calendar.propTypes = {
  firstDate: PropTypes.string.isRequired,
  lastDate: PropTypes.string,
  disabledDates: PropTypes.array,
  numberOfDays: PropTypes.number,
  autoPlay: PropTypes.bool,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  speed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  infinite: PropTypes.bool,
  arrows: PropTypes.bool,
  onTimeChange: PropTypes.func,
};
const toDate = moment(Date()).format("YYYY-MM-DD");
Calendar.defaultProps = {
  firstDate: toDate,
  lastDate: "",
  disabledDates: [
    "2022-03-15",
    "2022-03-18",
    "2022-03-21",
    "2022-03-24",
    "2022-03-27",
  ],
  numberOfDays: 30,
  autoPlay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  pauseOnHover: true,
  infinite: false,
  arrows: false,
};

export default Calendar;
