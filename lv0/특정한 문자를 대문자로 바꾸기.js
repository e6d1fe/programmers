// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

// 다른 풀이 1: using Array.map

function solution(my_string, alp) {
  return my_string
    .split("")
    .map((item) => (item === alp ? item.toUpperCase() : item))
    .join("");
}
