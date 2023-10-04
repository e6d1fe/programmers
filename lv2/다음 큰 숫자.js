// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let larger = n;

  while (
    !(
      larger > n &&
      n
        .toString(2)
        .split('')
        .filter((item) => item === '1').length ===
        larger
          .toString(2)
          .split('')
          .filter((item) => item === '1').length
    )
  ) {
    larger += 1;
  }

  return larger;
}
