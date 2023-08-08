// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const countObj = {};

  for (let i = 0; i < array.length; i++) {
    countObj[array[i]] ? countObj[array[i]]++ : (countObj[array[i]] = 1);
  }

  const countArr = [];

  for (let i in countObj) {
    countArr.push([i, countObj[i]]);
  }

  countArr.sort((a, b) => b[1] - a[1]);

  if (countArr.length > 1 && countArr[0][1] === countArr[1][1]) {
    return -1;
  } else {
    return Number(countArr[0][0]);
  }
}

// 다른 풀이 1: using Array.reduce & Array.map

function solution(array) {
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]);

  if (items.length > 1 && items[0][1] === items[1][1]) {
    return -1;
  } else {
    return items[0][0];
  }
}
