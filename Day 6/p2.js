const fs = require("fs");
const problems = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 6/input.txt",
    "utf8"
  )
  .split("\n")
  .filter(Boolean);

const maxNumLength = 4;

function sliceRowByColumns(row, ranges) {
  return ranges.map(([start, end]) => row.slice(start, end));
}

function getOperatorPositions(opRow) {
  const positions = [];
  for (let i = 0; i < opRow.length; i++) {
    if (opRow[i] === "*" || opRow[i] === "+") {
      positions.push(i);
    }
  }
  return positions;
}

function getColumnRanges(opRow) {
  const ops = getOperatorPositions(opRow);
  const ranges = [];

  for (let i = 0; i < ops.length; i++) {
    const start = ops[i];
    const end = i + 1 < ops.length ? ops[i + 1] : opRow.length;
    ranges.push([start, end !== opRow.length ? end - 1 : end]);
  }

  return ranges;
}

const operatorRow = problems[problems.length - 1];
const columnRanges = getColumnRanges(operatorRow);
const table = problems.map((line) => sliceRowByColumns(line, columnRanges));

let grandTotal = 0;

for (let i = 0; i < table[0].length; i++) {
  let operator = table[maxNumLength][i].trim();
  let solution = 0;
  const maxNumber = Math.max(
    Number(table[0][i]),
    Number(table[1][i]),
    Number(table[2][i]),
    Number(table[3][i])
  );
  const maxLength = maxNumber.toString().length - 1;
  switch (operator) {
    case "+":
      for (let j = 0; j <= maxLength; j++) {
        let str = `${table[0][i][maxLength - j] ?? ""}${
          table[1][i][maxLength - j] ?? ""
        }${table[2][i][maxLength - j] ?? ""}${
          table[3][i][maxLength - j] ?? ""
        }`;
        solution += Number(str);
      }

      break;
    case "*":
      solution = 1;
      for (let j = 0; j <= maxLength; j++) {
        let str = `${table[0][i][maxLength - j] ?? ""}${
          table[1][i][maxLength - j] ?? ""
        }${table[2][i][maxLength - j] ?? ""}${
          table[3][i][maxLength - j] ?? ""
        }`;
        solution = solution * Number(str.trim() || 1);
      }
      break;
  }
  grandTotal += solution;
}

console.log("grandTotal:", grandTotal);

// Tried Outputs:
//2341721513488
//2342085418450
//10227753257075
//10227753257799
