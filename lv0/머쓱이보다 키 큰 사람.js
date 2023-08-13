// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  const taller = array.filter((item) => item > height);

  return taller.length;
}
