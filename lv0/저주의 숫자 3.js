// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  const exclude3 = [];

  let i = 1;

  while (exclude3.length < n) {
    if (i % 3 && !String(i).includes("3")) {
      exclude3.push(i);
    }

    i++;
  }

  return exclude3[exclude3.length - 1];
}
