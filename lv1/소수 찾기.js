// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 에라토스테네스의 체 알고리즘 사용
// 2 이상 n 이하의 정수가 소수인지 아닌지 효율적으로 판단 가능

function solution(n) {
  const sieve = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    if (sieve[i] === 1) continue;

    for (let j = 2 * i; j <= n; j += i) {
      sieve[j] = 1;
    }
  }

  return sieve.filter((item) => item === 0).length - 2;
}

// 처음에 풀었다가 시간 초과된 풀이

function solution(n) {
  let primeNumbers = 0;

  for (let i = 1; i <= n; i++) {
    let divisors = 0;

    for (let j = 1; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) divisors += 2;
      else if (i / j === j) divisors += 1;
    }

    if (divisors === 2) primeNumbers += 1;
  }

  return primeNumbers;
}
