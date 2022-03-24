import React from "react";
import { shallow } from "enzyme/build";
import DateCard from "./../src/components/DateCard/DateCard";

describe("date card component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<DateCard />);
    wrapper.unmount();
  });

  it("check dom tree rendering", () => {
    let tree = shallow(<DateCard />);
    expect(tree).toMatchSnapshot();
  });
});
