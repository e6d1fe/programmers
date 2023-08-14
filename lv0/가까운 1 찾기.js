// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) {
      return i;
    }
  }

  return -1;
}

// 다른 풀이 1: using Array.indexOf

function solution(arr, idx) {
  return arr.indexOf(1, idx);
}

// Array.indexOf의 두번째 parameter fromIndex (optional)
// 몇번째 인덱스부터 탐색할지를 명시해줄 수 있다!
