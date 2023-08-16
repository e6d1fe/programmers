// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  const collatz = [n];

  while (n !== 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;

    collatz.push(n);
  }

  return collatz;
}
