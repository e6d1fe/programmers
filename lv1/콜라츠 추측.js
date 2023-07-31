// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let target = num;
  let times = 0;

  while (target !== 1) {
    if (target % 2) {
      target = target * 3 + 1;
    } else {
      target /= 2;
    }
    times += 1;
  }

  return times < 500 ? times : -1;
}
