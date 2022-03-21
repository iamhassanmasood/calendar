import React from "react";
import { shallow } from "enzyme/build";
import DateSelector from "./../components/DateSelector/DateSelector";

describe("date selector rendering", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<DateSelector />);
    wrapper.unmount();
  });
  test("check dom tree rendering", () => {
    let tree = shallow(<DateSelector />);
    expect(tree).toMatchSnapshot();
  });
});
