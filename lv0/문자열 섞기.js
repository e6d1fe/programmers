// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  return str1.split("").reduce((acc, cur, idx) => acc + cur + str2[idx], "");
}
