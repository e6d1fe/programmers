// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const minIndex = arr.indexOf(Math.min(...arr));

  if (arr.length === 1) {
    return [-1];
  } else {
    arr.splice(minIndex, 1);
    return arr;
  }
}

// 다른 풀이 1: using Array.filter

function solution(arr) {
  const min = Math.min(...arr);

  return arr.length === 1 ? [-1] : arr.filter((item) => item !== min);
}
