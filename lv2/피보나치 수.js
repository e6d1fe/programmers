// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = 0;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    answer = (a + b) % 1234567;

    a = b;
    b = answer;
  }

  return answer;
}
