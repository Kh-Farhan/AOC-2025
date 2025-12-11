const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 2/input.txt",
  "utf8"
);

function isInvalid(str) {
  if (str.length % 2 !== 0) return false;
  const mid = Math.floor(str.length / 2);
  const firsthalf = str.slice(0, mid);
  const scndHalf = str.slice(mid);

  return firsthalf === scndHalf;
}

const pids = input.split(",");
let invalids = 0;
pids.forEach((range) => {
  console.log(range);
  const low = range.split("-")[0];
  const high = range.split("-")[1];
  if (isInvalid(low)) {
    invalids += Number(low);
    console.log("invalid:", low);
  }
  if (isInvalid(high)) {
    invalids += Number(high);
    console.log("invalid:", high);
  }
  let i = Number(low);
  let j = Number(high);
  for (i = i + 1; i < j; i++) {
    if (isInvalid(String(i))) {
      invalids += i;
      console.log("invalid:", i);
    }
  }
});

console.log("RESULT:", invalids);
