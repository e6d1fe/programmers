// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  while (arr.length > 1) {
    const a = arr.pop();
    const b = arr.pop();

    let gcd;

    for (let i = Math.max(a, b); i <= a * b; i++) {
      if (i % a === 0 && i % b === 0) {
        gcd = i;
        break;
      }
    }

    arr.push(gcd);
  }

  return arr[0];
}

// 다른 풀이 1: 최소공배수를 구할 두 수를 곱한 후 최대공약수로 나눠주기 = 최소공배수

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
