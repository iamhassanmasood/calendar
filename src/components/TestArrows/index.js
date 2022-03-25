import React from "react";
import { StepForwardOutlined, StepBackwardOutlined } from "@ant-design/icons";

export const NextTestArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <StepForwardOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export const PreviousTestArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <StepBackwardOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
