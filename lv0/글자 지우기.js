// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  const split = my_string.split("");

  for (let i = 0; i < indices.length; i++) {
    split.splice(indices[i], 1, "*");
  }

  return split.join("").replaceAll("*", "");
}
