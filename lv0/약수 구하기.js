// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
  const divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }

  return divisors;
}
