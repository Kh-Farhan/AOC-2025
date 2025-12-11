const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 3/input.txt",
    "utf8"
  )
  .split("\n");
const ratings = input.map((bank) => bank.split("").map((j) => Number(j)));
let sum = 0;
ratings.map((bank, index) => {
  let maxJoltage = 0;
  bank.forEach((el, index) => {
    for (i = index + 1; i < bank.length; i++) {
      const combination = Number(`${el}${bank[i]}`);
      if (combination > maxJoltage) {
        maxJoltage = combination;
      }
    }
  });
  sum += maxJoltage;
});

console.log("RESULT:", sum);
