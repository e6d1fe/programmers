// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  const odds = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2) odds.push(i);
  }

  return odds;
}

// 다른 풀이 1: 더 간단하게

function solution(n) {
  const odds = [];

  for (let i = 1; i <= n; i += 2) odds.push(i);

  return odds;
}
