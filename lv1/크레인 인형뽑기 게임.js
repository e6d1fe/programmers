// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const retrieved = [];

  let burst = 0;

  const rearranged = [];

  for (let i = 0; i < board.length; i++) {
    const line = [];

    for (let j = 0; j < board.length; j++) {
      line.push(board[j][i]);
    }
    rearranged.push(line.filter((item) => item !== 0).reverse());
  }

  for (let i = 0; i < moves.length; i++) {
    const popped = rearranged[moves[i] - 1].pop();

    if (popped) retrieved.push(popped);
  }

  for (let i = 0; i < retrieved.length; i++) {
    if (retrieved[i] === retrieved[i - 1]) {
      retrieved.splice(i - 1, 2);
      burst += 2;
      i = 0;
    }
  }

  return burst;
}

// transposing a 2D array using reduce & map

const transpose = (matrix) =>
  matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);
