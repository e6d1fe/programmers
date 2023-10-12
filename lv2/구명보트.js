// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let boats = 0;

  people.sort((a, b) => b - a);

  people.forEach((person) => {
    if (person + people[people.length - 1] > limit) {
      boats += 1;
    } else {
      people.pop();
      boats += 1;
    }
  });

  return boats;
}
