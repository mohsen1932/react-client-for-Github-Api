import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Avatar from "./index";

configure({ adapter: new Adapter() });
describe("<Avatar />", () => {
  test("renders", () => {
    const wrapper = shallow(<Avatar title="John Doe" image="url" />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should renders with props", () => {
    const wrapper = shallow(<Avatar title="John Doe" image="url" />);
    expect(
      wrapper.containsMatchingElement(<img src="url" alt="John Doe" />)
    ).toBe(true);
  });
});
