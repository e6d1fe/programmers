// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  if (arr.length === arr[0].length) {
    return arr;
  } else if (arr.length > arr[0].length) {
    const needed = arr.length - arr[0].length;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j <= needed; j++) {
        arr[i].push(0);
      }
    }

    return arr;
  } else if (arr.length < arr[0].length) {
    const needed = arr[0].length - arr.length;

    for (let i = 1; i <= needed; i++) {
      arr.push(new Array(arr[0].length).fill(0));
    }

    return arr;
  }
}
