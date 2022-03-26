import React, { useState, useEffect, useLayoutEffect } from "react";
import moment from "moment";
import { Col } from "antd";
import PropTypes from "prop-types";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import DurationSelector from "../DurationSelector/DurationSelector";
import CarouselCards from "../CarouselCards/CarouselCards";
import { dateFormater } from "../../helpers/formats";
import CarouselNextArrow from "../CarouselArrows/CarouselNextArrow";
import CarouselPreviousArrow from "../CarouselArrows/CarouselPreviousArrow";

function Calendar(props) {
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeValue, setTimeValue] = useState("00:00");
  const [durationValue, setDurationValue] = useState("00:00");
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [showCalendar, setShowCalendar] = useState(true);

  useEffect(() => {
    const startingDate = moment(props.startDate);
    const closeDates = props.closeDates ? props.closeDates : [];
    const lastDate = props.lastDate ? moment(props.lastDate) : null;
    const numberOfDays = lastDate
      ? moment.duration(lastDate.diff(startingDate)).asDays() + 1
      : props.numberOfDays;
    let dateRange = [];
    Array(numberOfDays)
      .fill()
      .map(() => {
        const isDisabled = !!closeDates.includes(
          startingDate.format(props.dateFormat)
        );
        dateRange.push({
          date: startingDate.format(props.dateFormat),
          day: startingDate.format("D"),
          dayOfWeek: startingDate.format("dddd"),
          month: startingDate.format("MMMM"),
          disabled: isDisabled,
        });
        startingDate.add(1, "days");
      });
    return setRecords(dateRange);
  }, []);

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
  startDate: PropTypes.string.isRequired,
  lastDate: PropTypes.string,
  dateFormat: PropTypes.string,
  datesToShow: PropTypes.number,
  steps: PropTypes.number,
  speed: PropTypes.number,
  numberOfDays: PropTypes.number,
  closeDates: PropTypes.array,
  arrows: PropTypes.bool,
  nextArrow: PropTypes.element,
  previousArrow: PropTypes.element,
  swipeToSlide: PropTypes.bool,
  onDateChange: PropTypes.func,
};

Calendar.defaultProps = {
  startDate: moment(Date()).format("YYYY-MM-DD"),
  lastDate: "",
  dateFormat: "YYYY-MM-DD",
  datesToShow: 4,
  steps: 1,
  speed: 300,
  numberOfDays: 30,
  closeDates: [
    "2022-04-01",
    "2022-04-02",
    "2022-04-03",
    "2022-04-05",
    "2022-04-07s",
  ],
  arrows: true,
  swipeToSlide: true,
  nextArrow: <CarouselNextArrow />,
  previousArrow: <CarouselPreviousArrow />,
  onDateChange: () => {},
};

export default Calendar;
