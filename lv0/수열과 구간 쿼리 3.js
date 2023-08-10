// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
  for (let [i, j] of queries) {
    const ithItem = arr[i];
    const jthItem = arr[j];
    arr[i] = jthItem;
    arr[j] = ithItem;
  }

  return arr;
}

// 다른 풀이 1: 더 간단하게

function solution(arr, queries) {
  for (let [i, j] of queries) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }

  return arr;
}
