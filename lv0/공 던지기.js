// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let full = [];

  while (full.length < k * 2) full = [...full, ...numbers];

  return full[0 + (k - 1) * 2];
}

// 다른 풀이 1

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}
