import React, { useState, useEffect } from "react";
import moment from "moment";
import "antd/dist/antd.less";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import DurationSelector from "./DurationSelector";
import CarouselCards from "./CarouselCards";

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
        <DateSelector
          show={show}
          onShow={() => setShow((x) => !x)}
          selectedDate={selectedDate}
        />
        <>
          {show ? (
            <CarouselCards
              {...props}
              records={records}
              call={setSelectedDate}
            />
          ) : (
            <>
              <TimeSelector
                value={moment(timeValue, "HH:mm")}
                defaultValue={moment(timeValue, "HH:mm")}
                format={"HH:mm"}
                handleChange={(time) => handleTimeChange(time)}
              />

              {timeValue !== "00:00" ? (
                <DurationSelector
                  handleIncrease={onIncreaseDuration}
                  handleDecrease={onDecreaseDuration}
                  handleChange={(time) => handleDurationChange(time)}
                  value={moment(`${durationHours}:${durationMinutes}`, "HH:mm")}
                  defaultValue={moment(durationValue, "HH:mm")}
                />
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
  arrows: true,
};

export default Calendar;
