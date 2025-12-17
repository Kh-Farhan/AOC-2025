const fs = require("fs");

const tiles = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 9/input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const points = tiles.map((line) => line.split(",").map(Number));
let maxArea = 0;
for (let i = 0; i < points.length; i++) {
  const [x1, y1] = points[i];
  for (let j = i + 1; j < points.length; j++) {
    const [x2, y2] = points[j];
    const area = (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);
    if (area > maxArea) {
      maxArea = area;
    }
  }
}
console.log("Max Area:", maxArea);
