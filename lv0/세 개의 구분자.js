// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
  const filtered = myStr
    .replaceAll("a", " ")
    .replaceAll("b", " ")
    .replaceAll("c", " ")
    .split(" ")
    .filter((item) => item !== "");

  return filtered.length === 0 ? ["EMPTY"] : filtered;
}
