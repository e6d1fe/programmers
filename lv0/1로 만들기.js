// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
  let operations = 0;

  for (let i = 0; i < num_list.length; i++) {
    while (num_list[i] !== 1) {
      num_list[i] = num_list[i] % 2 ? (num_list[i] - 1) / 2 : num_list[i] / 2;

      operations += 1;
    }
  }

  return operations;
}
