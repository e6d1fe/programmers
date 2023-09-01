// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const stageTypes = new Array(N).fill(1).map((item, idx) => item + idx);

  const failureRate = {};

  for (let i = 0; i < stageTypes.length; i++) {
    const challengers = stages.filter((item) => item >= stageTypes[i]).length;
    const notClearedYet = stages.filter((item) => item === stageTypes[i]).length;

    failureRate[stageTypes[i]] = notClearedYet / challengers;
  }

  return Object.entries(failureRate)
    .sort((a, b) => b[1] - a[1])
    .map((item) => Number(item[0]));
}
