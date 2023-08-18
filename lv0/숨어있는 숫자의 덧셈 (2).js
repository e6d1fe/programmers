// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  const numbers = [];

  if (!isNaN(my_string[0])) numbers.push(my_string[0]);

  for (let i = 1; i < my_string.length; i++) {
    if (!isNaN(my_string[i]) && !isNaN(my_string[i - 1])) {
      numbers[numbers.length - 1] += my_string[i];
    } else if (!isNaN(my_string[i])) {
      numbers.push(my_string[i]);
    }
  }

  return numbers.reduce((acc, cur) => acc + Number(cur), 0);
}
