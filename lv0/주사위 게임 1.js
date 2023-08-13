// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  if (a % 2 && b % 2) {
    return a ** 2 + b ** 2;
  } else if ((a % 2 && b % 2 === 0) || (a % 2 === 0 && b % 2)) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}
