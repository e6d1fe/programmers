// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr, intervals) {
  const newArr = [];

  for (let i = 0; i < intervals.length; i++) {
    const [a, b] = intervals[i];

    for (let j = a; j <= b; j++) {
      newArr.push(arr[j]);
    }
  }

  return newArr;
}

// 다른 풀이 1: 더 간단하게

function solution(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals;

  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}
