// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr) {
  let times = 0;

  while (!arr.every((item) => (item >= 50 && item % 2) || (item < 50 && item % 2 === 0))) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2) {
        arr[i] = arr[i] * 2 + 1;
      }
    }

    times += 1;
  }

  return times;
}
