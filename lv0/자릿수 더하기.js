// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  const sum = String(n)
    .split("")
    .reduce((arr, cur) => arr + Number(cur), 0);

  return sum;
}
