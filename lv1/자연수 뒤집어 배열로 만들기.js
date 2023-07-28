// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  const answer = [];

  for (let i = String(n).length - 1; i >= 0; i--) {
    answer.push(Number(String(n)[i]));
  }

  return answer;
}

// 다른 풀이 1

function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((item) => Number(item));
}
