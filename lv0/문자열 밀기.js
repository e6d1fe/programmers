// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  let i = 0;

  const splitA = A.split("");

  while (A !== B) {
    const lastLetter = splitA.pop();

    splitA.unshift(lastLetter);

    A = splitA.join("");

    i += 1;

    if (i >= A.length && A !== B) {
      return -1;
    }
  }

  return i;
}

// 다른 풀이 1: 더 간단한 접근

function solution(a, b) {
  return (b + b).indexOf(a);
}
