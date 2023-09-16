// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const keyPlayers = {};
  const keyRanks = {};

  players.forEach((player, idx) => {
    const rank = idx + 1;
    keyPlayers[player] = rank;
    keyRanks[rank] = player;
  });

  callings.forEach((calling) => {
    const overtaken = keyRanks[keyPlayers[calling] - 1];

    keyRanks[keyPlayers[calling]] = overtaken;
    keyRanks[keyPlayers[overtaken]] = calling;
    keyPlayers[calling] -= 1;
    keyPlayers[overtaken] += 1;
  });

  return Object.values(keyRanks);
}

// 다른 풀이 1

function solution(players, callings) {
  const indexList = {};

  players.forEach((player, idx) => (indexList[player] = idx));

  for (let calling of callings) {
    const index = indexList[calling];
    const overtaken = players[index - 1];

    players[index - 1] = calling;
    players[index] = overtaken;

    indexList[calling] -= 1;
    indexList[overtaken] += 1;
  }

  return players;
}

// 시간초과가 날 때는 객체로 풀어보자!
