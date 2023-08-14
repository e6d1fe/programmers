// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return String(order)
    .split("")
    .reduce((acc, cur) => (cur % 3 === 0 && cur !== "0" ? acc + 1 : acc), 0);
}
