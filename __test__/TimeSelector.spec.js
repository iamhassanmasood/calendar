import React from "react";
import { shallow } from "enzyme/build";
import TimeSelector from "./../src/components/TimeSelector/TimeSelector";

it("mounts without crashing", () => {
  const wrapper = shallow(<TimeSelector />);
  wrapper.unmount();
});
