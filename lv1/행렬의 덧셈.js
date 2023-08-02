// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const matrixSum = [];

  for (let i = 0; i < arr1.length; i++) {
    const sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    matrixSum.push(sum);
  }

  return matrixSum;
}
