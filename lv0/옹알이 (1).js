// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  for (let j = 0; j < babbling.length; j++) {
    for (let i = 0; i < words.length; i++) {
      babbling[j] = babbling[j].replace(words[i], "*");
    }
  }

  return babbling.filter((item) => item.split("").every((item) => item === "*")).length;
}
