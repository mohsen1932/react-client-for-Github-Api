const TopicsGenerator = str => {
  const topicsArray = str.split(" ");
  let output = "";
  for (let i = 0; i < topicsArray.length; i++) {
    output += `topic:${topicsArray[i]}`;
    if (i < topicsArray.length - 1) output += "+";
  }
  return output;
};
export default TopicsGenerator;
