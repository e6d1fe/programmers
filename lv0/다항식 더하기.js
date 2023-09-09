// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let x = 0;
  let number = 0;

  const split = polynomial.split(" + ");

  for (let i = 0; i < split.length; i++) {
    if (split[i].includes("x")) {
      if (split[i].length > 1) {
        x += Number(split[i].slice(0, split[i].length - 1));
      } else {
        x += 1;
      }
    } else {
      number += Number(split[i]);
    }
  }

  if (x === 0 && number === 0) {
    return 0;
  } else if (x === 0 && number !== 0) {
    return String(number);
  } else if (x === 1 && number === 0) {
    return "x";
  } else if (x === 1 && number !== 0) {
    return `x + ${number}`;
  } else if (number === 0) {
    return `${x}x`;
  } else {
    return `${x}x + ${number}`;
  }
}
