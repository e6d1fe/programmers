// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const xs = [];
  const ys = [];

  for (let i = 0; i < dots.length; i++) {
    xs.push(dots[i][0]);
    ys.push(dots[i][1]);
  }

  return (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));
}
