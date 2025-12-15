const fs = require("fs");

const problems = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 6/input.txt",
    "utf8"
  )
  .split("\n")
  .map((line) => line.split(/\s+/).filter((str) => str.length));

let grandTotal = 0;
for (let i = 0; i < problems[0].length; i++) {
  let operator = problems[4][i];
  let solution = 0;
  switch (operator) {
    case "+":
      solution =
        Number(problems[0][i]) +
        Number(problems[1][i]) +
        Number(problems[2][i]) +
        Number(problems[3][i]);
      break;
    case "*":
      solution =
        Number(problems[0][i]) *
        Number(problems[1][i]) *
        Number(problems[2][i]) *
        Number(problems[3][i]);
      break;
  }
  grandTotal += solution;
}

console.log("grandTotal:", grandTotal);
