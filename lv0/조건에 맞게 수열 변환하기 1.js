// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
  return arr.map((item) =>
    item % 2 === 0 && item >= 50 ? item / 2 : item % 2 && item < 50 ? item * 2 : item
  );
}
