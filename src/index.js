import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(
  <App
    firstDate={"2022-03-10"}
    lastDate={"2022-07-10"}
    disabledDates={["2022-03-10", "2022-03-11", "2022-03-12"]}
    numberOfDays={123}
  />,
  document.getElementById("root")
);
