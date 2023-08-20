// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const unique = Array.from(new Set(arr));

  if (unique.length > k) {
    return unique.slice(0, 0 + k);
  } else if (unique.length < k) {
    const needed = k - unique.length;

    for (let i = 1; i <= needed; i++) {
      unique.push(-1);
    }

    return unique;
  } else {
    return unique;
  }
}

// 다른 풀이 1: 더 간단하게 표현

function solution(arr, k) {
  const set = Array.from(new Set(arr));

  return set.length > k ? set.slice(0, k) : [...set, ...new Array(k - set.length).fill(-1)];
}
