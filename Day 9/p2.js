const fs = require("fs");

const points = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 9/input.txt",
    "utf8"
  )
  .trim()
  .split("\n")
  .map((l) => l.split(",").map(Number));

const edges = [];
for (let i = 0; i < points.length; i++) {
  const [x1, y1] = points[i];
  const [x2, y2] = points[(i + 1) % points.length];
  edges.push({x1, y1, x2, y2});
}

function intervalsAtY(y) {
  const xs = [];

  for (const {x1, y1, x2, y2} of edges) {
    if (x1 !== x2) continue;

    const ymin = Math.min(y1, y2);
    const ymax = Math.max(y1, y2);

    if (y >= ymin && y < ymax) {
      xs.push(x1);
    }
  }

  xs.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < xs.length; i += 2) {
    res.push([xs[i], xs[i + 1]]);
  }
  return res;
}

const ys = points.map((p) => p[1]);
const yMin = Math.min(...ys);
const yMax = Math.max(...ys);

const scan = new Map();
for (let y = yMin; y <= yMax; y++) {
  scan.set(y, intervalsAtY(y));
}

function intervalContains(intervals, x1, x2) {
  return intervals.some(([l, r]) => x1 >= l && x2 <= r);
}

let maxArea = 0;

for (let i = 0; i < points.length; i++) {
  const [x1, y1] = points[i];

  for (let j = i + 1; j < points.length; j++) {
    const [x2, y2] = points[j];
    if (x1 === x2 || y1 === y2) continue;

    const xmin = Math.min(x1, x2);
    const xmax = Math.max(x1, x2);
    const ymin = Math.min(y1, y2);
    const ymax = Math.max(y1, y2);

    let valid = true;
    for (let y = ymin + 1; y <= ymax - 1; y++) {
      if (!intervalContains(scan.get(y), xmin, xmax)) {
        valid = false;
        break;
      }
    }

    if (!valid) continue;

    const area = (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);
    if (area > maxArea) {
      maxArea = area;
    }
  }
}

console.log("Max Area:", maxArea);
