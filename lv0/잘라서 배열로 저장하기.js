// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  const result = [];

  const split = my_str.split("");

  while (split.length !== 0) {
    result.push(split.splice(0, n).join(""));
  }

  return result;
}
