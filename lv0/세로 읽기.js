// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
  const split = [];

  let answer = "";

  for (let i = 0; i < my_string.length; i += m) {
    split.push(my_string.slice(i, i + m));
  }

  for (let i = 0; i < split.length; i++) {
    answer += split[i][c - 1];
  }

  return answer;
}

// 다른 풀이 1: 더 간단하게 using Array.filter

function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
