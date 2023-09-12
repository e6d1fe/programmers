// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const min = Math.min(lines[0][0], lines[1][0], lines[2][0]);
  const max = Math.max(lines[0][1], lines[1][1], lines[2][1]);

  const range = new Array(max - min + 1).fill(min).map((item, idx) => item + idx);
  const result = new Array(max - min + 1).fill(0);

  for (let i = 0; i < lines.length; i++) {
    const [a, b] = lines[i];
    for (let j = a; j < b; j++) {
      if (result[range.indexOf(j)] === "*") {
        result[range.indexOf(j)] = "&";
      } else if (result[range.indexOf(j)] === 0) {
        result[range.indexOf(j)] = "*";
      } else {
        result[range.indexOf(j)] = "&";
      }
    }
  }

  return result.filter((item) => item === "&").length;
}
