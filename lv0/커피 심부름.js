// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  let totalPrice = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("americano") || order[i] === "anything") {
      totalPrice += 4500;
    } else {
      totalPrice += 5000;
    }
  }

  return totalPrice;
}

// 다른 풀이 1: using reduce

function solution(order) {
  return order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);
}
