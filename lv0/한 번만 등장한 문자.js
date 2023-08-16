// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  let once = "";

  for (let i = 0; i < s.length; i++) {
    if (s.replace(s[i], "") === s.replaceAll(s[i], "")) once += s[i];
  }

  return once.split("").sort().join("");
}

// 다른 풀이 1: using Array.indexOf & Array.lastIndexOf

function solution(s) {
  let once = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) once += s[i];
  }

  return once.split("").sort().join("");
}
