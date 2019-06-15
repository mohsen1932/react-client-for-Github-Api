import TopicsGenerator from "./topicsGenerator";

describe("TopicsGenerator", () => {
  test("return topics", () => {
    const input = "topic_1 topic_2 topic_3";
    const output = "topic:topic_1+topic:topic_2+topic:topic_3";
    expect(TopicsGenerator(input)).toEqual(output);
  });
});
