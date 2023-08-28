// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let coupons = chicken;

  let totalUsingCoupons = 0;

  while (coupons >= 10) {
    let usingCoupons = Math.floor(coupons / 10);

    totalUsingCoupons += usingCoupons;

    coupons = (coupons % 10) + usingCoupons;
  }

  return totalUsingCoupons;
}

// 다른 풀이 1: 더 간단한 접근

function solution(chicken) {
  if (chicken == 0) return 0;

  return Math.floor((chicken - 10) / 9 + 1);
}
