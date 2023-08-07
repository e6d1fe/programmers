// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
  const before = my_string.slice(0, s);
  const flipped = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  const after = my_string.slice(e + 1);

  return before + flipped + after;
}
