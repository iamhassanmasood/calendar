import React from "react";
import Calendar from "./components/Calendar/Calendar";
import {
  NextTestArrow,
  PreviousTestArrow,
} from "./components/TestArrows/index";

export default function App() {
  return (
    <Calendar
      nextArrow={<NextTestArrow />}
      previousArrow={<PreviousTestArrow />}
    />
  );
}
