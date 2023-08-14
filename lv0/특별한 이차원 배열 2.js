// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr) {
  let answer;

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === arr[j][i]) {
        answer = 1;
      } else {
        answer = 0;
        break;
      }
    }
  }

  return answer;
}

// 다른 풀이 1: using Array.every

function solution(arr) {
  return arr.every((item, i) => item.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}
