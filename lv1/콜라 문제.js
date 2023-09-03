// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let bottles = n;

  let freebies = 0;

  while (bottles >= a) {
    freebies += Math.floor(bottles / a) * b;

    bottles = Math.floor(bottles / a) * b + (bottles % a);
  }

  return freebies;
}
