import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(
  <App
    firstDate={"2022-03-10"}
    lastDate={"2022-07-10"}
    disabledDates={[
      "2022-03-15",
      "2022-03-18",
      "2022-03-12",
      "2022-03-21",
      "2022-03-26",
      "2022-03-28",
    ]}
    numberOfDays={123}
  />,
  document.getElementById("root")
);
