// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return my_string
    .split("")
    .map((item) => (item.toLowerCase() === item ? item.toUpperCase() : item.toLowerCase()))
    .join("");
}
