// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const filtered = rank.filter((_, idx) => attendance[idx]).sort((a, b) => a - b);

  const indices = filtered.map((item) => rank.indexOf(item));

  return 10000 * indices[0] + 100 * indices[1] + indices[2];
}
