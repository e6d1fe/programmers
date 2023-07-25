// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
  let answer = "";

  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }

  return answer;
}

// 다른 풀이 1

function solution(q, r, code) {
  let answer = "";

  for (let i = r; i < code.length; i += q) {
    answer += code[i];
  }

  return answer;
}

// 다른 풀이 2

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}
