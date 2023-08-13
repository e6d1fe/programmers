// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
  return arr.map((item) => (k % 2 ? item * k : item + k));
}
