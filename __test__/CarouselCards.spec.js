import React from "react";
import { shallow } from "enzyme/build";
import CarouselCards from "./../src/components/CarouselCards/CarouselCards";

describe("Carousel Cards Rendering", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<CarouselCards />);
    wrapper.unmount();
    expect(wrapper).toMatchSnapshot();
  });
});
