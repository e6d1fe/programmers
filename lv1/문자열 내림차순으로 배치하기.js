// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  const lowercases = [];
  const uppercases = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === s[i]) {
      lowercases.push(s[i]);
    } else {
      uppercases.push(s[i]);
    }
  }

  return [...lowercases.sort().reverse(), ...uppercases.sort().reverse()].join("");
}

// 다른 풀이 1: just using Array.sort

function solution(s) {
  return s.split("").sort().reverse().join("");
}

// Array.sort를 했을 때, 대문자부터 알파벳 순서대로 + 소문자 알파벳 순서대로 나열된다.
