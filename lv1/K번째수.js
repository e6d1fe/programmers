// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const kthNumbers = [];

  for (let a = 0; a < commands.length; a++) {
    const [i, j, k] = [...commands[a]];
    kthNumbers.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return kthNumbers;
}
