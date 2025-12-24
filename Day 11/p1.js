const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 11/input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const devices = new Map();

for (const line of input) {
  const [key, rest] = line.split(": ");
  devices.set(key, rest.trim().split(" "));
}

const findNextDevice = (currentDevice) => {
  let total = 0;

  if (currentDevice === "out") {
    return 1;
  }
  const values = devices.get(currentDevice);
  for (const next of values) {
    total += findNextDevice(next);
  }
  return total;
};

const sum = findNextDevice("you");
console.log(`sum: `, sum);
