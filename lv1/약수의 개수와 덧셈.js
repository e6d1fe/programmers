// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let divisorsCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisorsCount++;
    }
    divisorsCount % 2 ? (sum -= i) : (sum += i);
  }

  return sum;
}

// 다른 풀이 1: 제곱근이 정수면 약수의 개수는 홀수

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (sum -= i) : (sum += i);
  }

  return sum;
}
