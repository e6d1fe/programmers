// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  let trueSum = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      trueSum += a + i * d;
    }
  }

  return trueSum;
}

// 다른 풀이 1: using Array.reduce

function solution(a, d, included) {
  return included.reduce((acc, cur, i) => {
    return cur ? acc + a + i * d : acc;
  }, 0);
}
