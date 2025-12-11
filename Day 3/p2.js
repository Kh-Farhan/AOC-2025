const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 3/input.txt",
    "utf8"
  )
  .split("\n");
const ratings = input.map((bank) => bank.split("").map((j) => Number(j)));
let sum = 0;
ratings.map((bank) => {
  let bankCopy = bank.slice();
  let maxJoltage = "";
  while (bankCopy.length > 12) {
    let maxCombination = 0;
    let itsIndex = 0;
    let tempCopy = bankCopy.slice();
    for (let num = 0; num < bankCopy.length; num++) {
      tempCopy.splice(num, 1);
      let combination = Number(tempCopy.join(""));
      if (combination > maxCombination) {
        maxCombination = combination;
        itsIndex = num;
      }
      tempCopy = bankCopy.slice();
    }

    bankCopy.splice(itsIndex, 1);
  }
  if (bankCopy.length == 12) {
    maxJoltage = bankCopy.join("");
    console.log("MAX JOLTAGE:", maxJoltage);
  }
  const joltage = Number(maxJoltage);
  sum += joltage;
});

console.log("RESULT:", sum);
