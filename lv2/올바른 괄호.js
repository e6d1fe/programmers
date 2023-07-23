// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  const brackets = [];

  for (const i of s) {
    if (i === "(") {
      brackets.push(i);
    } else {
      if (brackets.length === 0) {
        return false;
      }
      brackets.pop();
    }
  }

  return brackets.length === 0;
}
