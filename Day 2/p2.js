const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 2/input.txt",
  "utf8"
);

function splitStringByLength(text, length) {
  const substrings = [];
  for (let i = 0; i < text.length; i += length) {
    substrings.push(text.substring(i, i + length));
  }
  return substrings;
}

function isInvalid(str) {
  let inVlaidity = false;

  const midpoint = Math.floor(str.length / 2);
  let i = 1;
  for (i; i <= midpoint; i++) {
    const currentPattern = str.substring(0, i);

    if (str % 1 == 0) {
      let substringArray = splitStringByLength(str, i);
      if (!substringArray.find((el) => el !== currentPattern)) {
        inVlaidity = true;
        break;
      }
    } else {
      break;
    }
  }
  return inVlaidity;
}

const pids = input.split(",");
let invalids = 0;
pids.forEach((range) => {
  const low = range.split("-")[0];
  const high = range.split("-")[1];
  if (isInvalid(low)) {
    invalids += Number(low);
  }
  if (isInvalid(high)) {
    invalids += Number(high);
  }
  let i = Number(low);
  let j = Number(high);
  for (i = i + 1; i < j; i++) {
    if (isInvalid(String(i))) {
      invalids += i;
    }
  }
});

console.log("RESULT:", invalids);
