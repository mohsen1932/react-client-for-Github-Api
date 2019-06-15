import * as config from "../config";
const TotalResultLimit = page => {
  const currentCount = page * config.PER_PAGE;
  return currentCount < 1000;
};
export default TotalResultLimit;
