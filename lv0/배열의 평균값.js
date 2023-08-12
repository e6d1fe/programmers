// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// 다른 풀이 1: using Array.reduce

function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum / numbers.length;
}
