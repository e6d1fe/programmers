// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  let odd = "";
  let even = "";

  for (let num of num_list) {
    num % 2 ? (odd += num) : (even += num);
  }

  return Number(odd) + Number(even);
}
