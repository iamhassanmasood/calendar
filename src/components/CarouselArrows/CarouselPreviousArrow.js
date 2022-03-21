import React from "react";
import { LeftOutlined } from "@ant-design/icons";

const CarouselPreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={`${className} arrows-class`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CarouselPreviousArrow;
