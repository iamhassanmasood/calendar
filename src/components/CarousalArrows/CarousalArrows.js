import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const CarouselPreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export const CarouselNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
