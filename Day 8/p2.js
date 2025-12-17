const fs = require("fs");

class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);

    if (ra === rb) return false;

    if (this.rank[ra] < this.rank[rb]) {
      this.parent[ra] = rb;
    } else if (this.rank[ra] > this.rank[rb]) {
      this.parent[rb] = ra;
    } else {
      this.parent[rb] = ra;
      this.rank[ra]++;
    }

    return true;
  }
}

const boxes = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC 2025/Day 8/input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const points = boxes.map((line) => line.split(",").map(Number));
const n = points.length;

const edges = [];

for (let i = 0; i < n; i++) {
  const [x1, y1, z1] = points[i];
  for (let j = i + 1; j < n; j++) {
    const [x2, y2, z2] = points[j];
    const dist = (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2;
    edges.push({i, j, dist});
  }
}

edges.sort((a, b) => a.dist - b.dist);

const uf = new UnionFind(n);
let components = n;

for (const {i, j} of edges) {
  if (uf.union(i, j)) {
    components--;

    if (components === 1) {
      const x1 = points[i][0];
      const x2 = points[j][0];
      const answer = x1 * x2;

      console.log("Last edge:", points[i], points[j]);
      console.log("Answer:", answer);
      break;
    }
  }
}
