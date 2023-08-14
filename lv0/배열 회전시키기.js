// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  const altered = [];

  if (direction === "right") {
    for (let i = 0; i < numbers.length - 1; i++) {
      altered.push(numbers[i]);
    }

    return [numbers[numbers.length - 1], ...altered];
  } else {
    for (let i = 1; i < numbers.length; i++) {
      altered.push(numbers[i]);
    }

    return [...altered, numbers[0]];
  }
}

// 다른 풀이 1: 더 간단하게

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
}
