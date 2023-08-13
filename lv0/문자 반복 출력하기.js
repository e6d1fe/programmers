// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  let repeated = "";

  for (let i = 0; i < my_string.length; i++) {
    repeated += my_string[i].repeat(n);
  }

  return repeated;
}

// 다른 풀이 1: using the spread operator & Array.map

function solution(my_string, n) {
  return [...my_string].map((item) => item.repeat(n)).join("");
}
