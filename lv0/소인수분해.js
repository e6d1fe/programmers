// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const primeFactors = [];

  while (n % 2 === 0) {
    n /= 2;
    primeFactors.push(2);
  }

  for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i++) {
    while (n % i === 0) {
      n /= i;
      primeFactors.push(i);
    }
  }

  if (n > 2) primeFactors.push(n);

  return Array.from(new Set(primeFactors));
}

// 다른 풀이 1

function solution(n) {
  const primeFactors = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      primeFactors.push(i);
    }
  }

  return Array.from(new Set(primeFactors));
}
