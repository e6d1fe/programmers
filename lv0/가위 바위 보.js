// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  let win = "";

  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      win += "0";
    } else if (rsp[i] === "0") {
      win += "5";
    } else {
      win += "2";
    }
  }

  return win;
}

// 다른 풀이 1: 더 간단하게 using object

function solution(rsp) {
  const chances = {
    2: "0",
    0: "5",
    5: "2",
  };

  return rsp
    .split("")
    .map((item) => chances[item])
    .join("");
}
