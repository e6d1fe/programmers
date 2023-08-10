// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  const first2 = arr.indexOf(2);
  const last2 = arr.lastIndexOf(2);

  if (first2 === -1 && last2 === -1) {
    return [-1];
  } else {
    return arr.slice(first2, last2 + 1);
  }
}
