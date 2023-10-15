// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let numA = a,
    numB = b,
    attempt = 0;

  while (numA !== numB) {
    numA = Math.ceil(numA / 2);
    numB = Math.ceil(numB / 2);
    attempt += 1;
  }

  return attempt;
}
