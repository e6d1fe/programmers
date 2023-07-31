// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = 0;

  for (let i = 0; i < String(x).length; i++) {
    sum += Number(String(x)[i]);
  }

  return x % sum === 0 ? true : false;
}
