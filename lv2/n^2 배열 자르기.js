// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const x = Math.floor(i / n);
    const y = i % n;
    answer.push(Math.max(x + 1, y + 1));
  }

  return answer;
}
