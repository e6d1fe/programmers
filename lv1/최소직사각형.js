// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));

  const w = sizes.map((item) => item[0]);

  const h = sizes.map((item) => item[1]);

  return Math.max(...w) * Math.max(...h);
}
