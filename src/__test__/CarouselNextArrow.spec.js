import React from "react";
import { shallow } from "enzyme/build";
import CarouselNextArrow from "./../components/CarouselArrows/CarouselNextArrow";

describe("check CrouselArrpw rendering on dom", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<CarouselNextArrow />);
    wrapper.unmount();
  });
  it("check dom tree for snapshots and props", () => {
    let props = {
      className: "",
      style: jest.Obj,
      onClick: jest.fn(),
    };
    let wrapper = shallow(<CarouselNextArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
