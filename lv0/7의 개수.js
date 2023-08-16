// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  return array
    .join("")
    .split("")
    .reduce((acc, cur) => (cur === "7" ? acc + 1 : acc), 0);
}
