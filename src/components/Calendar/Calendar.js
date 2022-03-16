import React, { useState, useEffect, useLayoutEffect } from "react";
import moment from "moment";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import DurationSelector from "../DurationSelector/DurationSelector";
import CarouselCards from "../CarouselCards/CarouselCards";
import { currentDateFormat } from "../../helpers/formats";

function Calendar(props) {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeValue, setTimeValue] = useState("00:00");
  const [durationValue, setDurationValue] = useState("00:00");
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [show, setShow] = useState(true);

  const generateDates = (props) => {
    const startDate = moment(props.firstDate);
    const disabledDates = props.disabledDates ? props.disabledDates : [];

    const firstDate = props.firstDate
      ? moment(props.firstDate)
      : moment(new Date());
    const lastDate = props.lastDate ? moment(props.lastDate) : null;

    const numberOfDays = lastDate
      ? moment.duration(lastDate.diff(firstDate)).asDays() + 1
      : props.numberOfDays;

    const dates = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const isDisabled = !!disabledDates.includes(
        startDate.format("YYYY-MM-DD")
      );
      dates.push({
        date: startDate.format("YYYY-MM-DD"),
        day: startDate.format("D"),
        dayOfWeek: startDate.format("dddd"),
        month: startDate.format("MMMM"),
        disabled: isDisabled,
      });
      startDate.add(1, "days");
    }
    return setRecords(dates);
  };

  useEffect(() => generateDates(props), []);

  useLayoutEffect(() => {
    props.onDateChange(selectedDate);
    let currentDate = currentDateFormat();
    if (selectedDate == currentDate) setSelectedDate("Today");
  }, [selectedDate]);

  function handleTimeChange(time) {
    let Time = moment(time).format("HH:mm");
    setTimeValue(Time);
  }
  function handleDurationChange(time) {
    let Time = moment(time).format("HH:mm");
    setDurationValue(Time);
    let arr = Time.split(":");
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
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  speed: PropTypes.number,
  numberOfDays: PropTypes.number,
  disabledDates: PropTypes.array,
  autoPlay: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  infinite: PropTypes.bool,
  arrows: PropTypes.bool,
  draggable: PropTypes.bool,
  swipeToSlide: PropTypes.bool,
  onDateChange: PropTypes.func,
};

Calendar.defaultProps = {
  firstDate: moment(Date()).format("YYYY-MM-DD"),
  lastDate: "",
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 100,
  numberOfDays: 30,
  disabledDates: [
    "2022-03-17",
    "2022-03-18",
    "2022-03-21",
    "2022-03-24",
    "2022-03-27",
  ],
  autoPlay: true,
  pauseOnHover: true,
  infinite: true,
  arrows: true,
  draggable: true,
  swipeToSlide: true,
  onDateChange: () => {},
};

export default Calendar;
