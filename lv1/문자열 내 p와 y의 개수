// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let ps = 0;
  let ys = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.toLowerCase()[i] === "p") {
      ps += 1;
    } else if (s.toLowerCase()[i] === "y") {
      ys += 1;
    }
  }

  if (ps === 0 && ys === 0) {
    return true;
  } else if (ps === ys) {
    return true;
  } else {
    return false;
  }
}

// 다른 풀이 1: using Array.split()

function solution(s) {
  return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length ? true : false;
}
