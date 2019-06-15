import React from "react";
import * as actions from "./actions";
import * as constants from "./constants";

describe("RepoList actions", () => {
  test("should create an action to get list", () => {
    const expectedAction = {
      type: constants.GET,
      payload: {
        topics: "data",
        page: 10
      }
    };
    expect(actions.get("data", 10)).toEqual(expectedAction);
  });
  test("should create an action to set data", () => {
    const expectedAction = {
      type: constants.SET,
      payload: {
        data: ["data"]
      }
    };
    expect(actions.set(["data"])).toEqual(expectedAction);
  });
  test("should create an action to set failure status", () => {
    const message = "sample message";
    const expectedAction = {
      type: constants.FAILURE,
      payload: {
        failure: true,
        message: message
      }
    };
    expect(actions.failure(true, message)).toEqual(expectedAction);
  });
  test("should create an action to set loading status", () => {
    const expectedAction = {
      type: constants.LOADING,
      payload: {
        loading: true
      }
    };
    expect(actions.loading(true)).toEqual(expectedAction);
  });
  test("should create an action to set total count", () => {
    const expectedAction = {
      type: constants.SET_TOTAL_COUNT,
      payload: {
        total_count: 1056
      }
    };
    expect(actions.setTotalCount(1056)).toEqual(expectedAction);
  });
});
