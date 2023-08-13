// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
  let newStr = "";

  for (let i = 0; i < parts.length; i++) {
    const [s, e] = parts[i];

    newStr += my_strings[i].slice(s, e + 1);
  }

  return newStr;
}
