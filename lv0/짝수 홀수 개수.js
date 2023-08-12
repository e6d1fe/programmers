// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const evenAndOdd = [0, 0];

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 ? (evenAndOdd[1] += 1) : (evenAndOdd[0] += 1);
  }

  return evenAndOdd;
}
