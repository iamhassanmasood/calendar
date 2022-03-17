import React from "react";
import DateCard from "../DateCard/DateCard";
import { Carousel, Row, Col } from "antd";
import {
  CarouselNextArrow,
  CarouselPreviousArrow,
} from "../CarousalArrows/CarousalArrows";
import { dateFormater } from "../../helpers/formats";

export default function CarouselCards(props) {
  const carouselSettings = {
    autoplay: props.autoplay,
    infinite: props.infinite,
    pauseOnHover: props.pauseOnHover,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    speed: props.speed,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPreviousArrow />,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Col span={24} className="carousal-div">
      <Carousel
        autoplay={props.autoplay}
        {...carouselSettings}
        swipeToSlide={props.swipeToSlide}
        draggable={props.draggable}
        arrows={props.arrows}
      >
        {props.records.map((item, idx) => (
          <DateCard
            month={item.month}
            date={item.day}
            day={item.dayOfWeek}
            slectedDate={dateFormater(item.date)}
            key={idx}
            onChange={props.call}
            disabled={item.disabled}
          />
        ))}
      </Carousel>
    </Col>
  );
}
