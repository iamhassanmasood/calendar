import React from "react";
import { RightOutlined } from "@ant-design/icons";

const CarouselNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CarouselNextArrow;
