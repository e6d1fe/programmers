// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  const subtract = array.map((item) => item - n);

  const subtractAbs = array.map((item) => Math.abs(item - n));

  const smallest = Math.min(...subtractAbs);

  if (subtractAbs.indexOf(smallest) === subtractAbs.lastIndexOf(smallest)) {
    return array[subtractAbs.indexOf(smallest)];
  } else {
    return Math.min(...subtract.filter((item, idx) => subtractAbs[idx] === smallest)) + n;
  }
}

// 다른 풀이 1: 더 간단하게 표현

function solution(array, n) {
  return array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b)[0];
}
