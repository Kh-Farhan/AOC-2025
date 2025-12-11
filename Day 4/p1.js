const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 4/input.txt",
    "utf8"
  )
  .split("\n");
const grid = input.map((bank) => bank.split(""));
let sum = 0;
grid.forEach((row, rowInd) => {
  row.forEach((col, colInd) => {
    let adjacentTissues = 0;
    if (col === "@") {
      //left
      if (colInd > 0 && grid[rowInd][colInd - 1] === "@") {
        adjacentTissues += 1;
      }
      //Top left
      if (colInd > 0 && rowInd > 0 && grid[rowInd - 1][colInd - 1] === "@") {
        adjacentTissues += 1;
      }
      //Top
      if (rowInd > 0 && grid[rowInd - 1][colInd] === "@") {
        adjacentTissues += 1;
      }
      //Top Right
      if (
        colInd < row.length - 1 &&
        rowInd > 0 &&
        grid[rowInd - 1][colInd + 1] === "@"
      ) {
        adjacentTissues += 1;
      }
      //Right
      if (colInd < row.length - 1 && grid[rowInd][colInd + 1] === "@") {
        adjacentTissues += 1;
      }
      //Bottom Right
      if (
        colInd < row.length - 1 &&
        rowInd < grid.length - 1 &&
        grid[rowInd + 1][colInd + 1] === "@"
      ) {
        adjacentTissues += 1;
      }

      //Bottom
      if (rowInd < grid.length - 1 && grid[rowInd + 1][colInd] === "@") {
        adjacentTissues += 1;
      }
      //Bottom Left
      if (
        colInd > 0 &&
        rowInd < grid.length - 1 &&
        grid[rowInd + 1][colInd - 1] === "@"
      ) {
        adjacentTissues += 1;
      }

      if (adjacentTissues < 4) {
        sum += 1;
      }
    }
  });
});

console.log("RESULT:", sum);
