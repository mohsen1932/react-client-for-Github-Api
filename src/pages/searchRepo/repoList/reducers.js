import * as constants from "./constants";
const initial = {
  data: [],
  failure: false,
  message: "",
  loading: false,
  total_count: 0,
  next_page: 0,
  more_items_in_collection: true
};
function repoListReducer(state = initial, action) {
  switch (action.type) {
    case constants.SET:
      return { ...state, ...action.payload };
    case constants.SET_TOTAL_COUNT:
      return { ...state, ...action.payload };
    case constants.FAILURE:
      return { ...state, ...action.payload };
    case constants.LOADING:
      return { ...state, ...action.payload };
    case constants.SET_NEXT_PAGE:
      return { ...state, ...action.payload };
    case constants.SET_MORE_ITEMS_IN_COLLECTON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default repoListReducer;
