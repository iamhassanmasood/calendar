import React from "react";
import { StepForwardOutlined, StepBackwardOutlined } from "@ant-design/icons";

export const NextTestArrow = (props) => {
  const { className, onClick } = props;

  return (
    <StepForwardOutlined
      className={`${className} arrows-class`}
      onClick={onClick}
    />
  );
};

export const PreviousTestArrow = (props) => {
  const { className, onClick } = props;
  return (
    <StepBackwardOutlined
      className={`${className} arrows-class`}
      onClick={onClick}
    />
  );
};
