// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
  const slices = [];

  for (let i = 0; i <= myString.length - pat.length; i++) {
    slices.push(myString.slice(i, i + pat.length));
  }

  return slices.filter((item) => item.includes(pat)).length;
}
