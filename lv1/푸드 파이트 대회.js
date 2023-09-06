// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let result = "";

  const water = food[0];

  for (let i = 1; i < food.length; i++) {
    result += String(i).repeat(Math.floor(food[i] / 2));
  }

  return result + "0".repeat(water) + result.split("").reverse().join("");
}
