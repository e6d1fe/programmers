// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  for (let i = -num; i <= total; i++) {
    const result = new Array(num).fill(i).map((item, idx) => item + idx);

    if (result.reduce((acc, cur) => acc + cur, 0) === total) {
      return result;
    }
  }
}

// 다른 풀이 1: 더 간단하게

function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  const max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(min).map((item, idx) => item + idx);
}
