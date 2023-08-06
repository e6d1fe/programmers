// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  const fivesAndZeros = [];

  for (let i = l; i <= r; i++) {
    const replace5 = String(i).replaceAll("5", "");
    const replace0 = replace5.replaceAll("0", "");

    if (replace0.length === 0) {
      fivesAndZeros.push(i);
    }
  }

  return fivesAndZeros.length ? fivesAndZeros : [-1];
}
