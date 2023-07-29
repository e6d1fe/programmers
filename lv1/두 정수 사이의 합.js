// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  const bigger = a >= b ? a : b;
  const smaller = a >= b ? b : a;

  let sum = 0;

  for (let i = smaller; i <= bigger; i++) {
    sum += i;
  }

  return sum;
}

// 다른 풀이 1: using Math.max & Math.min

function solution(a, b) {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}
