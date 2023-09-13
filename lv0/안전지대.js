// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  let safeZone = 0;

  const dangerArea = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        dangerArea.map((item) => {
          let [x, y] = item;

          [x, y] = [x + i, y + j];

          if (x >= 0 && x < board.length && y >= 0 && y < board.length && board[x][y] === 0) {
            board[x][y] = 2;
          }
        });
      }
    }
  }

  board.map((item) => item.filter((item) => (item === 0 ? safeZone++ : item)));

  return safeZone;
}
