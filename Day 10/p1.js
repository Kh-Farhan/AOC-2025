const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 10/input.txt",
    "utf8"
  )
  .trim()
  .split("\n");
let sumOfMinPresses = 0;

const toggle = (indicator, indices) => {
  const arr = indicator.split("");
  indices.forEach((index) => {
    arr[index] = arr[index] === "." ? "#" : ".";
  });
  return arr.join("");
};

const findMinButtonPresses = (current, target, buttons) => {
  const queue = [{state: current, presses: 0}];
  const visited = new Set();
  visited.add(current);

  while (queue.length > 0) {
    const {state, presses} = queue.shift();

    if (state === target) {
      return presses;
    }

    for (const button of buttons) {
      const newState = toggle(state, button);
      if (!visited.has(newState)) {
        visited.add(newState);
        queue.push({state: newState, presses: presses + 1});
      }
    }
  }

  return -1;
};

for (let i = 0; i < input.length; i++) {
  const indicator = input[i].split("]")[0].substring(1);
  const buttons = input[i]
    .split("]")[1]
    .trim()
    .split(" {")[0]
    .split(" ")
    .map((button) =>
      button.replace("(", "").replace(")", "").split(",").map(Number)
    );

  let currentIndicator = new Array(indicator.length).fill(".").join("");

  const minPresses = findMinButtonPresses(currentIndicator, indicator, buttons);
  if (minPresses > 0) {
    sumOfMinPresses += minPresses;
  }
}

console.log(`Sum: ${sumOfMinPresses}`);
