// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
  return arr.filter((item) => !delete_list.includes(item));
}
