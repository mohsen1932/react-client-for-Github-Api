import * as constants from "./constants";

export const get = (topics, page) => ({
  type: constants.GET,
  payload: {
    topics,
    page
  }
});
export const set = data => ({
  type: constants.SET,
  payload: {
    data
  }
});
export const setTotalCount = total_count => ({
  type: constants.SET_TOTAL_COUNT,
  payload: {
    total_count
  }
});
export const failure = (failure, message) => ({
  type: constants.FAILURE,
  payload: {
    failure,
    message
  }
});
export const loading = loading => ({
  type: constants.LOADING,
  payload: {
    loading
  }
});
export const setMoreItemsInCollection = more_items_in_collection => ({
  type: constants.SET_MORE_ITEMS_IN_COLLECTON,
  payload: {
    more_items_in_collection
  }
});
export const setNextPage = next_page => ({
  type: constants.SET_NEXT_PAGE,
  payload: {
    next_page
  }
});
