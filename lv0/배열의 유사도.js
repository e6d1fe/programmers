// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  let recur = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      recur += 1;
    }
  }

  return recur;
}

// 다른 풀이 1: using Array.filter

function solution(s1, s2) {
  const recur = s1.filter((item) => s2.includes(item));

  return recur.length;
}
