import React from "react";
import { shallow } from "enzyme/build";
import App from "./../App";
import Calendar from "./../components/Calendar/Calendar";

describe("Calendar component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<App />);
    wrapper.unmount();
  });
  it("mounts without crashing", () => {
    const wrapper = shallow(<Calendar />);
    wrapper.unmount();
  });
  it('renders a calnedar with firstDate of "2022-03-03" with speed is 300', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Calendar).prop("firstDate")).toBe("2022-03-03");
    expect(wrapper.find(Calendar).prop("speed")).toBe(300);
  });

  it('renders a calnedar with lastDate of "2022-04-03" with slidesToShow is 4', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Calendar).prop("lastDate")).toBe("2022-04-03");
    expect(wrapper.find(Calendar).prop("slidesToShow")).toBe(4);
  });
});
