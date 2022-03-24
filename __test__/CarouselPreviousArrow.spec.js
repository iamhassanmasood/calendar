import React from "react";
import { shallow } from "enzyme/build";
import CarouselPreviousArrow from "./../src/components/CarouselArrows/CarouselPreviousArrow";

describe("check CrouselArrpw rendering on dom", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<CarouselPreviousArrow />);
    wrapper.unmount();
  });
  it("check dom tree for snapshots and props", () => {
    let props = {
      className: "",
      style: jest.Obj,
      onClick: jest.fn(),
    };
    let wrapper = shallow(<CarouselPreviousArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
