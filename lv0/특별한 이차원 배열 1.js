// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    const innerArr = new Array(n).fill(0);

    innerArr[i] = 1;

    matrix.push(innerArr);
  }

  return matrix;
}
