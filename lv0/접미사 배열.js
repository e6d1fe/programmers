// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
  const suffixes = [];

  for (let i = 0; i < my_string.length; i++) {
    suffixes.push(my_string.slice(i));
  }

  return suffixes.sort();
}
