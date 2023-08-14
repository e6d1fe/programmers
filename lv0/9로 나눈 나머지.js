// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  const sum = number.split("").reduce((acc, cur) => acc + Number(cur), 0);

  return sum % 9;
}
