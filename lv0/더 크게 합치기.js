// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const ab = String(a) + String(b);
  const ba = String(b) + String(a);

  return ab > ba ? Number(ab) : Number(ba);
}

// 다른 풀이 1: 더 간단하게

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
