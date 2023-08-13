// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
  let sum = 0;
  let index = 0;

  while (sum <= n) {
    sum += numbers[index];

    index += 1;
  }

  return sum;
}
