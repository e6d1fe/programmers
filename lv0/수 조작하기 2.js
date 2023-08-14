// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
  let str = "";

  for (let i = 1; i <= numLog.length - 1; i++) {
    if (numLog[i] - numLog[i - 1] === 1) {
      str += "w";
    } else if (numLog[i] - numLog[i - 1] === -1) {
      str += "s";
    } else if (numLog[i] - numLog[i - 1] === 10) {
      str += "d";
    } else {
      str += "a";
    }
  }

  return str;
}
