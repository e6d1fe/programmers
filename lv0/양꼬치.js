// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const freeDrinks = Math.floor(n / 10);

  return 12000 * n + 2000 * (k - freeDrinks);
}
