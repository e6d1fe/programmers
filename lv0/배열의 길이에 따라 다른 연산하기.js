// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  if (arr.length % 2) {
    return arr.map((item, idx) => (idx % 2 === 0 ? item + n : item));
  } else {
    return arr.map((item, idx) => (idx % 2 ? item + n : item));
  }
}
