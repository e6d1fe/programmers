// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  const numbers = [];

  for (piece of s.split(" ")) {
    if (piece === "Z") {
      numbers.pop();
    } else {
      numbers.push(Number(piece));
    }
  }

  return numbers.reduce((acc, cur) => acc + cur, 0);
}
