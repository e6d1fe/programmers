// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start, end) {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
}

// 다른 풀이 1: using Array

function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((item, idx) => item + idx);
}
