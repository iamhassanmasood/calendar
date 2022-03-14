import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/antd.less";

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        color: "black",
      }}
      onClick={onClick}
    />
  );
};
