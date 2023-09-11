// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
  const spiral = Array.from({ length: n }, () => new Array(n).fill(0));

  let num = 1;
  let column = 0;
  let row = 0;

  for (let i = n; i > 0; i -= 2) {
    for (let j = 0; j < i; j++) {
      spiral[row][column] = num++;
      column++;
    }
    column--;
    row++;

    for (let j = 0; j < i - 1; j++) {
      spiral[row][column] = num++;
      row++;
    }
    column--;
    row--;

    for (let j = 0; j < i - 1; j++) {
      spiral[row][column] = num++;
      column--;
    }
    column++;
    row--;

    for (let j = 0; j < i - 2; j++) {
      spiral[row][column] = num++;
      row--;
    }
    column++;
    row++;
  }

  return spiral;
}
