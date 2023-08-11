//https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
  const x = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 1; j <= arr[i] * 2; j++) {
        x.push(arr[i]);
      }
    } else {
      for (let j = 1; j <= arr[i]; j++) {
        x.pop();
      }
    }
  }

  return x;
}
