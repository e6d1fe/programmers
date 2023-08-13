// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const secondToLast = num_list[num_list.length - 2];

  last > secondToLast ? num_list.push(last - secondToLast) : num_list.push(last * 2);

  return num_list;
}

// 다른 풀이 1: 더 간단하게

function solution(num_list) {
  const [a, b] = [...num_list].reverse();

  return [...num_list, a > b ? a - b : a * 2];
}
