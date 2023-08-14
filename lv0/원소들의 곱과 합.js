// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur);
  const sum = num_list.reduce((acc, cur) => acc + cur) ** 2;

  return multiply < sum ? 1 : 0;
}
