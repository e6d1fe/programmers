// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let possibleDays = 0;

  for (let i = 0; i < discount.length; i++) {
    const discountList = discount.slice(i, i + 10);

    const discountItems = {};

    discountList.map((item) => {
      if (discountItems[item]) {
        discountItems[item] += 1;
      } else {
        discountItems[item] = 1;
      }
    });

    if (want.every((item, idx) => number[idx] === discountItems[item])) {
      possibleDays += 1;
    }
  }

  return possibleDays;
}
