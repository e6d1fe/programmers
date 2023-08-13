// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  let numbersSum = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) numbersSum += Number(my_string[i]);
  }

  return numbersSum;
}
