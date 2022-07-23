const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./NewFol/Test/first.txt", "utf8");
const second = readFileSync("./NewFol/Test/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./NewFol/Test/result.txt",
  `Here is the result ${first} , ${second}`,
  { flag: "a" }
);
