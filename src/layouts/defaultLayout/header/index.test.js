import React from "react";
import Header from "./index";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<Header />", () => {
  test("renders", () => {
    const wrapper = shallow(<Header title="title" />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render using props", () => {
    const wrapper = shallow(<Header title="title" />);
    expect(wrapper.find("h1").text()).toBe("title");
  });
});
