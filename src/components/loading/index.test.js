import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loading from "./index";
import * as config from "../../utils/config";

configure({ adapter: new Adapter() });
describe("<Loading />", () => {
  test("renders", () => {
    const wrapper = shallow(<Loading isLoading={false} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render Loading div if isLoading props is true", () => {
    const wrapper = shallow(<Loading isLoading={true} />);
    expect(wrapper.find("#loading").exists()).toBe(true);
  });
  test("Loading rows count should equal to per page count in config", () => {
    const wrapper = shallow(<Loading isLoading={true} />);
    expect(wrapper.find(".l-r").length).toEqual(config.PER_PAGE);
  });
});
