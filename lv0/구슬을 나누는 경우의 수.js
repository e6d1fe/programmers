// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
  const total = new Array(share)
    .fill(balls)
    .map((item, idx) => item - idx)
    .reduce((acc, cur) => acc * cur);

  const divisor = new Array(share)
    .fill(share)
    .map((item, idx) => item - idx)
    .reduce((acc, cur) => acc * cur);

  return total / divisor;
}
