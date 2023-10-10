// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const sums = [];

  elements = [...elements, ...elements];

  let length = 1;

  while (length <= elements.length / 2) {
    for (let i = 0; i < elements.length / 2; i++) {
      const slice = elements.slice(i, i + length);
      sums.push(slice.reduce((acc, cur) => acc + cur, 0));
    }

    length += 1;
  }

  return [...new Set(sums)].length;
}
