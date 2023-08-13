// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  const x = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      x.push(arr[i]);
    }
  }

  return x;
}

// 다른 풀이 1: using Array.reduce, Array.fill

function solution(arr) {
  return arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], []);
}
