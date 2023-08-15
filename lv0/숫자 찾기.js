// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  return String(num).includes(String(k)) ? String(num).indexOf(String(k)) + 1 : -1;
}
