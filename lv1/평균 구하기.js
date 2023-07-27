// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// 다른 풀이 1: using reduce

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
