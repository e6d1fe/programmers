// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let days = 0;
  let todaysSinger = 0;

  const hallOfFame = [];

  const lowest = [];

  while (days < score.length) {
    if (hallOfFame.length < k) {
      hallOfFame.push(score[todaysSinger]);

      todaysSinger += 1;
      days += 1;
    } else {
      if (score[todaysSinger] > Math.min(...hallOfFame)) {
        hallOfFame.sort((a, b) => b - a).pop();
        hallOfFame.push(score[todaysSinger]);

        todaysSinger += 1;
        days += 1;
      } else {
        todaysSinger += 1;
        days += 1;
      }
    }

    lowest.push(Math.min(...hallOfFame));
  }

  return lowest;
}

// 다른 풀이 1: 더 간단하게 표현 using Array.reduce

function solution(k, score) {
  const hallOfFame = [];

  return score.reduce((acc, cur) => {
    if (hallOfFame.length < k) {
      hallOfFame.push(cur);
      hallOfFame.sort((a, b) => b - a);
    } else {
      hallOfFame.push(cur);
      hallOfFame.sort((a, b) => b - a);
      hallOfFame.pop();
    }

    acc.push(Math.min(...hallOfFame));

    return acc;
  }, []);
}
