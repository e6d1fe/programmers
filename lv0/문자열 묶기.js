// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  const track = {};

  for (let str of strArr) {
    if (track.hasOwnProperty(str.length)) {
      track[str.length] += 1;
    } else {
      track[str.length] = 1;
    }
  }

  return Object.entries(track).sort((a, b) => b[1] - a[1])[0][1];
}

// 다른 풀이 1: using Arrays

function solution(strArr) {
  const arr = new Array(30).fill(0);

  for (let str of strArr) arr[str.length] += 1;

  return Math.max(...arr);
}
