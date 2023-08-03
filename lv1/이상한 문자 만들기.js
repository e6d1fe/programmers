// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const words = s.split(" ");

  const convertedWords = [];

  for (let i = 0; i < words.length; i++) {
    let converted = "";
    for (let j = 0; j < words[i].length; j++) {
      j % 2 ? (converted += words[i][j].toLowerCase()) : (converted += words[i][j].toUpperCase());
    }
    convertedWords.push(converted);
  }

  return convertedWords.join(" ");
}
