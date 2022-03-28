import React from "react";
import DateCard from "../DateCard/DateCard";
import { Carousel, Col } from "antd";
import { dateFormater } from "../../helpers/formats";

export default function CarouselCards(props) {
  const carouselSettings = {
    autoplay: false,
    infinite: false,
    slidesToShow: props.datesToShow,
    slidesToScroll: props.steps,
    speed: props.speed,
    nextArrow: props.nextArrow,
    prevArrow: props.previousArrow,
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
        swipeToSlide={props.swipeToSlide}
        arrows={props.arrows}
        draggable={false}
        dots={false}
        {...carouselSettings}
      >
        {props.records
          ? props.records.map((item, idx) => (
              <DateCard
                headStyles={props.cardHeaderStyle}
                bodyStyles={props.cardBodyStyle}
                headStylesClose={props.cardHeaderStyleClose}
                bodyStylesClose={props.cardBodyStyleClose}
                month={item.month}
                date={item.day}
                day={item.dayOfWeek}
                slectedDate={dateFormater(item.date)}
                key={idx}
                onChange={props.call}
                disabled={item.disabled}
              />
            ))
          : ""}
      </Carousel>
    </Col>
  );
}
