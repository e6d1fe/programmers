// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr) {
  return strArr.map((item, idx) => (idx % 2 ? item.toUpperCase() : item.toLowerCase()));
}
