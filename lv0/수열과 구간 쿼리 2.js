// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  const answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = [...queries[i]];

    const passed = [];

    for (let j = s; j <= e; j++) {
      if (arr[j] > k) {
        passed.push(arr[j]);
      }
    }

    passed.sort((a, b) => a - b);

    passed.length ? answer.push(passed[0]) : answer.push(-1);
  }

  return answer;
}

// 다른 풀이 1: using Array.map & Array.filter

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((item) => item > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
