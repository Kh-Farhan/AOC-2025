const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 4/input.txt",
    "utf8"
  )
  .split("\n");
const grid = input.map((bank) => bank.split(""));

let totalSum = 0;
let currentSum = -1;
let gridCopy = grid.slice();
while (currentSum !== 0) {
  const tempGrid = gridCopy.map((row) => row.slice());
  let sum = 0;
  tempGrid.forEach((row, rowInd) => {
    row.forEach((col, colInd) => {
      let adjacentTissues = 0;
      if (col === "@") {
        //left
        if (colInd > 0 && tempGrid[rowInd][colInd - 1] === "@") {
          adjacentTissues += 1;
        }
        //Top left
        if (
          colInd > 0 &&
          rowInd > 0 &&
          tempGrid[rowInd - 1][colInd - 1] === "@"
        ) {
          adjacentTissues += 1;
        }
        //Top
        if (rowInd > 0 && tempGrid[rowInd - 1][colInd] === "@") {
          adjacentTissues += 1;
        }
        //Top Right
        if (
          colInd < row.length - 1 &&
          rowInd > 0 &&
          tempGrid[rowInd - 1][colInd + 1] === "@"
        ) {
          adjacentTissues += 1;
        }
        //Right
        if (colInd < row.length - 1 && tempGrid[rowInd][colInd + 1] === "@") {
          adjacentTissues += 1;
        }
        //Bottom Right
        if (
          colInd < row.length - 1 &&
          rowInd < tempGrid.length - 1 &&
          tempGrid[rowInd + 1][colInd + 1] === "@"
        ) {
          adjacentTissues += 1;
        }

        //Bottom
        if (
          rowInd < tempGrid.length - 1 &&
          tempGrid[rowInd + 1][colInd] === "@"
        ) {
          adjacentTissues += 1;
        }
        //Bottom Left
        if (
          colInd > 0 &&
          rowInd < tempGrid.length - 1 &&
          tempGrid[rowInd + 1][colInd - 1] === "@"
        ) {
          adjacentTissues += 1;
        }

        if (adjacentTissues < 4) {
          gridCopy[rowInd][colInd] = ".";
          sum += 1;
        }
      }
    });
  });
  console.log("SUM THIS ROUND:", sum);
  currentSum = sum;
  totalSum += sum;
}

console.log("RESULT:", totalSum);
