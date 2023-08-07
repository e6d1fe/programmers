// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
  const greaterThanK = [];

  for (let i = 0; i < intStrs.length; i++) {
    if (Number(intStrs[i].slice(s, s + l)) > k) {
      greaterThanK.push(Number(intStrs[i].slice(s, s + l)));
    }
  }

  return greaterThanK;
}
