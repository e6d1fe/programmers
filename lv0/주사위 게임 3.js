// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  if (a === b && b === c && c === d) {
    return 1111 * a;
  } else if (a !== b && b === c && c === d) {
    return (10 * b + a) ** 2;
  } else if (b !== c && a === c && c === d) {
    return (10 * c + b) ** 2;
  } else if (c !== d && a === b && b === d) {
    return (10 * d + c) ** 2;
  } else if (d !== a && a === b && b === c) {
    return (10 * a + d) ** 2;
  } else if (a === b && c === d && b !== c) {
    return (a + c) * Math.abs(a - c);
  } else if (a === c && b === d && c !== b) {
    return (a + b) * Math.abs(a - b);
  } else if (a === d && b === c && d !== b) {
    return (a + b) * Math.abs(a - b);
  } else if (a === b && a !== c && a !== d && c !== d) {
    return c * d;
  } else if (a === c && a !== b && a !== d && b !== d) {
    return b * d;
  } else if (a === d && a !== b && a !== c && b !== c) {
    return b * c;
  } else if (b === c && b !== a && b !== d && a !== d) {
    return a * d;
  } else if (b === d && b !== a && b !== c && a !== c) {
    return a * c;
  } else if (c === d && c !== a && c !== b && a !== b) {
    return a * b;
  } else if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
    return Math.min(a, b, c, d);
  }
}
