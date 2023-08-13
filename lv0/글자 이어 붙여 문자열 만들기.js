// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
  let str = "";

  for (let i = 0; i < index_list.length; i++) {
    str += my_string[index_list[i]];
  }

  return str;
}

// 다른 풀이 1: using Array.map

function solution(my_string, index_list) {
  return index_list.map((item) => my_string[item]).join("");
}
