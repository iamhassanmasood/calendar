import React, { useState } from "react";
import Calendar from "./components/Calendar/Calendar";

export default function App() {
  const [selectedDate, setSelectedDate] = useState("");
  function helloCalling(date) {
    setSelectedDate(date);
  }
  console.log(selectedDate); //////////)

  return <Calendar onDateChange={helloCalling} />;
}
