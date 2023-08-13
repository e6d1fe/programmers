// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
  return myString
    .split("")
    .map((item) => (item < "l" ? "l" : item))
    .join("");
}
