// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
  return Array(start - end + 1)
    .fill(start)
    .map((item, idx) => item - idx);
}
