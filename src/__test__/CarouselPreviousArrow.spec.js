import React from "react";
import { shallow } from "enzyme/build";
import CarouselPreviousArrow from "./../components/CarouselArrows/CarouselPreviousArrow";

describe("check CrouselArrpw rendering on dom", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<CarouselPreviousArrow />);
    wrapper.unmount();
  });
  it("check dom tree rendering", () => {
    let tree = shallow(<CarouselPreviousArrow />);
    expect(tree).toMatchSnapshot();
  });
});
