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

const memo = new Map();

const findNextDevice = (currentDevice, seenDac, seenFft) => {
  if (currentDevice === "dac") seenDac = true;
  if (currentDevice === "fft") seenFft = true;

  if (currentDevice === "out") {
    return seenDac && seenFft ? 1 : 0;
  }

  const memoKey = `${currentDevice}|${seenDac}|${seenFft}`;
  if (memo.has(memoKey)) return memo.get(memoKey);

  let total = 0;
  const values = devices.get(currentDevice) || [];

  for (const next of values) {
    total += findNextDevice(next, seenDac, seenFft);
  }

  memo.set(memoKey, total);
  return total;
};

const sum = findNextDevice("svr", false, false);
console.log(`sum: `, sum);
