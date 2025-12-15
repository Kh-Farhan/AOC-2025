const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 7/input.txt",
    "utf8"
  )
  .split("\n");
const diagram = input.map((line) => line.split(""));
let TestIndeces = new Set();
TestIndeces.add(diagram[0].indexOf("S"));

let count = 0;
diagram.forEach((line) => {
  console.log(TestIndeces);
  let tempIndeces = [];

  TestIndeces.forEach((index) => {
    if (line[index] === "^") {
      count += 1;
      tempIndeces.push(index - 1);
      tempIndeces.push(index + 1);
    } else {
      tempIndeces.push(index);
    }
  });
  if (tempIndeces.length) {
    TestIndeces = new Set(tempIndeces);
  }
});
console.log("startIndex:", count);
