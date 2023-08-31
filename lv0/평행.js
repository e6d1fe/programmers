// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  const a = dots[0];
  let b;
  let c;
  let d;

  for (let i = 1; i < dots.length; i++) {
    b = dots[i];
    [c, d] = dots.filter((item, idx) => idx !== 0 && idx !== i);
    if ((b[1] - a[1]) / (b[0] - a[0]) === (d[1] - c[1]) / (d[0] - c[0])) return 1;
  }

  return 0;
}
