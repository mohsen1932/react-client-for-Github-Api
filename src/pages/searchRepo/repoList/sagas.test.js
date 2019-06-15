import { runSaga } from "redux-saga";
import { getData, getRepoList } from "./sagas";
import * as actions from "./actions";
import * as services from "../../../utils/services";

describe("getRepoList", () => {
  test("should give list of persons from state", () => {
    const repos = [{ name: "john", id: 1 }];
    const state = { repoList: { data: repos } };
    const res = getRepoList(state);
    expect(res).toBe(repos);
  });
});
const mockedData = {
  total_count: 1050,
  items: [
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
  ]
};
describe("getData", () => {
  test("should give list of repo and handle in case of success", async () => {
    const dispatchedActions = [];
    services.searchRepo = jest.fn(() =>
      Promise.resolve({
        data: mockedData
      })
    );
    const fakeStore = {
      getState: () => ({
        repoList: {
          data: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, getData, actions.get("topic:ruby", 1)).done;
    expect(services.searchRepo.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.loading(true));
    expect(dispatchedActions).toContainEqual(
      actions.setTotalCount(mockedData.total_count)
    );
    expect(dispatchedActions).toContainEqual(actions.set(mockedData.items));
    expect(dispatchedActions).toContainEqual(
          actions.setMoreItemsInCollection(true)
      );
    expect(dispatchedActions).toContainEqual(actions.setNextPage(2));
    expect(dispatchedActions).toContainEqual(actions.loading(false));
  });
});
