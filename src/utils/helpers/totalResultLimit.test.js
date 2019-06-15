import TotalResultLimit from "./totalResultLimit";
import * as config from "../config";

describe("TotalResultLimit", () => {
  test("return true/false according to the 1000 results limit", () => {
    const page = 5;
    const output = (page*config.PER_PAGE) < 1000;
    expect(TotalResultLimit(page)).toEqual(output);
  });
});
