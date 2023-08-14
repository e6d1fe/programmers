// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
  return todo_list.filter((item, idx) => finished[idx] === false);
}
