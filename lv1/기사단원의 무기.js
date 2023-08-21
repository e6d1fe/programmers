// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let metalSum = 0;

  const knights = new Array(number).fill(1).map((item, idx) => item + idx);

  knights.map((item) => {
    let divisors = 0;
    for (let j = 1; j <= Math.floor(Math.sqrt(item)); j++) {
      if (item / j === j) {
        divisors += 1;
      } else if (item % j === 0) {
        divisors += 2;
      }
    }

    divisors > limit ? (metalSum += power) : (metalSum += divisors);
  });

  return metalSum;
}
