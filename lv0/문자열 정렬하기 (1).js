// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .split("")
    .filter((item) => !isNaN(item))
    .map(Number)
    .sort((a, b) => a - b);
}
