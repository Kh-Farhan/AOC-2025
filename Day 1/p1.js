const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 1/input.txt",
    "utf8"
  )
  .split("\n");

const rotations = input.map((el) => el.split("  ")[0]);
let pointer = 50;
let zeros = 0;
rotations.forEach((rotation, index) => {
  const direction = rotation.substring(0, 1);
  const value = Number(rotation.substring(1));
  if (direction == "L") {
    let result = pointer - value;
    while (result < 0) {
      result = 100 + result;
    }
    pointer = result;
  } else {
    let result = pointer + value;
    while (result > 99) {
      result = result - 100;
    }
    pointer = result;
  }
  if (pointer === 0) {
    zeros += 1;
  }
});
console.log(zeros);
