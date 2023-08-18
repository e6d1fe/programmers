// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  const result = [];

  for (let i = 0; i <= num_list.length - n; i += n) {
    result.push(num_list.slice(i, i + n));
  }

  return result;
}

// 다른 풀이 1: using Array.splice

function solution(num_list, n) {
  const result = [];

  while (num_list.length) {
    result.push(num_list.splice(0, n));
  }

  return result;
}
