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
const pids = input[1].split("\n");
let validPidsCount = 0;
pids.forEach((pid) => {
  const pidNum = parseInt(pid);
  for (const range of ranges) {
    if (pidNum >= range.min && pidNum <= range.max) {
      validPidsCount++;
      break;
    }
  }
});

console.log("validPidsCount:", validPidsCount);
