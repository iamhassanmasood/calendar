import React from "react";
import { shallow } from "enzyme/build";
import DurationSelector from "./../components/DurationSelector/DurationSelector";

it("mounts without crashing", () => {
  const wrapper = shallow(<DurationSelector />);
  wrapper.unmount();
});
