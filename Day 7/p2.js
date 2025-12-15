const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 7/input.txt",
    "utf8"
  )
  .split("\n");

const memory = new Map();
const diagram = input.map((line) => line.split(""));

const findPaths = (curr, line) => {
  if (line >= diagram.length) {
    return 1;
  }
  if (curr < 0 || curr >= diagram[line].length) {
    return 0;
  }

  const key = `${curr},${line}`;
  if (memory.has(key)) {
    return memory.get(key);
  }

  let result;
  if (diagram[line][curr] === "^") {
    result = findPaths(curr - 1, line + 2) + findPaths(curr + 1, line + 2);
  } else {
    result = findPaths(curr, line + 2);
  }

  memory.set(key, result);
  return result;
};

const start = diagram[0].indexOf("S");
const count = findPaths(start, 0);

console.log("Timelines:", count);

//Tested Results:
//11644 too low
//8533 too low
//1690 too low
