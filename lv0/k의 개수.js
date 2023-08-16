// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let iToJ = "";

  for (let n = i; n <= j; n++) {
    iToJ += n;
  }

  return iToJ.split("").filter((item) => item === String(k)).length;
}
