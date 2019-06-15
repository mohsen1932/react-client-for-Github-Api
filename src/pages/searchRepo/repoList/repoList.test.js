import React from "react";
import ConnectedRepoListList, { RepoList } from "./repoList";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../../../store";

configure({ adapter: new Adapter() });
const mockData = [
  {
    id: 1,
    name: "sample-repo-1",
    html_url: "https://github.com/owner/sample-repo-1",
    owner: {
      login: "sample-owner-1",
      avatar_url: "https://github.com/owner/avatar_url_1.png"
    }
  },
  {
    id: 2,
    name: "sample-repo-2",
    html_url: "https://github.com/owner/sample-repo-2",
    owner: {
      login: "sample-owner-2",
      avatar_url: "https://github.com/owner/avatar_url_2.png"
    }
  },
  {
    id: 3,
    name: "sample-repo-3",
    html_url: "https://github.com/owner/sample-repo-3",
    owner: {
      login: "sample-owner-3",
      avatar_url: "https://github.com/owner/avatar_url_3.png"
    }
  }
];
describe("<RepoList />", () => {
  test("renders connected", () => {
    const wrapper = shallow(<ConnectedRepoListList store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should show/hide .try_again button when loading & failure props changes", () => {
    const wrapper = shallow(<RepoList loading={true} failure={false} />);
    expect(wrapper.find(".try_again").exists()).toBe(false);
    wrapper.setProps({ loading: false, failure: false });
    expect(wrapper.find(".try_again").exists()).toBe(false);
    wrapper.setProps({ loading: true, failure: true });
    expect(wrapper.find(".try_again").exists()).toBe(false);
    wrapper.setProps({ loading: false, failure: true });
    expect(wrapper.find(".try_again").exists()).toBe(true);
  });
  test("should show/hide loading  when loading props changes", () => {
    const wrapper = mount(<RepoList loading={true} />);
    expect(wrapper.find("#loading").exists()).toBe(true);
    wrapper.setProps({ loading: false });
    expect(wrapper.find("#loading").exists()).toBe(false);
  });
  test("should render list with mock data", () => {
    const wrapper = mount(<RepoList loading={false} data={mockData} />);
    expect(wrapper.find(".repo-name").get(0).props.children).toEqual(
      mockData[0].name
    );
    expect(wrapper.find(".owner-name").get(0).props.children).toEqual(
      mockData[0].owner.login
    );
    expect(wrapper.find(".avatar").length).toEqual(mockData.length);
    expect(wrapper.find(".avatar-image").length).toEqual(3);
    expect(wrapper.find(".avatar-image").get(2)).toEqual(
      <img
        alt={mockData[2].owner.login}
        className="avatar-image"
        src={mockData[2].owner.avatar_url}
      />
    );
  });
});
