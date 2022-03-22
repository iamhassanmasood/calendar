import React from "react";
import { shallow } from "enzyme/build";
import Calendar from "./../components/Calendar/Calendar";
import DateSelector from "./../components/DateSelector/DateSelector";
import CarouselCards from "./../components/CarouselCards/CarouselCards";

describe("Calendar component", () => {
  it("calendar without crashing", () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it("check date selector props show it must be true", () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find(DateSelector).prop("show")).toBe(true);
  });
  it("check carousel cards props records property", () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find(CarouselCards).prop("records"));
  });
  it("Check props of components", () => {
    const props = {
      firstDate: "2022-03-03",
      lastDate: "",
      slidesToShow: 4,
      slidesToScroll: 1,
      numberOfDays: 30,
      speed: 300,
      disabledDates: [],
      autoplay: false,
      pauseOnHover: true,
      infinite: true,
      arrows: true,
      draggable: true,
      swipeToSlide: true,
      onDateChange: jest.fn(),
    };
    const wrapper = shallow(<Calendar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
