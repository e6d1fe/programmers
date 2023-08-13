// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let sum = 0;

  if (n % 2) {
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      sum += i ** 2;
    }
  }

  return sum;
}
