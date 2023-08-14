// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  let oddIndex = 0;
  let evenIndex = 0;

  num_list.map((item, idx) => ((idx + 1) % 2 ? (oddIndex += item) : (evenIndex += item)));

  return Math.max(oddIndex, evenIndex);
}
