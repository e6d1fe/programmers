// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const answer = [];

  let person1 = 0,
    person2 = 0,
    person3 = 0;

  const pick1 = [1, 2, 3, 4, 5];
  const pick2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, idx) => {
    if (pick1[idx % pick1.length] === answer) person1 += 1;
    if (pick2[idx % pick2.length] === answer) person2 += 1;
    if (pick3[idx % pick3.length] === answer) person3 += 1;
  });

  const bestScore = Math.max(person1, person2, person3);

  if (person1 === bestScore) answer.push(1);
  if (person2 === bestScore) answer.push(2);
  if (person3 === bestScore) answer.push(3);

  return answer;
}
