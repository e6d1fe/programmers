// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  const copy = [...array];

  const biggest = copy.sort((a, b) => b - a)[0];

  return [biggest, array.indexOf(biggest)];
}

// 다른 풀이 1: using Math.max

function solution(array) {
  const biggest = Math.max(...array);

  return [biggest, array.indexOf(biggest)];
}
