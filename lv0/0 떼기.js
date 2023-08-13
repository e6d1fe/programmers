// https://school.programmers.co.kr/learn/courses/30/lessons/181847

function solution(n_str) {
  let strip0 = n_str;

  while (strip0.startsWith("0")) strip0 = strip0.replace("0", "");

  return strip0;
}
