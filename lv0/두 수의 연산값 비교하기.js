// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  const ab = Number(String(a) + String(b));

  return Math.max(ab, 2 * a * b);
}
