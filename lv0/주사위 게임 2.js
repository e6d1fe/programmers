// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  if (a !== b && b !== c && c !== a) {
    return a + b + c;
  } else if ((a !== b && b === c) || (b !== a && a === c) || (c !== a && a === b)) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else if (a === b && b === c) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  }
}
