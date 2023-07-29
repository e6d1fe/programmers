// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let missing = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      missing += i;
    }
  }

  return missing;
}
