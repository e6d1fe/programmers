// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  let pairs = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      pairs += 1;
    }
  }

  return pairs;
}

// 다른 풀이 1: using Number.isInteger

function solution(n) {
  let pairs = 0;

  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) {
      pairs += 1;
    }
  }

  return pairs;
}
