// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  let gcd = 1;

  for (i = 1; i <= Math.min(numer, denom); i++) {
    if (numer % i === 0 && denom % i === 0) {
      gcd = i;
    }
  }

  return [numer / gcd, denom / gcd];
}

// 다른 풀이 1: 최대공약수 구하는 재귀함수 활용하기

function getGcd(a, b) {
  return a % b ? getGcd(b, a % b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  const gcd = getGcd(numer, denom);

  return [numer / gcd, denom / gcd];
}
