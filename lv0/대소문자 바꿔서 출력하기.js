// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  let flipped = "";

  for (let i = 0; i < str.length; i++) {
    str[i].toUpperCase() === str[i]
      ? (flipped += str[i].toLowerCase())
      : (flipped += str[i].toUpperCase());
  }

  console.log(flipped);
});

// 다른 풀이 1: using Array.reduce

const flipped = str.split("").reduce((acc, cur) => {
  return cur.toUpperCase() === cur ? (acc += cur.toLowerCase()) : (acc += cur.toUpperCase());
}, "");

console.log(flipped);
