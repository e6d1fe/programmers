// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  return array.sort((a, b) => b - a)[Math.floor(array.length / 2)];
}
