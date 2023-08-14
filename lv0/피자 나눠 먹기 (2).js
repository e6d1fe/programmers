// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  for (let i = Math.max(n, 6); i <= n * 6; i++) {
    if (i % n === 0 && i % 6 === 0) return i / 6;
  }
}
