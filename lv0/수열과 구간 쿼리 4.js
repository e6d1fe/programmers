// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = [...queries[i]];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }

  return arr;
}

// 다른 풀이 1: for of 사용해서 더 간단하게

function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }

  return arr;
}
