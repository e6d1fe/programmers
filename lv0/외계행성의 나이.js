// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  const ageRange = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  return String(age)
    .split("")
    .map((item) => ageRange[item])
    .join("");
}
