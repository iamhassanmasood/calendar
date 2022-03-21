import React, { useState, useEffect, useLayoutEffect } from "react";
import moment from "moment";
import { Col } from "antd";
import PropTypes from "prop-types";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import DurationSelector from "../DurationSelector/DurationSelector";
import CarouselCards from "../CarouselCards/CarouselCards";
import { dateFormater } from "../../helpers/formats";

function Calendar(props) {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeValue, setTimeValue] = useState("00:00");
  const [durationValue, setDurationValue] = useState("00:00");
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [showCalendar, setShowCalendar] = useState(true);

  const generateDates = () => {
    const startDate = moment(props.firstDate);
    const disabledDates = props.disabledDates ? props.disabledDates : [];
    const lastDate = props.lastDate ? moment(props.lastDate) : null;

    const numberOfDays = lastDate
      ? moment.duration(lastDate.diff(startDate)).asDays() + 1
      : props.numberOfDays;

    const dateRange = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const isDisabled = !!disabledDates.includes(
        startDate.format("YYYY-MM-DD")
      );
      dateRange.push({
        date: startDate.format("YYYY-MM-DD"),
        day: startDate.format("D"),
        dayOfWeek: startDate.format("dddd"),
        month: startDate.format("MMMM"),
        disabled: isDisabled,
      });
      startDate.add(1, "days");
    }
    return setRecords(dateRange);
  };

  useEffect(() => generateDates(), []);

  useLayoutEffect(() => {
    props.onDateChange(selectedDate);
    let currentDate = dateFormater();
    selectedDate == currentDate ? setSelectedDate("Today") : "";
  }, [selectedDate]);

  const handleTimeChange = (time) => {
    let formattedTime = time.format("HH:mm");
    setTimeValue(formattedTime);
  };
  const handleDurationChange = (time) => {
    let formattedTime = time.format("HH:mm");
    setDurationValue(formattedTime);
    let durationArray = formattedTime.split(":");
    setDurationHours(Number(durationArray[0]));
    setDurationMinutes(Number(durationArray[1]));
  };

  const onIncreaseDuration = () => {
    if (durationMinutes < 59 && durationMinutes >= 0) {
      setDurationMinutes((x) => x + 1);
    } else if (durationMinutes === 59) {
      setDurationHours((x) => x + 1);
      setDurationMinutes(0);
    }
  };

  const onDecreaseDuration = () => {
    if (durationMinutes > 0) {
      setDurationMinutes((x) => x - 1);
    }
  };

  return (
    <Col span={12} offset={6}>
      <DateSelector
        show={showCalendar}
        onShow={() => setShowCalendar((x) => !x)}
        selectedDate={selectedDate}
      />
      <>
        {showCalendar ? (
          <CarouselCards {...props} records={records} call={setSelectedDate} />
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
  autoplay: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  infinite: PropTypes.bool,
  arrows: PropTypes.bool,
  draggable: PropTypes.bool,
  swipeToSlide: PropTypes.bool,
  onDateChange: PropTypes.func,
};

Calendar.defaultProps = {
  firstDate: "2022-03-03",
  lastDate: "2022-04-03",
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  numberOfDays: 30,
  disabledDates: [
    "2022-03-19",
    "2022-03-18",
    "2022-03-22",
    "2022-03-24",
    "2022-03-27",
  ],
  autoplay: true,
  pauseOnHover: true,
  infinite: true,
  arrows: true,
  draggable: true,
  swipeToSlide: true,
  onDateChange: () => {},
};

export default Calendar;
