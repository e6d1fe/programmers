// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));

  for (let i = 0; i < numlist.length - 1; i++) {
    if (Math.abs(numlist[i] - n) === Math.abs(numlist[i + 1] - n) && numlist[i] < numlist[i + 1]) {
      const before = numlist[i];
      const after = numlist[i + 1];
      numlist[i] = after;
      numlist[i + 1] = before;
    }
  }

  return numlist;
}

// 다른 풀이 1: 더 간단하게 표현 using Array.sort

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
