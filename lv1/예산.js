// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let budgetSum = 0;
  let departments = 0;

  for (let i = 0; i < d.length; i++) {
    budgetSum += d[i];

    if (budgetSum > budget) {
      break;
    } else {
      departments += 1;
    }
  }

  return departments;
}
