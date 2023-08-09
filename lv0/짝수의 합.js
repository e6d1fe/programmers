// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  let evenSum = 0;

  for (let i = 0; i <= n; i += 2) {
    evenSum += i;
  }

  return evenSum;
}
