// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let currentIndex = 0;

  while (currentIndex !== goal.length) {
    if (cards1[0] === goal[currentIndex]) {
      cards1.shift();
      currentIndex += 1;
    } else if (cards2[0] === goal[currentIndex]) {
      cards2.shift();
      currentIndex += 1;
    } else {
      return "No";
    }
  }

  return "Yes";
}
