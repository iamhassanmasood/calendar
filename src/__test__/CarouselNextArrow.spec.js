import React from "react";
import { shallow } from "enzyme/build";
import CarouselNextArrow from "./../components/CarouselArrows/CarouselNextArrow";

describe("check CrouselArrpw rendering on dom", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<CarouselNextArrow />);
    wrapper.unmount();
  });
  it("check dom tree rendering", () => {
    let tree = shallow(<CarouselNextArrow />);
    expect(tree).toMatchSnapshot();
  });
});
