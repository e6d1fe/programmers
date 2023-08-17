// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const initial = [0, 0];

  for (const key of keyinput) {
    if (key === "up") {
      if (initial[1] < (board[1] - 1) / 2) initial[1] += 1;
    } else if (key === "down") {
      if (initial[1] > -(board[1] - 1) / 2) initial[1] -= 1;
    } else if (key === "left") {
      if (initial[0] > -(board[0] - 1) / 2) initial[0] -= 1;
    } else {
      if (initial[0] < (board[0] - 1) / 2) initial[0] += 1;
    }
  }

  return initial;
}
