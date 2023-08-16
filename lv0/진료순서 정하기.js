// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const people = [...emergency];

  people.sort((a, b) => b - a);

  return emergency.map((item) => people.indexOf(item) + 1);
}
