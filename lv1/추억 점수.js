// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const result = [];

  for (let i = 0; i < photo.length; i++) {
    let yearningSum = 0;

    for (const person of photo[i]) {
      if (name.includes(person)) {
        yearningSum += yearning[name.indexOf(person)];
      }
    }

    result.push(yearningSum);
  }

  return result;
}

// 다른 풀이 1: 짧게 표현 using Array.map & Array.reduce

function solution(name, yearning, photo) {
  return photo.map((item) =>
    item.reduce((acc, cur) => (name.includes(cur) ? acc + yearning[name.indexOf(cur)] : acc), 0)
  );
}
