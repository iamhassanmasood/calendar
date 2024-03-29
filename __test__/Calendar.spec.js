import React from "react";
import { shallow } from "enzyme/build";
import Calendar from "./../src/components/Calendar/Calendar";
import DateSelector from "./../src/components/DateSelector/DateSelector";
import CarouselCards from "./../src/components/CarouselCards/CarouselCards";

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
      datesToShow: 4,
      steps: 1,
      numberOfDays: 30,
      speed: 300,
      closeDates: [],
      arrows: true,
      swipeToSlide: true,
      onDateChange: jest.fn(),
    };
    const wrapper = shallow(<Calendar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
