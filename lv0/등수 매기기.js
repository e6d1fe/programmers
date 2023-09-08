// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const averageSorted = score.map((item) => (item[0] + item[1]) / 2).sort((a, b) => b - a);

  return score.map((item) => averageSorted.indexOf((item[0] + item[1]) / 2) + 1);
}
