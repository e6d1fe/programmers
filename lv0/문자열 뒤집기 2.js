// https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 다른 풀이 1: using the spread operator

function solution(my_string) {
  return [...my_string].reverse().join("");
}
