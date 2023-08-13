// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
  let answer;

  if (num_list.length >= 11) {
    answer = num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    answer = num_list.reduce((acc, cur) => acc * cur, 1);
  }

  return answer;
}

// 다른 풀이 1: 더 간단하게

function solution(num_list) {
  return num_list.reduce((acc, cur) => (num_list.length >= 11 ? acc + cur : acc * cur));
}
