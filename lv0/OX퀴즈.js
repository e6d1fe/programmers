// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const result = [];

  for (let i = 0; i < quiz.length; i++) {
    const [a, operator, b, equal, outcome] = quiz[i].split(" ");

    if (operator === "+") {
      Number(a) + Number(b) === Number(outcome) ? result.push("O") : result.push("X");
    } else {
      Number(a) - Number(b) === Number(outcome) ? result.push("O") : result.push("X");
    }
  }

  return result;
}
