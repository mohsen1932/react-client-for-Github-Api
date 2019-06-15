import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "./index";

configure({ adapter: new Adapter() });
describe("<Search />", () => {
  test("renders", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should call handleClick when btn clicked", () => {
    const mockFn = jest.fn();
    Search.prototype.handleClick = mockFn;
    const wrapper = shallow(<Search onFilter={mockFn} />);
    wrapper
      .find("input.search-input")
      .simulate("change", { target: { name: "keyword", value: "test" } });
    wrapper.find(".search-btn").simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test("should change state when input value changes", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Search onFilter={mockFn} />);
    wrapper
      .find("input.search-input")
      .simulate("change", { target: { name: "keyword", value: "test" } });
    expect(wrapper.state().keyword).toEqual("test");
  });
});
