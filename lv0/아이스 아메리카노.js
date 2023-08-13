// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const americanos = Math.floor(money / 5500);
  const change = money - americanos * 5500;

  return [americanos, change];
}
