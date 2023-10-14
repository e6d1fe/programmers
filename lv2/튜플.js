// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const answer = [];

  let tuples = [];

  s = s.slice(1, s.length - 1);
  s = s.split('},{');
  s[0] = s[0].slice(1);
  s[s.length - 1] = s[s.length - 1].slice(0, s[s.length - 1].length - 1);

  for (let i = 0; i < s.length; i++) {
    const part = [];
    s[i].split(',').forEach((item) => {
      if (!isNaN(item)) part.push(item);
    });
    tuples.push(part);
  }

  tuples = tuples.filter((item) => item.length !== 0).sort((a, b) => a.length - b.length);

  for (let tuple of tuples) {
    for (let item of tuple) {
      if (!answer.includes(Number(item))) answer.push(Number(item));
    }
  }

  return answer;
}

// 다른 풀이 1: using JSON.parse and regex to replace curly braces & array.reduce

function solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur, idx) => {
      if (idx) {
        return acc.concat(cur.filter((item) => !acc.includes(item)));
      }

      return cur;
    }, []);
}
