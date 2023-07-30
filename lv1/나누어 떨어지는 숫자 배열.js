// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const processed = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  return processed.length === 0 ? [-1] : processed;
}
