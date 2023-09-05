// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const map = Array.from({ length: n }, () => Array(n).fill("*"));

  for (let i = 0; i < arr1.length; i++) {
    let toBinary = arr1[i].toString(2);

    if (toBinary.length !== n) toBinary = "0".repeat(n - toBinary.length) + toBinary;

    for (let j = 0; j < toBinary.length; j++) {
      if (toBinary[j] === "0") {
        map[i][j] = " ";
      } else {
        map[i][j] = "#";
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let toBinary = arr2[i].toString(2);

    if (toBinary.length !== n) toBinary = "0".repeat(n - toBinary.length) + toBinary;

    for (let j = 0; j < toBinary.length; j++) {
      if (toBinary[j] === "1") {
        map[i][j] = "#";
      }
    }
  }

  return map.map((item) => item.join(""));
}
