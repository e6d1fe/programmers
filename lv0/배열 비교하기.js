// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  let arr1Index = arr1.length;
  let arr2Index = arr2.length;

  if (arr1Index === arr2Index) {
    arr1Index = arr1.reduce((acc, cur) => acc + cur, 0);
    arr2Index = arr2.reduce((acc, cur) => acc + cur, 0);
  }

  return arr2Index > arr1Index ? -1 : arr2Index === arr1Index ? 0 : 1;
}
