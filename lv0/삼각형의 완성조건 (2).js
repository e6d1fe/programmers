// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  let lastSide = 0;

  const [a, b] = sides;

  for (let i = 1; i < a + b; i++) {
    if (i < Math.max(a, b)) {
      if (Math.min(a, b) + i > Math.max(a, b)) lastSide += 1;
    } else {
      lastSide += 1;
    }
  }

  return lastSide;
}
