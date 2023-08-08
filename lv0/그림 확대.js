// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  const pictureTimesK = [];

  for (let i = 0; i < picture.length; i++) {
    let times = "";

    for (let j = 0; j < picture[i].length; j++) {
      times += picture[i][j].repeat(k);
    }

    for (let l = 1; l <= k; l++) {
      pictureTimesK.push(times);
    }
  }

  return pictureTimesK;
}

// 다른 풀이 1: using Array.reduce

function solution(picture, k) {
  const pictureTimesK = [];

  picture.forEach((line) => {
    const times = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    for (let i = 1; i <= k; i++) {
      pictureTimesK.push(times);
    }
  });

  return pictureTimesK;
}
