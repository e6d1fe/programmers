// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  for (let i = 0; i < before.length; i++) {
    after = after.replace(before[i], "");
  }

  return after.length === 0 ? 1 : 0;
}

// 다른 풀이 1: 더 간단한 접근방법

function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}
