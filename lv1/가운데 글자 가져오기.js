// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  return s.length % 2
    ? s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

// 다른 풀이 1: shortened version

function solution(s) {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 ? s.slice(middle, middle + 1) : s.slice(middle - 1, middle + 1);
}
