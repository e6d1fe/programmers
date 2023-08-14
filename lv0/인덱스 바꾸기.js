// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  const num1Index = my_string[num1];
  const num2Index = my_string[num2];

  const split = my_string.split("");

  split.splice(num1, 1, num2Index);
  split.splice(num2, 1, num1Index);

  return split.join("");
}

// 다른 풀이 1: 더 간단하게

function solution(my_string, num1, num2) {
  my_string = my_string.split("");

  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join("");
}
