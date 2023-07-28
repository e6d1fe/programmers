// https://school.programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
  if (s.startsWith("-")) {
    return -Number(s.slice(1));
  } else if (s.startsWith("+")) {
    return Number(s.slice(1));
  } else {
    return Number(s);
  }
}

// 다른 풀이 1

function solution(s) {
  return s / 1;
}
