// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  let replaced = "";

  for (let i = 0; i < myString.length; i++) {
    myString[i] === "A" ? (replaced += "B") : (replaced += "A");
  }

  return replaced.includes(pat) ? 1 : 0;
}

// 다른 풀이 1: using Array.map

function solution(myString, pat) {
  return myString
    .split("")
    .map((item) => (item === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}
