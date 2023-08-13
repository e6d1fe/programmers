// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
  let newStr = "";

  for (let str of str_list) {
    if (!str.includes(ex)) newStr += str;
  }

  return newStr;
}

// 다른 풀이 1: using Array.map

function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => acc + (cur.includes(ex) ? "" : cur), "");
}
