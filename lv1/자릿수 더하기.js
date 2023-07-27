// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  const initial = 0;
  return String(n)
    .split("")
    .reduce((a, b) => a + Number(b), initial);
}

// 다른 풀이 1: using for loop

function solution(n) {
  let sum = 0;

  for (let i = 0; i < String(n).length; i++) {
    sum += Number(String(n)[i]);
  }

  return sum;
}
