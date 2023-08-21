// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  let target = 1;

  while (arr.length > target) {
    target *= 2;
  }

  return [...arr, ...new Array(target - arr.length).fill(0)];
}

// 다른 풀이 1: 로그 사용

function solution(arr) {
  const target = 2 ** Math.ceil(Math.log2(arr.length));

  return [...arr, ...new Array(target - arr.length).fill(0)];
}
