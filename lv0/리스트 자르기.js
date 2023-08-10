// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
  const [a, b, c] = [...slicer];

  if (n === 1) {
    return num_list.slice(0, b + 1);
  } else if (n === 2) {
    return num_list.slice(a);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);
  } else {
    const answer = [];

    for (let i = a; i <= b; i += c) {
      answer.push(num_list[i]);
    }

    return answer;
  }
}

// 다른 풀이 1: 마지막 조건문 더 깔끔하게 by using Array.filter

return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
