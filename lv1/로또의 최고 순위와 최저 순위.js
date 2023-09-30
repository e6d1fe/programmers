// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rubric = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  const scoreboard = {
    currentScore: 0,
    unrecognizable: 0,
  };
  const remaining_win_nums = [];

  for (let number of lottos) {
    if (win_nums.includes(number)) {
      scoreboard.currentScore += 1;
    } else if (number === 0) {
      scoreboard.unrecognizable += 1;
    }
  }

  for (let number of win_nums) {
    if (!lottos.includes(number)) {
      remaining_win_nums.push(number);
    }
  }

  const bestCase =
    scoreboard.unrecognizable !== 0
      ? rubric[String(scoreboard.currentScore + scoreboard.unrecognizable)]
      : rubric[scoreboard.currentScore];

  const worstCase = Object.keys(rubric).includes(String(scoreboard.currentScore))
    ? rubric[scoreboard.currentScore]
    : 6;

  return [bestCase, worstCase];
}
