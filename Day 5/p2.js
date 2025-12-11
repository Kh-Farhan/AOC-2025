const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 5/input.txt",
    "utf8"
  )
  .split("\n\n");
const ranges = input[0].split("\n").map((range) => {
  return {
    min: parseInt(range.split("-")[0]),
    max: parseInt(range.split("-")[1]),
  };
});
let sortedRanges = ranges.sort((a, b) => a.min - b.min);
let validPidsCount = 0;

for (let i = 0; i < sortedRanges.length; i++) {
  let currentRange = sortedRanges[i];
  for (let j = i + 1; j < sortedRanges.length; j++) {
    let nextRange = sortedRanges[j];
    if (currentRange.max >= nextRange.min) {
      if (currentRange.max < nextRange.max) {
        currentRange.max = nextRange.max;
      }
      sortedRanges.splice(j, 1);
      j--;
    } else {
      break;
    }
  }
  validPidsCount += currentRange.max - currentRange.min + 1;
}
console.log("validPidsCount:", validPidsCount);
