import React from "react";
import reducers from "./reducers";
import * as constants from "./constants";

const initial = {
  data: [],
  failure: false,
  message: "",
  loading: false,
  total_count: 0,
};
describe("Repolist reducers", () => {
  test("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual(initial);
  });
  test(`should handel ${constants.SET}`, () => {
    expect(
      reducers({}, { type: constants.SET, payload: { data: "my data" } })
    ).toEqual({ data: "my data" });
  });
  test(`should handel ${constants.FAILURE}`, () => {
    expect(
      reducers(
        {},
        {
          type: constants.FAILURE,
          payload: { failure: true, message: "sample message" }
        }
      )
    ).toEqual({ failure: true, message: "sample message" });
    expect(
      reducers(
        {},
        {
          type: constants.FAILURE,
          payload: { failure: false, message: "another sample message" }
        }
      )
    ).toEqual({ failure: false, message: "another sample message" });
  });
  test(`should handel ${constants.LOADING}`, () => {
    expect(
      reducers({}, { type: constants.LOADING, payload: { loading: true } })
    ).toEqual({ loading: true });
    expect(
      reducers({}, { type: constants.LOADING, payload: { loading: false } })
    ).toEqual({ loading: false });
  });
  test(`should handel ${constants.SET_TOTAL_COUNT}`, () => {
    expect(
      reducers(
        {},
        { type: constants.SET_TOTAL_COUNT, payload: { total_count: 5000 } }
      )
    ).toEqual({ total_count: 5000 });
  });
});
