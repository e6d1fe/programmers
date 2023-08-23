// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) {
      result.push(-1);
    } else {
      result.push(i - s.indexOf(s[i]));

      s = s.replace(s[i], "*");
    }
  }

  return result;
}
