// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}
