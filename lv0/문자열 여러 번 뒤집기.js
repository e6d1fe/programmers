// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
  let split = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];

    const before = split.slice(0, s);
    const between = split.slice(s, e + 1).reverse();
    const after = split.slice(e + 1);

    split = [...before, ...between, ...after];
  }

  return split.join("");
}
