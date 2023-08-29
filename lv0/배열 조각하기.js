// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2) {
      arr.splice(0, query[i]);
    } else {
      arr.splice(query[i] + 1, arr.length - query[i]);
    }
  }

  return arr;
}
