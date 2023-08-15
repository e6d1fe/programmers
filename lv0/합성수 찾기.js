// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  let composites = 0;

  for (let i = 1; i <= n; i++) {
    const divisors = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors.push(j);
    }

    if (divisors.length >= 3) composites += 1;
  }

  return composites;
}
