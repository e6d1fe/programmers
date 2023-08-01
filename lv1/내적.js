// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 다른 풀이 1: using Array.reduce

function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
