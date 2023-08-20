// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const split = my_string.split(" ");

  let result = Number(split[0]);

  for (let i = 1; i < split.length - 1; i += 2) {
    split[i] === "+" ? (result += Number(split[i + 1])) : (result -= Number(split[i + 1]));
  }

  return result;
}
