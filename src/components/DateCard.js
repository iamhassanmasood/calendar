import React, { useState } from "react";
import {
  CardWrapper,
  MonthWrapper,
  MonthHeading,
  DateHeading,
  DaysHeading,
} from "./styledcomponents";

export default function DateCard({ month, date, day, selected }) {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="card-wrapper" onClick={() => setValue(selected)}>
        <div className="month-wrapper">
          <div className="month-heading">{month}</div>
        </div>
        <div className="date-heading">{date}</div>
        <div className="days-heading">{day}</div>
      </div>
    </div>
  );
}
