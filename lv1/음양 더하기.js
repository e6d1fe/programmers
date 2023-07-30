// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  return sum;
}

// 다른 풀이 1: shortened version using ternary operator

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }

  return sum;
}
