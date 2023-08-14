// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  const multiply = [];

  for (let i = 0; i < numbers.length; i++) {
    const target = numbers.splice(i, 1);

    numbers.map((item) => multiply.push(item * target));
  }

  return Math.max(...multiply);
}

// 다른 풀이 1: 더 간단하게

function solution(numbers) {
  numbers.sort((a, b) => b - a);

  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
