// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const possiblePairs = [];

  for (let i = 3; i <= Math.sqrt(brown + yellow); i++) {
    if ((brown + yellow) % i === 0) possiblePairs.push([(brown + yellow) / i, i]);
  }

  for (let pair of possiblePairs) {
    const [a, b] = [...pair];
    if ((a + b) * 2 - 4 === brown) return [a, b];
  }
}
